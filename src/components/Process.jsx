import React from 'react';

const steps = [
  { n:'01', icon:'🏠', title:'Elige tu modelo',    desc:'Explora Nido, Horizonte o Élite y encuentra la distribución perfecta para tu familia.' },
  { n:'02', icon:'🎨', title:'Personaliza',         desc:'Selecciona fachada, pisos y acabados de cocina. Cada detalle refleja tu estilo.' },
  { n:'03', icon:'📄', title:'Cotización',          desc:'Recibe un presupuesto claro, detallado y sin compromisos en menos de 24 horas.' },
  { n:'04', icon:'💳', title:'Financiamiento',      desc:'Opciones de crédito hipotecario, leasing y planes hasta 20 años con tasas preferenciales.' },
  { n:'05', icon:'🏭', title:'Fabricación',         desc:'Tus módulos se producen en planta bajo los más altos estándares de calidad y sostenibilidad.' },
  { n:'06', icon:'🚛', title:'Transporte',          desc:'Coordinamos la logística completa hasta tu terreno de forma segura y eficiente.' },
  { n:'07', icon:'🔧', title:'Ensamblaje',          desc:'Nuestro equipo especializado instala tu vivienda en tan solo algunos días.' },
  { n:'08', icon:'🔑', title:'Entrega y garantía',  desc:'Recibes las llaves con garantía total y acompañamiento post-venta permanente.' },
];

const Process = () => (
  <div className="process-grid">
    {steps.map(s => (
      <div key={s.n} className="process-step">
        <p className="step-num">{s.n}</p>
        <div className="step-icon-wrap">{s.icon}</div>
        <h3 className="step-title">{s.title}</h3>
        <p className="step-desc">{s.desc}</p>
      </div>
    ))}
  </div>
);

export default Process;
