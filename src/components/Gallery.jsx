import { useState, useEffect, useRef } from 'react'

/* seeded RNG for stable shuffle */
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return s / 2147483647
  }
}

function shuffle(arr, rng) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const allPhotos = shuffle([
  '/images/photo_009.jpg','/images/photo_011.jpg','/images/photo_013.jpg',
  '/images/photo_015.jpg','/images/photo_016.jpg','/images/photo_017.jpg',
  '/images/photo_018.jpg','/images/photo_019.jpg','/images/photo_020.jpg',
  '/images/photo_021.jpg','/images/photo_022.jpg','/images/photo_023.jpg',
  '/images/photo_024.jpg','/images/photo_025.jpg','/images/photo_026.jpg',
  '/images/photo_027.jpg','/images/photo_028.jpg','/images/photo_029.jpg',
  '/images/photo_030.jpg','/images/photo_031.jpg','/images/photo_032.jpg',
  '/images/photo_033.jpg','/images/photo_034.jpg','/images/photo_035.jpg',
  '/images/photo_036.jpg','/images/photo_037.jpg','/images/photo_038.jpg',
  '/images/photo_039.jpg','/images/photo_040.jpg','/images/photo_041.jpg',
  '/images/photo_042.jpg','/images/photo_043.jpg','/images/photo_044.jpg',
  '/images/photo_045.jpg','/images/photo_046.jpg','/images/photo_047.jpg',
  '/images/photo_048.jpg','/images/photo_049.jpg','/images/photo_050.jpg',
  '/images/photo_051.jpg','/images/photo_052.jpg','/images/photo_053.jpg',
  '/images/photo_054.jpg','/images/photo_055.jpg','/images/photo_056.jpg',
  '/images/photo_057.jpg','/images/photo_058.jpg','/images/photo_059.jpg',
  '/images/photo_060.jpg','/images/photo_061.jpg','/images/photo_063.jpg',
  '/images/photo_064.jpg','/images/photo_065.jpg','/images/photo_066.jpg',
  '/images/photo_067.jpg','/images/photo_068.jpg','/images/photo_069.jpg',
  '/images/photo_070.jpg','/images/photo_071.jpg','/images/photo_072.jpg',
  '/images/photo_073.jpg','/images/photo_074.jpg','/images/photo_075.jpg',
  '/images/photo_076.jpg','/images/photo_077.jpg','/images/photo_078.jpg',
  '/images/photo_079.jpg','/images/photo_083.jpg','/images/photo_084.jpg',
  '/images/photo_085.jpg','/images/photo_087.jpg','/images/photo_088.jpg',
  '/images/photo_089.jpg','/images/photo_090.jpg','/images/photo_091.jpg',
  '/images/photo_092.jpg','/images/photo_093.jpg','/images/photo_094.jpg',
  '/images/photo_095.jpg','/images/photo_096.jpg','/images/photo_097.jpg',
  '/images/photo_098.jpg','/images/photo_099.jpg','/images/photo_100.jpg',
  '/images/photo_101.jpg','/images/photo_102.jpg','/images/photo_103.jpg',
  '/images/photo_104.jpg','/images/photo_105.jpg','/images/photo_106.jpg',
  '/images/photo_107.jpg','/images/photo_109.jpg','/images/photo_110.jpg',
  '/images/photo_111.jpg','/images/photo_112.jpg','/images/photo_113.jpg',
  '/images/photo_114.jpg','/images/photo_115.jpg','/images/photo_116.jpg',
  '/images/photo_117.jpg','/images/photo_118.jpg','/images/photo_119.jpg',
  '/images/photo_120.jpg','/images/photo_121.jpg','/images/photo_122.jpg',
  '/images/photo_123.jpg','/images/photo_124.jpg','/images/photo_125.jpg',
  '/images/photo_126.jpg','/images/photo_127.jpg','/images/photo_128.jpg',
  '/images/photo_129.jpg','/images/photo_130.jpg','/images/photo_131.jpg',
  '/images/photo_132.jpg','/images/photo_133.jpg','/images/photo_134.jpg',
  '/images/photo_135.jpg','/images/photo_136.jpg','/images/photo_137.jpg',
  '/images/photo_138.jpg','/images/photo_139.jpg','/images/photo_140.jpg',
  '/images/photo_141.jpg','/images/photo_142.jpg','/images/photo_143.jpg',
  '/images/photo_145.jpg','/images/photo_146.jpg','/images/photo_147.jpg',
  '/images/photo_148.jpg','/images/photo_149.jpg','/images/photo_150.jpg',
  '/images/photo_151.jpg','/images/photo_153.jpg','/images/photo_154.jpg',
  '/images/photo_155.jpg','/images/photo_156.jpg','/images/photo_157.jpg',
  '/images/photo_158.jpg','/images/photo_159.jpg','/images/photo_160.jpg',
  '/images/photo_161.jpg','/images/photo_162.jpg','/images/photo_163.jpg',
  '/images/photo_164.jpg','/images/photo_165.jpg','/images/photo_166.jpg',
  '/images/photo_167.jpg','/images/photo_168.jpg','/images/photo_169.jpg',
  '/images/photo_170.jpg','/images/photo_171.jpg','/images/photo_172.jpg',
  '/images/photo_173.jpg','/images/photo_174.jpg','/images/photo_175.jpg',
  '/images/photo_176.jpg','/images/photo_177.jpg','/images/photo_178.jpg',
  '/images/photo_179.jpg','/images/photo_180.jpg','/images/photo_181.jpg',
  '/images/photo_182.jpg','/images/photo_183.jpg','/images/photo_184.jpg',
  '/images/photo_185.jpg','/images/photo_186.jpg','/images/photo_187.jpg',
  '/images/photo_188.jpg','/images/photo_189.jpg','/images/photo_190.jpg',
  '/images/photo_191.jpg','/images/photo_192.jpg','/images/photo_193.jpg',
  '/images/photo_194.jpg','/images/photo_195.jpg','/images/photo_196.jpg',
  '/images/photo_197.jpg','/images/photo_198.jpg','/images/photo_200.jpg',
  '/images/photo_201.jpg','/images/photo_202.jpg','/images/photo_203.jpg',
  '/images/photo_204.jpg','/images/photo_205.jpg','/images/photo_206.jpg',
  '/images/photo_207.jpg','/images/photo_208.jpg','/images/photo_209.jpg',
  '/images/photo_210.jpg','/images/photo_211.jpg','/images/photo_212.jpg',
  '/images/photo_213.jpg','/images/photo_214.jpg','/images/photo_215.jpg',
  '/images/photo_216.jpg','/images/photo_217.jpg','/images/photo_219.jpg',
  '/images/photo_223.jpg','/images/photo_224.jpg','/images/photo_225.jpg',
  '/images/photo_226.jpg','/images/photo_227.jpg','/images/photo_228.jpg',
  '/images/photo_229.jpg','/images/photo_230.jpg','/images/photo_231.jpg',
  '/images/photo_232.jpg','/images/photo_233.jpg','/images/photo_234.jpg',
  '/images/photo_235.jpg','/images/photo_236.jpg','/images/photo_237.jpg',
  '/images/photo_238.jpg','/images/photo_239.jpg','/images/photo_240.jpg',
  '/images/photo_241.jpg','/images/photo_242.jpg','/images/photo_243.jpg',
  '/images/photo_244.jpg','/images/photo_245.jpg','/images/photo_246.jpg',
  '/images/photo_247.jpg','/images/photo_248.jpg','/images/photo_249.jpg',
  '/images/photo_250.jpg','/images/photo_251.jpg','/images/photo_252.jpg',
  '/images/photo_253.jpg','/images/photo_254.jpg','/images/photo_255.jpg',
  '/images/photo_256.jpg','/images/photo_257.jpg','/images/photo_258.jpg',
  '/images/photo_259.jpg','/images/photo_260.jpg','/images/photo_261.jpg',
  '/images/photo_262.jpg','/images/photo_263.jpg','/images/photo_264.jpg',
  '/images/photo_265.jpg','/images/photo_266.jpg','/images/photo_267.jpg',
  '/images/photo_268.jpg','/images/photo_269.jpg','/images/photo_270.jpg',
  '/images/photo_271.jpg','/images/photo_272.jpg','/images/photo_273.jpg',
  '/images/photo_274.jpg','/images/photo_275.jpg','/images/photo_276.jpg',
  '/images/photo_277.jpg','/images/photo_278.jpg','/images/photo_279.jpg',
  '/images/photo_280.jpg','/images/photo_281.jpg','/images/photo_282.jpg',
  '/images/photo_283.jpg','/images/photo_284.jpg','/images/photo_285.jpg',
  '/images/photo_287.jpg','/images/photo_288.jpg','/images/photo_289.jpg',
  '/images/photo_290.jpg','/images/photo_291.jpg','/images/photo_292.jpg',
  '/images/photo_293.jpg','/images/photo_294.jpg','/images/photo_295.jpg',
  '/images/photo_296.jpg','/images/photo_297.jpg','/images/photo_298.jpg',
  '/images/photo_299.jpg','/images/photo_300.jpg','/images/photo_301.jpg',
  '/images/photo_302.jpg',
], seededRandom(42))

