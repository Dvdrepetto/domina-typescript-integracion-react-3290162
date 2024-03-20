import React, { useState, useCallback } from 'react';

const Unidad02Leccion03: React.FC = () => {
  const [numeros, setNumeros] = useState<number[]>([]);
  const [valorInput, setValorInput] = useState<string>('');

  // Función para manejar el cambio en el campo de entrada
  const cambioValor = useCallback((evento: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput(evento.target.value);
  }, []);

  // Función para agregar un número a la lista
  const agregarNumero = useCallback(() => {
    const nuevoNumero = parseInt(valorInput);
    if (!isNaN(nuevoNumero)) {
      setNumeros(prevNumeros => [...prevNumeros, nuevoNumero]);
      setValorInput('');
    }
  }, [valorInput]); // La función solo se recreará si cambia el valor de valorInput

  return (
    <div className="container mt-3">
      <h2 className="mb-3">Lista de números</h2>
      <ul>
        {numeros.map((numero, indice) => (
          <li key={indice}>{numero}</li>
        ))}
      </ul>
      <input className="form-control mb-3" type="number" value={valorInput} onChange={cambioValor} />
      <button className="btn btn-primary mb-3" onClick={agregarNumero}>Agregar número</button>
    </div>
  );
};

export default Unidad02Leccion03;
