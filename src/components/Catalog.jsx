import React, { useState } from 'react';

const models = [
  {
    id: 1,
    name: "Nido 48",
    area: "48 m²",
    beds: 2, baths: 1,
    deliveryDays: 45,
    price: "$ 85.000.000",
    tag: "Ideal para parejas",
    tagColor: "#3D6B48",
    image: "/model1.jpg",
    features: ["Techo verde", "Cubierta bambú", "Ventanales piso-techo"],
    priceAddon: 0,
  },
  {
    id: 2,
    name: "Horizonte 72",
    area: "72 m²",
    beds: 3, baths: 2,
    deliveryDays: 60,
    price: "$ 120.000.000",
    tag: "Más popular",
    tagColor: "#B8953A",
    image: "/model2.jpg",
    features: ["Terraza solar", "Deck exterior", "Cocina abierta"],
    priceAddon: 35000000,
  },
  {
    id: 3,
    name: "Élite 95",
    area: "95 m²",
    beds: 4, baths: 2,
    deliveryDays: 75,
    price: "$ 160.000.000",
    tag: "Premium",
    tagColor: "#141410",
    image: "/model3.jpg",
    features: ["2 módulos", "Smart home", "Piscina opcional"],
    priceAddon: 75000000,
  }
];

const ModelCard = ({ model, isSelected, onSelect }) => (
  <article
    className={`model-card ${isSelected ? 'model-card--selected' : ''}`}
    onClick={() => onSelect(model)}
    role="button"
    aria-pressed={isSelected}
    tabIndex={0}
    onKeyDown={e => e.key === 'Enter' && onSelect(model)}
  >
    <div className="model-img-wrapper">
      <img src={model.image} alt={`${model.name} - ${model.area}`} className="model-img" />
      <span className="model-tag" style={{ background: model.tagColor }}>{model.tag}</span>
      {isSelected && (
        <div className="model-selected-badge">
          <span>✓</span> Seleccionado
        </div>
      )}
    </div>

    <div className="model-content">
      <div className="model-header">
        <h3 className="model-name">{model.name}</h3>
        <span className="model-area-badge">{model.area}</span>
      </div>

      <div className="model-specs">
        <div className="model-spec">
          <span className="model-spec-val">{model.beds}</span>
          <span className="model-spec-lbl">Habitaciones</span>
        </div>
        <div className="model-spec">
          <span className="model-spec-val">{model.baths}</span>
          <span className="model-spec-lbl">Baños</span>
        </div>
        <div className="model-spec">
          <span className="model-spec-val">{model.deliveryDays}</span>
          <span className="model-spec-lbl">Días entrega</span>
        </div>
      </div>

      <div className="model-tags">
        {model.features.map((f, i) => (
          <span key={i} className="model-tag-item">{f}</span>
        ))}
      </div>

      <div className="model-footer">
        <div>
          <p className="model-price-from">Desde</p>
          <p className="model-price-val">{model.price}</p>
        </div>
        <button
          className={`btn btn--sm ${isSelected ? 'btn--gold' : 'btn--primary'}`}
          onClick={e => { e.stopPropagation(); onSelect(model); }}
        >
          {isSelected ? '✓ Elegido' : 'Elegir'}
        </button>
      </div>
    </div>
  </article>
);

const Catalog = ({ onModelSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (model) => {
    setSelected(model.id);
    if (onModelSelect) onModelSelect(model);
  };

  return (
    <div>
      <div className="catalog-grid">
        {models.map(model => (
          <ModelCard
            key={model.id}
            model={model}
            isSelected={selected === model.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
      {selected && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#personaliza" className="btn btn--gold" style={{ padding: '1.1rem 3rem', fontSize: '0.85rem' }}>
            Personalizar mi modelo →
          </a>
        </div>
      )}
    </div>
  );
};

export { models };
export default Catalog;
