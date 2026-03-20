const events = [
  { emoji: '🎂', label: 'Birthday Parties' },
  { emoji: '🏫', label: 'School Events' },
  { emoji: '🏢', label: 'Corporate Events' },
  { emoji: '🎪', label: 'Community Festivals' },
  { emoji: '🎄', label: 'Holiday Parties' },
  { emoji: '💒', label: 'Weddings' },
  { emoji: '🎃', label: 'Halloween Events' },
  { emoji: '🎠', label: 'Carnivals' },
  { emoji: '🤝', label: 'Team Building' },
  { emoji: '🎉', label: 'Private Parties' },
]

export default function Events() {
  return (
    <section className="events section" id="events">
      <div className="container">
        <div className="section-label">Where We Shine</div>
        <h2>Events We <span className="highlight">Serve</span></h2>
        <p className="section-desc">No matter the occasion, Art My Face adds unforgettable creative energy to every celebration.</p>
        <div className="events-grid">
          {events.map(e => (
            <div className="event-pill" key={e.label}>
              <span className="event-emoji" aria-hidden="true">{e.emoji}</span>
              <span>{e.label}</span>
            </div>
          ))}
        </div>
        <div className="events-cta">
          <p>Have a different type of event? We'd love to hear about it.</p>
          <a href="#contact" className="btn btn-primary">Tell Us About Your Event</a>
        </div>
      </div>
    </section>
  )
}
