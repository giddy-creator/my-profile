import React from "react";


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>Hi, I'm Gideon</h1>
          <h2>Full-Stack Web Developer</h2>

          <p>
            I build scalable web applications and backend systems using modern
            web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects " className="btn primary">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/img.jpeg" alt="Simon profile" />
        </div>

      </div>
    </section>
  );
}

export default Hero;