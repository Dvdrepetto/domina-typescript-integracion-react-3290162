import React from 'react';
import useLocalStorage from './useLocalStorage';

const Unidad03Leccion04: React.FC = () => {
  // Usamos el custom hook useLocalStorage para mantener un contador en localStorage
  const { value: count, setValue: setCount } = useLocalStorage<number>('count', 0);

  const increment = () => {
    setCount(count! + 1);
  };

  const decrement = () => {
    setCount(count! - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-info ml-2" onClick={increment}>Increment</button>
      <button className="btn btn-warning" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Unidad03Leccion04;
