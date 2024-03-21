import React from 'react';
import useLocalStorage from './useLocalStorage';

const Unidad03Leccion04: React.FC = () => {
  // Usamos el custom hook useLocalStorage para mantener un contador en localStorage
  const { valor: cuenta, setValor: setCuenta } = useLocalStorage<number>('cuenta-n', 0);

  const increment = () => {
    setCuenta(cuenta! + 1);
  };

  const decrement = () => {
    setCuenta(cuenta! - 1);
  };

  return (
    <div>
      <h2>Cuenta: {cuenta}</h2>
      <button className="btn btn-info ml-2" onClick={increment}>Incrementar</button>
      <button className="btn btn-warning" onClick={decrement}>Disminuir</button>
    </div>
  );
};

export default Unidad03Leccion04;
