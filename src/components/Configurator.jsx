import React, { useState } from 'react';
import { models } from './Catalog';

/* ── Data ── */
const facades = [
  { id: 'wood',     label: 'Madera Natural', image: '/facade-wood.jpg',     color: '#8B5A2B', desc: 'Bambú y madera FSC', priceAdd: 0 },
  { id: 'white',    label: 'Blanco Mineral',  image: '/facade-white.jpg',    color: '#D8D5CE', desc: 'Estuco premium',     priceAdd: 4500000 },
  { id: 'charcoal', label: 'Carbón Metálico', image: '/facade-charcoal.jpg', color: '#3A3F4A', desc: 'Panel metálico',     priceAdd: 8000000 },
  { id: 'green',    label: 'Verde Vivo',      image: '/facade-green.jpg',    color: '#5C7A52', desc: 'Jardín vertical',    priceAdd: 12000000 },
];

const floors = [
  { id: 'roble',    label: 'Roble',    color: '#C9A46A', priceAdd: 0 },
  { id: 'nogal',    label: 'Nogal',    color: '#6B3F28', priceAdd: 2000000 },
  { id: 'bambu',    label: 'Bambú',    color: '#D4BC8A', priceAdd: 1500000 },
  { id: 'concreto', label: 'Concreto', color: '#B0AFA9', priceAdd: 1000000 },
];

const kitchens = [
  { id: 'premium',  label: 'Premium',  icon: '⭐', sub: 'Completa',  priceAdd: 0 },
  { id: 'estandar', label: 'Estándar', icon: '◈',  sub: '-$ 3M',     priceAdd: -3000000 },
  { id: 'eco',      label: 'Ecológico',icon: '🌿', sub: '-$ 1M',     priceAdd: -1000000 },
];

const BASE = 120000000;
const fmt  = n => '$ ' + Math.abs(n).toLocaleString('es-CO').replace(/,/g, '.');

