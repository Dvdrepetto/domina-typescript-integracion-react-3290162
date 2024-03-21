import { useState, useEffect } from 'react';

// Definimos un tipo genérico para los datos almacenados en localStorage
type LocalStorageDataType<T> = {
  valor: T | null;
  setValor: (valor: T) => void;
};

// Creamos el custom hook useLocalStorage
function useLocalStorage<T>(key: string, valorInicial: T): LocalStorageDataType<T> {
  // Inicializamos el estado con el valor almacenado en localStorage o el valor inicial
  const [valor, setValor] = useState<T>(() => {
    const valorAlmacenado = localStorage.getItem(key);
    return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial;
  });

  // Actualizamos localStorage cuando el valor cambia
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valor));
  }, [key, valor]);

  // Devolvemos el valor y la función para actualizarlo
  return {
    valor,
    setValor,
  };
}

export default useLocalStorage;
