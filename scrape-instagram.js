const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const INSTAGRAM_URL = 'https://www.instagram.com/artmyfaceent/';
const OUTPUT_DIR = path.join(__dirname, 'images');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.instagram.com/'
      }
    }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        try { fs.unlinkSync(dest); } catch(_) {}
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => {
      try { fs.unlink(dest, () => {}); } catch(_) {}
      reject(err);
    });
  });
}

async function scrape() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  });

  const page = await context.newPage();
  const imageUrls = new Set();

  // Capture ALL image responses from Instagram CDN
  page.on('response', async response => {
    const url = response.url();
    const contentType = response.headers()['content-type'] || '';
    if (
      contentType.startsWith('image/') &&
      (url.includes('cdninstagram.com') || url.includes('fbcdn.net')) &&
      !url.includes('/rsrc.php') &&
      !url.includes('_s150x150') &&
      !url.includes('emoji') &&
      !url.includes('favicon')
    ) {
      if (!imageUrls.has(url)) {
        imageUrls.add(url);
        process.stdout.write(`\rCaptured ${imageUrls.size} images...`);
      }
    }
  });

  console.log('Navigating to Instagram login page...');
  await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  console.log('\n========================================');
  console.log('ACTION REQUIRED: Log in to Instagram in the browser window that just opened.');
  console.log('After you are fully logged in and can see your feed, come back here.');
  console.log('The script will automatically continue once it detects you are logged in.');
  console.log('========================================\n');

  // Wait until logged in (Instagram redirects to feed or shows home icon)
  await page.waitForURL(/instagram\.com\/(\/|reels|explore|direct|accounts\/onetap)?$/, { timeout: 120000 });
  console.log('Login detected! Navigating to the profile...');
  await page.waitForTimeout(2000);

  await page.goto(INSTAGRAM_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  // Dismiss "Turn on notifications" dialog if it appears
  try {
    const notNow = page.locator('button:has-text("Not Now"), button:has-text("Not now")').first();
    if (await notNow.isVisible({ timeout: 4000 })) {
      await notNow.click();
      await page.waitForTimeout(1000);
    }
  } catch (_) {}

  console.log('\nScrolling to load all posts...');
  let prevCount = 0;
  let noNewCount = 0;

  // Scroll until no new images load for 5 consecutive attempts
  for (let i = 0; i < 60; i++) {
    await page.evaluate(() => window.scrollBy(0, 1200));
    await page.waitForTimeout(1200);

    if (imageUrls.size === prevCount) {
      noNewCount++;
      if (noNewCount >= 5) {
        console.log(`\nNo new images after ${i + 1} scrolls, stopping.`);
        break;
      }
    } else {
      noNewCount = 0;
      prevCount = imageUrls.size;
    }

    if ((i + 1) % 5 === 0) {
      console.log(`\nScroll ${i + 1}: ${imageUrls.size} images captured so far`);
    }
  }

  // Grab img src tags too as fallback
  const srcUrls = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .map(img => img.src)
      .filter(src =>
        src &&
        (src.includes('cdninstagram.com') || src.includes('fbcdn.net')) &&
        !src.includes('/rsrc.php') &&
        !src.includes('emoji') &&
        !src.includes('favicon')
      );
  });

  srcUrls.forEach(u => {
    if (!imageUrls.has(u)) {
      imageUrls.add(u);
    }
  });

  console.log(`\n\nTotal unique image URLs found: ${imageUrls.size}`);
  await browser.close();

  // Clear old images
  const existing = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.webp'));
  existing.forEach(f => fs.unlinkSync(path.join(OUTPUT_DIR, f)));
  console.log(`Cleared ${existing.length} old images.`);

  // Download all and filter by size
  const urls = Array.from(imageUrls);
  let downloaded = 0;
  let skipped = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const ext = url.includes('.webp') ? 'webp' : 'jpg';
    const filename = `photo_${String(i + 1).padStart(3, '0')}.${ext}`;
    const dest = path.join(OUTPUT_DIR, filename);
    try {
      await downloadImage(url, dest);
      const stats = fs.statSync(dest);
      if (stats.size < 20000) {
        // Under 20KB = likely thumbnail/icon
        fs.unlinkSync(dest);
        skipped++;
      } else {
        downloaded++;
        process.stdout.write(`\rDownloaded ${downloaded} real photos (skipped ${skipped} thumbnails)...`);
      }
    } catch (err) {
      skipped++;
    }
  }

  // Rename to sequential
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.startsWith('photo_')).sort();
  files.forEach((f, idx) => {
    const ext = path.extname(f);
    const newName = `photo_${String(idx + 1).padStart(3, '0')}${ext}`;
    if (f !== newName) {
      fs.renameSync(path.join(OUTPUT_DIR, f), path.join(OUTPUT_DIR, newName));
    }
  });

  console.log(`\n\nDone! ${downloaded} real photos saved to ./images/`);
  console.log('Files:', fs.readdirSync(OUTPUT_DIR).filter(f => f.startsWith('photo_')).join(', '));
}

scrape().catch(console.error);
