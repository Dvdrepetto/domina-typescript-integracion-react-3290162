import React, { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * 
 * ReactElement and JSX.Element son el resultado de invocar el método React.createElement directamente 
 * or por medio de la transpilación de JSX . Es un objeto con propiedades type, props y key. 
 * JSX.Element es un ReactElement, cuyas props y tipo tienen un tipo any, por lo tanto 
 * son casi lo mismo.
 */

// Componente funcional que devuelve un JSX.Element
const ComponenteJSXElement = (): JSX.Element => {
  return <div>Hola JSX.Element</div>;
};

// Componente funcional que devuelve un ReactElement
const ComponenteReactElement = (): React.ReactElement => {
  return React.createElement('div', {}, 'Hola ReactElement');
};

/**
 * 
 * ReactNode es el tipo de retorno de la función render() en los componentes clase.
 * También es el tipo que se utiliza en la interfaz PropsWithChildren para definir la propiedad children.
 * Puedes asignar casi que cualquier cosa a un ReactNode: texto, booleans, números, ReactElement, ect..
 */

// Componente funcional que devuelve un ReactNode
const ComponenteReactNode = (): ReactNode => {
  const valor = 'Hola ReactNode dentro de ReactPortal';
  return valor;
};

// Componente funcional que devuelve un ReactElement
const ComponenteReactPortal = (): React.ReactPortal => {
  return createPortal(ComponenteReactNode(), document.getElementById('root')!);
};

const Unidad01Leccion04 = () => {
  return (
    <div className="container mt-5">
      <h5>Diferencias entre JSX.Element, ReactNode, ReactElement y ReactPortal</h5>
      <div>
        <ComponenteJSXElement />
      </div>
      <div>
        {ComponenteReactElement()}
      </div>
      <div>
        <ComponenteReactPortal />
      </div>
      {/* ReactElement */}
    </div>
  );
};

export default Unidad01Leccion04;
