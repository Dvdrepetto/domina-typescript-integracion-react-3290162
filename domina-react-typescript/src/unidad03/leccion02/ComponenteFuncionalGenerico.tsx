import React, { useRef } from 'react';

// Definir los props genéricos
type Props<T> = {
  datos: T[];
  renderizarEl: (dato: T, index?: number) => React.ReactNode;
};

// Componente funcional con genéricos
function ComponenteFuncionalGenerico<T>({ datos, renderizarEl }: Props<T>) {
  return (
    <div className="list-group">
      {datos.map((item, index) => (
        <div key={index}>{renderizarEl(item, index)}</div>
      ))}
    </div>
  );
}

export default ComponenteFuncionalGenerico;
