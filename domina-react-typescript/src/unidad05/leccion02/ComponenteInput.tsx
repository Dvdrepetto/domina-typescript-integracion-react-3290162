import React, { forwardRef, ForwardedRef, useState } from 'react';

// Definir los props del componente
type TextInputProps = {
    label: string;
    placeholder?: string;
    initialValue?: string;
    onChange?: (value: string) => void;
  };
  
  // Crear un componente funcional que acepta un ref
  export const ComponenteInput = forwardRef((props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [value, setValue] = useState(props.initialValue || '');
  
    // Función para manejar cambios en el valor del input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
  
      // Llamar a la función onChange si está definida
      if (props.onChange) {
        props.onChange(newValue);
      }
    };
  
    return (
      <div className="mt-5">
        <label className="form-label">{props.label}</label>
        <input
          ref={ref}
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    );
  });
