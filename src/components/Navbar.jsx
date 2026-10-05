import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        <a href="#inicio" className="navbar-logo">
          <span className="navbar-logo-mark">EcoHabitat</span>
          <span className="navbar-logo-sub">Global</span>
        </a>
        <div className="navbar-links">
          <a href="#modelos">Modelos</a>
          <a href="#personaliza">Personaliza</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a href="#personaliza" className="navbar-cta">Cotizar ahora</a>
      </div>
    </nav>
  );
};

export default Navbar;
