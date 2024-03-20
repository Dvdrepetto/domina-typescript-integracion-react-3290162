import React, { Component } from 'react';

// Definimos la interfaz de propiedades genéricas
interface Props<T> {
  datos: T[];
  columnas: (keyof T)[];
  generadorFila: (datos: T) => React.ReactNode;
}

// Definimos la interfaz de estado genérica
interface Estado { }

// Creamos el componente de clase con genéricos
class ComponenteClaseGenerico<T> extends Component<Props<T>, Estado> {
  constructor(props: Props<T>) {
    super(props);
    this.state = {};
  }

  render() {
    const { datos, generadorFila, columnas } = this.props;

    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {columnas.map((columna: keyof T) => (
                <th
                  key={String(columna)}
                  scope="col">
                  {`${String(columna).charAt(0).toUpperCase()}${String(columna).slice(1)}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datos.map((dato: T) => generadorFila(dato))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ComponenteClaseGenerico;