/* ── Component ── */
const Configurator = () => {
  const [model,        setModel]        = useState(models[1]);
  const [facade,       setFacade]       = useState(facades[0]);
  const [floor,        setFloor]        = useState(floors[0]);
  const [kitchen,      setKitchen]      = useState(kitchens[0]);
  const [previewImage, setPreviewImage] = useState(facades[0].image);
  const [loading,      setLoading]      = useState(false);

  const total = BASE + (model?.priceAddon ?? 35000000)
    + facade.priceAdd + floor.priceAdd + kitchen.priceAdd;

  // Cambiar modelo → mostrar imagen del modelo
  const switchModel = m => {
    setModel(m);
    setLoading(true);
    setPreviewImage(m.image);
  };

  // Cambiar fachada → mostrar imagen de la fachada
  const switchFacade = f => {
    if (f.id === facade.id) return;
    setLoading(true);
    setFacade(f);
    setPreviewImage(f.image);
  };

  return (
    <div className="cfg-wrapper">

      {/* ═══ PREVIEW (izquierda) ═══ */}
      <div className="cfg-preview">
        <img
          key={previewImage}
          src={previewImage}
          alt={facade.label}
          className="cfg-preview-img"
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <div className="cfg-loading"><div className="cfg-spinner" /></div>
        )}
        <div className="cfg-preview-gradient" />

        {/* Badge modelo */}
        <div className="cfg-badge-top">
          <span className="cfg-badge-label">Modelo</span>
          <span className="cfg-badge-value">{model?.name ?? '—'}</span>
        </div>

        {/* Info bottom */}
        <div className="cfg-preview-bottom">
          <p className="cfg-preview-title">{facade.label}</p>
          <p className="cfg-preview-sub">Piso · {floor.label}</p>
        </div>

        {/* Franja de color del piso */}
        <div
          className="cfg-floor-bar"
          style={{ background: `linear-gradient(90deg, ${floor.color} 0%, ${floor.color}55 100%)` }}
        />
      </div>

      {/* ═══ CONTROLS (derecha) ═══ */}
      <div className="cfg-controls">
        {/* Header */}
        <div className="cfg-ctrl-header">
          <p className="cfg-ctrl-eyebrow">Personalizador</p>
          <h3 className="cfg-ctrl-title">Diseña tu hogar</h3>
          <p className="cfg-ctrl-desc">El precio se actualiza con cada elección</p>
        </div>

        {/* ── Modelo ── */}
        <div className="cfg-ctrl-group">
          <p className="cfg-ctrl-label">Modelo base</p>
          <div className="cfg-model-row">
            {models.map(m => (
              <button
                key={m.id}
                onClick={() => switchModel(m)}
                className={`cfg-model-chip ${model?.id === m.id ? 'is-active' : ''}`}
              >
                <span className="cfg-model-chip-name">{m.name}</span>
                <span className="cfg-model-chip-area">{m.area}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Fachada ── */}
        <div className="cfg-ctrl-group">
          <div className="cfg-ctrl-label-row">
            <p className="cfg-ctrl-label">Fachada</p>
            {facade.priceAdd > 0 && (
              <span className="cfg-ctrl-badge-price">+{fmt(facade.priceAdd)}</span>
            )}
          </div>
          <div className="cfg-facade-grid">
            {facades.map(f => (
              <button
                key={f.id}
                onClick={() => switchFacade(f)}
                className={`cfg-facade-btn ${facade.id === f.id ? 'is-active' : ''}`}
              >
                <span className="cfg-facade-swatch" style={{ background: f.color }} />
                <span className="cfg-facade-info">
                  <span className="cfg-facade-name">{f.label}</span>
                  <span className="cfg-facade-sub">{f.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Piso ── */}
        <div className="cfg-ctrl-group">
          <p className="cfg-ctrl-label">Tipo de piso</p>
          <div className="cfg-floor-row">
            {floors.map(fl => (
              <button
                key={fl.id}
                onClick={() => setFloor(fl)}
                className={`cfg-floor-btn ${floor.id === fl.id ? 'is-active' : ''}`}
              >
                <span className="cfg-floor-swatch" style={{ background: fl.color }} />
                <span className="cfg-floor-name">{fl.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Cocina ── */}
        <div className="cfg-ctrl-group">
          <p className="cfg-ctrl-label">Cocina</p>
          <div className="cfg-kitchen-row">
            {kitchens.map(k => (
              <button
                key={k.id}
                onClick={() => setKitchen(k)}
                className={`cfg-kitchen-btn ${kitchen.id === k.id ? 'is-active' : ''}`}
              >
                <span className="cfg-kitchen-icon">{k.icon}</span>
                <span className="cfg-kitchen-name">{k.label}</span>
                <span className="cfg-kitchen-sub">{k.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Resumen ── */}
        <div className="cfg-summary">
          <div className="cfg-summary-head">
            <span>Resumen</span>
          </div>
          <div className="cfg-summary-lines">
            <div className="cfg-summary-row">
              <span>Modelo {model?.name}</span>
              <span>{fmt(BASE + (model?.priceAddon ?? 35000000))}</span>
            </div>
            <div className="cfg-summary-row">
              <span>Fachada {facade.label}</span>
              <span>{facade.priceAdd > 0 ? `+${fmt(facade.priceAdd)}` : 'Incluido'}</span>
            </div>
            <div className="cfg-summary-row">
              <span>Piso {floor.label}</span>
              <span>{floor.priceAdd > 0 ? `+${fmt(floor.priceAdd)}` : 'Incluido'}</span>
            </div>
            <div className="cfg-summary-row">
              <span>Cocina {kitchen.label}</span>
              <span>{kitchen.priceAdd < 0 ? fmt(kitchen.priceAdd) : 'Incluido'}</span>
            </div>
          </div>
          <div className="cfg-summary-total">
            <span className="cfg-summary-total-lbl">Total estimado</span>
            <span className="cfg-summary-total-val">{fmt(total)}</span>
          </div>
          <button className="cfg-cta-btn">
            Solicitar cotización &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
