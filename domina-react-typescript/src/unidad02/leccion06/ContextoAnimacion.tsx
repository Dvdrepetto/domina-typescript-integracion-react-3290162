import React, { Children, createContext, useState } from 'react';

// Definimos el tipo para el contexto de animación
export type TipoContextoAnimacion = {
  estaAnimando: boolean;
  estaPausado: boolean;
  reportarFinalAnimacion: () => void
};

// Creamos el contexto de animación
export const ContextoAnimacion = createContext<TipoContextoAnimacion | undefined>(undefined);

// Componente de proveedor de animación
const ProveedorAnimacion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [estaAnimando, setEstaAnimando] = useState<boolean>(false);
  const [estaPausado, setEstaPausado] = useState<boolean>(true);

  let total = 0;

  // Función para iniciar la animación
  const empezarAnimacion = () => {
    setEstaAnimando(true);
    setEstaPausado(false);
  };

  // Función para pausar la animación
  const pausarAnimacion = () => {
    setEstaPausado(true);
    setEstaAnimando(false);
  };

  // Función para contar cuantas animaciones han terminado
  const reportarFinalAnimacion = () => {
    total += 1;
    if (total === Children.count(children)) {
      setEstaAnimando(false);
      setEstaPausado(true);
      total = 0;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <button type="button" disabled={estaAnimando} onClick={empezarAnimacion} className="btn btn-success">Empezar animación</button>
        </div>
        <div className="col-2">
          <button type="button" disabled={estaPausado} onClick={pausarAnimacion} className="btn btn-warning">Pausar animación</button>
        </div>
      </div>
      <div className="row">
        <ContextoAnimacion.Provider value={{ estaAnimando, estaPausado, reportarFinalAnimacion }}>
          {children}
        </ContextoAnimacion.Provider>
      </div>

    </div >
  );
};

export default React.memo(ProveedorAnimacion)
