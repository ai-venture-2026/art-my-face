const services = [
  {
    accent: '#FF6B9D',
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <circle cx="24" cy="18" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 30c0 5 3.5 10 8 10s8-5 8-10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="20" cy="15" r="2" fill="currentColor" />
        <circle cx="28" cy="15" r="2" fill="currentColor" />
        <path d="M20 22c1 2 3 3 4 3s3-1 4-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Face Painting',
    desc: 'Our signature service. Choose from animals, superheroes, princesses, butterflies, fantasy characters, and custom themed designs. Each face becomes a canvas — painted in just 3–5 minutes with professional, skin-safe paints.',
    tags: ['Kids & Adults', 'Custom Themes', '3–5 Min Per Guest'],
  },
  {
    accent: '#FFA751',
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <ellipse cx="24" cy="16" rx="8" ry="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 26v12M20 38h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Balloon Twisting',
    desc: 'From swords and flowers to dogs and elaborate sculptures, our balloon artists create eye-catching designs that kids and adults love. A perfect complement to any event entertainment lineup.',
    tags: ['Custom Shapes', 'Interactive Fun', 'All Ages'],
  },
  {
    accent: '#7C6EF6',
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <path d="M24 6l3 6 6.7 1-4.8 4.7L30 24.4 24 21l-6 3.4 1.1-6.7L14.3 13l6.7-1L24 6z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 32l-2 10 10-5 10 5-2-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Glitter Tattoos',
    desc: 'Sparkle and shine with our dazzling glitter tattoos. Using body-safe glitter and adhesive, we create stunning temporary designs that shimmer beautifully and last for days.',
    tags: ['Long Lasting', 'Skin Safe', 'Sparkle Effect'],
  },
  {
    accent: '#44D4AA',
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <rect x="12" y="10" width="24" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 18h12M18 24h12M18 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="36" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 36l2 2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Temporary Tattoos',
    desc: 'Quick, fun, and mess-free — our temporary tattoos are perfect for high-volume events where guests want a cool design fast. Great for festivals, school events, and parties.',
    tags: ['Quick Apply', 'High Volume', 'Festival Ready'],
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-label">What We Do</div>
        <h2>Our <span className="highlight">Services</span></h2>
        <p className="section-desc">From colorful face designs to dazzling glitter tattoos, we bring the full creative experience to your event.</p>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-icon" style={{ '--accent': s.accent }}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-tags">
                {s.tags.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
