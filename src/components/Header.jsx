import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header" id="top">
      <nav className="nav container">
        <a href="#top" className="logo" aria-label="Art My Face Home">
          <svg className="logo-icon" viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9D" />
                <stop offset="33%" stopColor="#FFA751" />
                <stop offset="66%" stopColor="#44D4AA" />
                <stop offset="100%" stopColor="#7C6EF6" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="23" fill="url(#logoGrad)" />
            <path d="M14 30 C14 24, 20 18, 28 14 C30 13, 32 15, 30 17 C26 21, 22 27, 20 30 C19 32, 15 32, 14 30Z" fill="#fff" opacity="0.95" />
            <circle cx="16" cy="31" r="2.5" fill="#FF6B9D" />
            <circle cx="26" cy="15" r="1.5" fill="#FFA751" />
            <circle cx="30" cy="19" r="1" fill="#44D4AA" />
          </svg>
          <div className="logo-text">
            <span className="logo-name">Art My Face</span>
            <span className="logo-tagline">Creative Event Entertainment</span>
          </div>
        </a>

        <button
          className={`nav-toggle${open ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#about" onClick={close}>About</a></li>
          <li><a href="#services" onClick={close}>Services</a></li>
          <li><a href="#events" onClick={close}>Events</a></li>
          <li><a href="#gallery" onClick={close}>Gallery</a></li>
          <li><a href="#why-us" onClick={close}>Why Us</a></li>
          <li><a href="#faq" onClick={close}>FAQ</a></li>
          <li><a href="#contact" className="nav-cta" onClick={close}>Book Now</a></li>
        </ul>
      </nav>
    </header>
  )
}
