import React, { Component, ReactNode } from 'react';

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
  return (
    <div>
      Hola ReactNode
      <span>!</span>
    </div>
  );
};

class ComponenteClase extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

const Unidad01Leccion04 = () => {
  return (
    <div className="container mt-5">
      <h2>Diferencias entre JSX.Element, ReactNode y ReactElement</h2>
      {/* JSX.Element */}
      <div>
        <h3>JSX.Element</h3>
        <ComponenteJSXElement />
      </div>
      {/* ReactNode */}
      <div>
        <h3>ReactNode en componente clase</h3>
        <ComponenteClase />
      </div>
      {/* ReactElement */}
      <div>
        <h3>ReactElement</h3>
        {ComponenteReactElement()}
      </div>
    </div>
  );
};

export default Unidad01Leccion04;
