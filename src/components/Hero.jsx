import React from 'react';

const Hero = () => (
  <section id="inicio" className="hero">
    <div className="hero-media">
      <img src="/hero-house.jpg" alt="Vivienda EcoHabitat" />
      <div className="hero-gradient" />
    </div>

    <div className="hero-content">
      <div className="container">
        {/* Left: Text */}
        <div>
          <div className="hero-eyebrow">
            <span>Viviendas prefabricadas sostenibles</span>
          </div>
          <h1 className="hero-title">
            Tu casa,<br />
            <em>a tu medida.</em>
          </h1>
          <div className="hero-actions">
            <a href="#modelos" className="btn btn--primary">Ver modelos</a>
            <a href="#personaliza" className="btn btn--ghost-light">Personalizar</a>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="hero-aside">
          <div className="hero-stats">
            <span className="hero-stats-num">+320</span>
            <span className="hero-stats-label">Familias con hogar propio</span>
          </div>
          <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,.15)' }} />
          <div className="hero-stats">
            <span className="hero-stats-num">48</span>
            <span className="hero-stats-label">Días promedio de entrega</span>
          </div>
          <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,.15)' }} />
          <div className="hero-stats">
            <span className="hero-stats-num">A+</span>
            <span className="hero-stats-label">Eficiencia energética</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
