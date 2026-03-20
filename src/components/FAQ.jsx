const faqs = [
  { q: 'How much do your services cost?', a: 'Pricing depends on the number of guests, event duration, and services requested. Face painting typically starts around a base rate and increases with event size. Contact us for a free custom quote.' },
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 1–2 weeks in advance, especially for weekends and holidays. Popular dates fill up quickly, so the sooner you reach out, the better.' },
  { q: 'Are the paints safe for skin?', a: 'Absolutely. We use only professional, skin-safe, non-toxic face paints designed specifically for body art. Your safety and comfort is our top priority.' },
  { q: 'Is face painting only for kids?', a: 'Not at all! Face painting is fun for all ages. We create designs suitable for kids, teens, and adults — from playful characters to elegant festival looks.' },
  { q: 'How long does each face painting take?', a: 'Most designs take 3–5 minutes per guest, depending on complexity. This means we can serve a large number of guests efficiently at your event.' },
  { q: 'Can I request a specific theme?', a: 'Yes! We love themed events. We can customize designs to match your party theme — superheroes, princesses, Halloween, carnival, and more.' },
  { q: 'How many guests can you accommodate?', a: 'The number of guests depends on event duration and number of artists. We can arrange additional entertainers for larger events to keep lines short and fun flowing.' },
  { q: 'What do you need from the host?', a: 'Just a small table, two chairs, and a shaded or indoor area for the artist to work comfortably. We bring everything else.' },
  { q: 'What if it rains during an outdoor event?', a: 'We recommend having a covered or indoor backup space available. As long as we have a dry area to work, the show goes on!' },
  { q: 'Where do you provide services?', a: 'Art My Face serves events across New Jersey, New York City, and nearby areas. Contact us to confirm availability in your area.' },
]

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-label">Questions</div>
        <h2>Frequently Asked <span className="highlight">Questions</span></h2>
        <div className="faq-grid">
          {faqs.map(f => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
