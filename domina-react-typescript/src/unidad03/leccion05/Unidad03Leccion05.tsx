import React, { ComponentType, useEffect, useRef } from 'react';

// Definir un tipo genérico para los props que el HOC pasará al componente envuelto
type PropsInfo = {
  reportarFocus: (nombre: string) => void;
};

// Definir la función del HOC que acepta un componente y devuelve un nuevo componente envuelto
function conInfo<T extends object>(ComponenteEnvuelto: ComponentType<T & PropsInfo>) {
  // Creamos un nuevo componente funcional
  const ConInfo: React.FC<T> = (props) => {
    const reportarFocus = (nombre: string) => {
      console.log(`El componente ${nombre} tiene el focus ahora.`)
    };

    // Renderizamos el componente envuelto y le pasamos el evento de clic
    return <ComponenteEnvuelto {...props as T} reportarFocus={reportarFocus} />;
  };

  // Devolvemos el nuevo componente
  return ConInfo;
}

// Componentes funcionales que recibirán reportarFocus como prop
const Button: React.FC<{ label: string } & PropsInfo> = ({ label, reportarFocus }) => {
  return <button
    className="btn btn-primary"
    onFocus={() => {
      reportarFocus('Button');
    }}>
    {label}
  </button>;
};

const Input: React.FC<PropsInfo> = ({ reportarFocus }) => {
  return (
    <input
      type="number"
      className="form-control"
      onFocus={() => reportarFocus('Input')}
    />
  )
};

const Encabezado: React.FC<PropsInfo> = ({ reportarFocus }) => {
  return (
    <h4
      tabIndex={0}
      onFocus={() => {
        reportarFocus('Encabezado')
      }}>Prueba HOC</h4>
  )
};

// Envolver el componente funcional con el HOC
const ButtonConInfo = conInfo(Button);

const InputConInfo = conInfo(Input);

const EncabezadoConInfo = conInfo(Encabezado);

// Uso del componente envuelto
const Unidad03Leccion05 = () => {
  return (
    <div style={{
      width: 300
    }}>
      <div className="row mt-2">
        <EncabezadoConInfo />
      </div>
      <div className="row mt-2">
        <InputConInfo />
      </div>
      <div className="row mt-2">
        <ButtonConInfo label="Haz clic aquí" />
      </div>
    </div>
  );
};

export default Unidad03Leccion05;

function useEffec(arg0: () => any) {
  throw new Error('Function not implemented.');
}

