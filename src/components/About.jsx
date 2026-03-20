export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-label">About Us</div>
        <h2>Where Art Meets <span className="highlight">Celebration</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">Art My Face is a professional event entertainment company specializing in face painting, balloon twisting, glitter tattoos, temporary tattoos, and creative party experiences for all ages.</p>
            <p>Led by Cynthia Rosario, our team brings color, joy, and unforgettable artistry to every event we serve. Whether it's a child's birthday party, a corporate team event, a school carnival, or a community festival — we transform ordinary gatherings into vibrant, creative celebrations.</p>
            <p>We use only professional-grade, skin-safe, non-toxic paints and materials, so every guest can enjoy the fun with complete peace of mind. From whimsical butterflies and fierce superheroes to elegant glitter designs, our artists craft custom creations that make every face a masterpiece.</p>
            <a href="#contact" className="btn btn-primary">Let's Create Together</a>
          </div>
          <div className="about-visual">
            <div className="about-card about-card-1">
              <span className="about-card-icon">🎨</span>
              <div>
                <strong>Professional Artists</strong>
                <p>Skilled, experienced face painters who bring designs to life</p>
              </div>
            </div>
            <div className="about-card about-card-2">
              <span className="about-card-icon">🎈</span>
              <div>
                <strong>Full Entertainment</strong>
                <p>Face painting, balloons, glitter tattoos &amp; more — all in one</p>
              </div>
            </div>
            <div className="about-card about-card-3">
              <span className="about-card-icon">✨</span>
              <div>
                <strong>All Ages Welcome</strong>
                <p>Fun and creative designs for kids, teens, and adults alike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