/* split into pages of 6 */
const PER_PAGE = 6
const pages = []
for (let i = 0; i < allPhotos.length; i += PER_PAGE) {
  pages.push(allPhotos.slice(i, i + PER_PAGE))
}

export default function Gallery() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const trackRef = useRef(null)
  const autoRef = useRef(null)

  const totalPages = pages.length

  function goTo(next) {
    setDirection(next > page ? 1 : -1)
    setPage(next)
    resetAuto()
  }

  function next() {
    goTo((page + 1) % totalPages)
  }

  function prev() {
    goTo((page - 1 + totalPages) % totalPages)
  }

  function resetAuto() {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(next, 5000)
  }

  /* auto-advance every 5 seconds */
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setDirection(1)
      setPage(p => (p + 1) % totalPages)
    }, 5000)
    return () => clearInterval(autoRef.current)
  }, [totalPages])

  const photos = pages[page] || []

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-label">Our Work</div>
        <h2>See the <span className="highlight">Magic</span> in Action</h2>
        <p className="section-desc">Real designs from real events. Follow us on Instagram for even more colorful creations.</p>

        <div className="gallery-carousel">
          <button className="gallery-arrow gallery-arrow--left" onClick={prev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div className="gallery-track" ref={trackRef} key={page}>
            {photos.map(src => (
              <div className="gallery-item" key={src}>
                <img src={src} alt="Art My Face — face painting and event entertainment" loading="lazy" />
              </div>
            ))}
          </div>

          <button className="gallery-arrow gallery-arrow--right" onClick={next} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="gallery-dots">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot${i === page ? ' gallery-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <div className="gallery-cta">
          <a href="https://www.instagram.com/artmyfaceent" target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow Us on Instagram — @artmyfaceent
          </a>
        </div>
      </div>
    </section>
  )
}
