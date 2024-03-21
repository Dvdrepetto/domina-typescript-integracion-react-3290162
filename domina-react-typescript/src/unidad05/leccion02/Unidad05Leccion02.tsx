import React from 'react';
import { ComponenteInput } from './ComponenteInput';

// Uso del componente
const Unidad05Leccion02 = () => {
  // Crear una referencia para el input de texto
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Función para manejar cambios en el input
  const cambioValorInput = (value: string) => {
    console.log('Valor actual del input:', value);
  };

  return (
    <div className="container">
      {/* Pasar la referencia al componente TextInput */}
      <ComponenteInput
        label="Nombre:"
        placeholder="Ingresa tu nombre"
        initialValue="Eleanor María"
        onChange={cambioValorInput}
        ref={inputRef}
      />
      <button className="btn btn-primary mt-5" onClick={() => inputRef.current?.focus()}>Enfocar Input</button>
    </div>
  );
};

export default Unidad05Leccion02;
