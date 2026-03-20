export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-badge">Face Painting &bull; Balloons &bull; Glitter Tattoos &bull; Event Fun</div>
        <h1>Bring Your Event to Life<br />with <span className="highlight">Colorful Creativity</span></h1>
        <p className="hero-sub">Professional face painting, balloon twisting, glitter tattoos, and event entertainment for kids and adults — serving New Jersey, NYC, and beyond.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Book Your Event</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.5L10 13.68l-4.94 2.43.94-5.5-4-3.9 5.61-.87L10 1z" fill="#FFA751" />
            </svg>
            <span>100+ Events Served</span>
          </div>
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16.7 7.3a1 1 0 00-1.4 0L8 14.58l-3.3-3.3a1 1 0 00-1.4 1.42l4 4a1 1 0 001.4 0l8-8a1 1 0 000-1.4z" fill="#44D4AA" />
            </svg>
            <span>Safe, Non-Toxic Paints</span>
          </div>
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="#FF6B9D" />
            </svg>
            <span>NJ, NYC &amp; Nearby Areas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
