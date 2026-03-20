const benefits = [
  { num: '01', title: 'Professional Artists', desc: 'Our trained artists create beautiful, detailed designs quickly — averaging just 3–5 minutes per guest so everyone gets a turn.' },
  { num: '02', title: '100% Skin-Safe Products', desc: 'We use only professional-grade, non-toxic, skin-safe face paints and materials. Safety is never an afterthought.' },
  { num: '03', title: 'Custom Themed Designs', desc: "From superheroes to princesses to holiday themes — we match our designs to your event's theme for a cohesive experience." },
  { num: '04', title: 'All Ages Welcome', desc: "Face painting isn't just for kids. We create designs that adults love too — perfect for corporate events, weddings, and festivals." },
  { num: '05', title: 'Multi-Service Packages', desc: 'Combine face painting with balloon twisting, glitter tattoos, and temporary tattoos for the ultimate entertainment package.' },
  { num: '06', title: 'Reliable & Flexible', desc: "We travel to your location across NJ, NYC, and nearby areas. Multiple artists available for large events. Rain plan? We've got you covered." },
]

export default function WhyUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-label">Why Art My Face</div>
        <h2>Why Clients <span className="highlight">Choose Us</span></h2>
        <div className="benefits-grid">
          {benefits.map(b => (
            <div className="benefit-card" key={b.num}>
              <div className="benefit-number">{b.num}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
