export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="Art My Face Home">
              <svg className="logo-icon" viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
                <defs>
                  <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B9D" />
                    <stop offset="33%" stopColor="#FFA751" />
                    <stop offset="66%" stopColor="#44D4AA" />
                    <stop offset="100%" stopColor="#7C6EF6" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="23" fill="url(#logoGrad2)" />
                <path d="M14 30 C14 24, 20 18, 28 14 C30 13, 32 15, 30 17 C26 21, 22 27, 20 30 C19 32, 15 32, 14 30Z" fill="#fff" opacity="0.95" />
                <circle cx="16" cy="31" r="2.5" fill="#FF6B9D" />
                <circle cx="26" cy="15" r="1.5" fill="#FFA751" />
                <circle cx="30" cy="19" r="1" fill="#44D4AA" />
              </svg>
              <div className="logo-text">
                <span className="logo-name">Art My Face</span>
              </div>
            </a>
            <p>Professional face painting, balloon twisting, glitter tattoos, and creative event entertainment across NJ, NYC, and beyond.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>More</h4>
              <ul>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#booking">How to Book</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:2019825608">(201) 982-5608</a></li>
                <li><a href="https://www.instagram.com/artmyfaceent" target="_blank" rel="noopener noreferrer">@artmyfaceent</a></li>
                <li>NJ &bull; NYC &bull; Nearby</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Art My Face. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
