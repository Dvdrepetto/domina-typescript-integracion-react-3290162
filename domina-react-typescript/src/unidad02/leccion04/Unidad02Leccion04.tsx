import React, { useState, useRef } from 'react';

const Unidad02Leccion04: React.FC = () => {
  const [cuenta, setCuenta] = useState<number>(0);
  const [estaPausado, setEstaPausado] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const empezarContador = () => {
    setEstaPausado(false);
    intervalRef.current = setInterval(() => {
      setCuenta(prevCuenta => prevCuenta + 1);
    }, 1000);
  };

  const pausarContador = () => {
    setEstaPausado(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const reiniciarContador = () => {
    setEstaPausado(false);
    setCuenta(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Cuenta: {cuenta}</p>
      <div className="row">
        <button className="btn btn-success col-1 m-2" onClick={empezarContador} disabled={estaPausado}>Start</button>
        <button className="btn btn-warning col-1 m-2" onClick={pausarContador} disabled={estaPausado}>Pause</button>
        <button className="btn btn-primary col-1 m-2" onClick={reiniciarContador}>Reset</button>
      </div>
    </div>
  );
};

export default Unidad02Leccion04;
