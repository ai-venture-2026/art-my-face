export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-label">Let's Talk</div>
            <h2>Ready to Make Your Event <span className="highlight">Unforgettable</span>?</h2>
            <p>Get in touch today to check availability, get a custom quote, or ask any questions about our services. We'd love to be part of your next celebration.</p>
            <div className="contact-details">
              <a href="tel:2019825608" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <strong>Call or Text</strong>
                  <span>(201) 982-5608</span>
                </div>
              </a>
              <a href="https://www.instagram.com/artmyfaceent" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <div>
                  <strong>Instagram</strong>
                  <span>@artmyfaceent</span>
                </div>
              </a>
            </div>
            <div className="contact-person">
              <strong>Cynthia Rosario</strong>
              <span>Owner &amp; Lead Artist</span>
            </div>
          </div>
          <div className="contact-card">
            <h3>Quick Inquiry</h3>
            <p>Text or call us with the following details and we'll get back to you promptly:</p>
            <ul className="inquiry-list">
              <li>Your name</li>
              <li>Event date &amp; time</li>
              <li>Event location</li>
              <li>Estimated number of guests</li>
              <li>Services you're interested in</li>
              <li>Any event theme or special requests</li>
            </ul>
            <a href="tel:2019825608" className="btn btn-primary btn-full">Call (201) 982-5608</a>
            <a href="sms:2019825608" className="btn btn-outline btn-full">Text Us Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
