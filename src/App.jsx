import React from 'react';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import TrustBar  from './components/TrustBar';
import Catalog   from './components/Catalog';
import Configurator from './components/Configurator';
import Process   from './components/Process';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      {/* ── Modelos ── */}
      <section id="modelos" className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <div className="section-eyebrow"><span>Catálogo 2026</span></div>
            <h2 className="section-title">Elige tu <em>modelo ideal</em></h2>
            <p className="section-desc">
              Tres distribuciones diseñadas para adaptarse a cada familia y presupuesto,
              sin renunciar a la sostenibilidad ni al diseño.
            </p>
          </div>
          <Catalog />
        </div>
      </section>

      {/* ── Configurador ── */}
      <section id="personaliza" className="section section--alt">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <div className="section-eyebrow"><span>Personalizador</span></div>
            <h2 className="section-title" style={{ maxWidth: '520px' }}>
              Hazla <em>tuya</em>, antes de construirla
            </h2>
            <p className="section-desc">
              Selecciona acabados, materiales y distribución. El precio se actualiza
              en tiempo real con cada decisión que tomes.
            </p>
          </div>
          <Configurator />
        </div>
      </section>

      {/* ── Proceso ── */}
      <section id="proceso" className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <div className="section-eyebrow"><span>Metodología</span></div>
            <h2 className="section-title">Un camino <em>claro</em> hasta tu hogar</h2>
            <p className="section-desc">
              Ocho pasos transparentes que te llevan desde la primera conversación
              hasta el día que recibes las llaves.
            </p>
          </div>
          <Process />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer" id="contacto">
        <div className="footer-gold-line" />
        <div className="container" style={{ paddingTop: '3rem' }}>
          <div className="footer-top">
            <div>
              <p className="footer-brand-name">EcoHabitat</p>
              <p className="footer-brand-sub">Global</p>
              <p className="footer-brand-desc">
                Viviendas prefabricadas sostenibles, modernas y accesibles para un futuro mejor.
                Comprometidos con el planeta y con tu familia.
              </p>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Modelos</p>
              <a href="#modelos">Nido 48</a>
              <a href="#modelos">Horizonte 72</a>
              <a href="#modelos">Élite 95</a>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Proceso</p>
              <a href="#proceso">Cómo funciona</a>
              <a href="#personaliza">Personalizar</a>
              <a href="#proceso">Financiamiento</a>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Contacto</p>
              <a href="tel:+573001234567">+57 300 123 4567</a>
              <a href="mailto:info@ecohabitatglobal.com">info@ecohabitatglobal.com</a>
              <a href="#">Instagram</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 EcoHabitat Global. Todos los derechos reservados.</span>
            <span>Viviendas prefabricadas · Un futuro más sostenible.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
