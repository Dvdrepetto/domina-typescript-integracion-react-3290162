import React, { useState } from 'react';

// Definir un tipo genérico para los props
type InjectedProps = {
  renderCount: number;
};

// HOC que añade la funcionalidad del contador
function withCounter<T>(WrappedComponent: React.ComponentType<T & InjectedProps>) {
  // Creamos un nuevo componente
  const WithCounter: React.FC<T> = (props) => {
    const [renderCount, setRenderCount] = useState(0);

    // Incrementamos el contador cada vez que se renderiza el componente
    React.useEffect(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, []);

    // Renderizamos el componente envuelto con los props y el contador
    return <WrappedComponent {...props as T} renderCount={renderCount} />;
  };

  // Devolvemos el nuevo componente
  return WithCounter;
}

// Componente funcional que recibirá el contador a través de sus props
const MyComponent: React.FC<{ name: string } & InjectedProps> = ({ name, renderCount }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>This component has been rendered {renderCount} times.</p>
    </div>
  );
};

// Envolver el componente funcional con el HOC
const MyComponentWithCounter = withCounter(MyComponent);

// Uso del componente envuelto
const Unidad03Leccion05 = () => {
  return <MyComponentWithCounter name="World" />;
};

export default Unidad03Leccion05;
