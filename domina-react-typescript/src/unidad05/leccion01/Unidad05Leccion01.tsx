import React, { PropsWithChildren } from 'react';

type PropsComponentePadre = {} & PropsWithChildren;

const ComponentePadre: React.FC<PropsComponentePadre> = ({ children }: PropsComponentePadre) => {
  return (
    <div>
      <h5>{React.Children.count(children)}</h5>
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
