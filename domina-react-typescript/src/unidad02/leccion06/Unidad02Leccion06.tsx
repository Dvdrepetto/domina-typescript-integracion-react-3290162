import React from 'react';
import ComponenteAnimacion from './ComponenteAnimacion';
import ProveedorAnimacion from './ContextoAnimacion';

// Componente principal
const Unidad02Leccion06: React.FC = () => {
  const colores = [
    '#ff0000', // Rojo
    '#00ff00', // Verde
    '#0000ff', // Azul
    '#ffff00', // Amarillo
    '#ff00ff', // Magenta
    '#00ffff', // Cian
    '#800080', // Púrpura
    '#ffa500', // Naranja
    '#008000', // Verde oscuro
    '#ff4500'  // Naranja rojizo
  ]
  return (
    <ProveedorAnimacion>
      <div style={{ marginTop: 25 }}>
        <div className="container">
          {colores.map((color: string) => <div key={color} className="row bt-5">
            <ComponenteAnimacion color={color} />
          </div>
          )}
        </div>
      </div>
    </ProveedorAnimacion>
  );
};

export default Unidad02Leccion06;
