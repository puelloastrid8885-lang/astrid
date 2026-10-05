import React from 'react';

const trustItems = [
  { icon: '🌿', label: 'Certificación', value: 'FSC + Construcción verde' },
  { icon: '⚡', label: 'Eficiencia',     value: 'Energía A+ garantizada' },
  { icon: '🏆', label: 'Experiencia',   value: '+12 años en el mercado' },
  { icon: '🔒', label: 'Garantía',      value: '10 años en estructura' },
];

const TrustBar = () => (
  <div className="trust-bar">
    <div className="container">
      {trustItems.map((item, i) => (
        <div key={i} className="trust-item">
          <div className="trust-icon">{item.icon}</div>
          <div>
            <p className="trust-text-label">{item.label}</p>
            <p className="trust-text-value">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
