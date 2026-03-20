const steps = [
  { n: 1, title: 'Reach Out', desc: "Call or text us with your event date, location, estimated guest count, and services you're interested in.", last: false },
  { n: 2, title: 'Get Your Quote', desc: "We'll provide a custom quote based on your event size, duration, and the services you'd like. No hidden fees.", last: false },
  { n: 3, title: 'Secure Your Date', desc: 'Confirm your booking with a deposit. We recommend booking 1–2 weeks in advance, especially for weekends and holidays.', last: false },
  { n: 4, title: 'Enjoy the Magic', desc: 'We arrive ready to create. Just provide a table, two chairs, and a shaded or indoor area — we handle the rest!', last: true },
]

export default function Booking() {
  return (
    <section className="booking section" id="booking">
      <div className="container">
        <div className="section-label">Simple Process</div>
        <h2>How <span className="highlight">Booking</span> Works</h2>
        <div className="steps-grid">
          {steps.map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-number">{s.n}</div>
              {!s.last && <div className="step-line" aria-hidden="true"></div>}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="booking-cta">
          <a href="#contact" className="btn btn-primary">Start Booking Now</a>
        </div>
      </div>
    </section>
  )
}
