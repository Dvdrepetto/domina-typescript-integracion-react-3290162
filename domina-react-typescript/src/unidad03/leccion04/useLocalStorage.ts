import { useState, useEffect } from 'react';

// Definimos un tipo genérico para los datos almacenados en localStorage
type LocalStorageDataType<T> = {
  value: T | null;
  setValue: (value: T) => void;
};

// Creamos el custom hook useLocalStorage
function useLocalStorage<T>(key: string, initialValue: T): LocalStorageDataType<T> {
  // Inicializamos el estado con el valor almacenado en localStorage o el valor inicial
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Actualizamos localStorage cuando el valor cambia
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Devolvemos el valor y la función para actualizarlo
  return {
    value,
    setValue,
  };
}

export default useLocalStorage;
