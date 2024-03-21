import React, { PropsWithChildren } from 'react';

type PropsComponentePadre = {} & PropsWithChildren;

// Componente que espera un solo hijo
const ComponentePadre: React.FC<PropsComponentePadre> = ({ children }: PropsComponentePadre) => {
  return (
    <div>
      {/* Se espera solo un hijo, pero se están pasando varios */}
      {children}
    </div>
  );
};

const Unidad05Leccion01 = () => {
  return (
    <ComponentePadre>
      <h1>Título</h1>
      <p>Este es un párrafo</p>
    </ComponentePadre>
  );
};

export default Unidad05Leccion01;
