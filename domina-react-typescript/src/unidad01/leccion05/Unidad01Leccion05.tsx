import React, { ReactElement } from 'react';

// https://stackoverflow.com/questions/30971395/difference-between-react-component-and-react-element

// Componente funcional que devuelve un ReactElement con propiedades
const ItemProducto = (props: { nombre: string; precio: number }): ReactElement => {
  return (
    <div className="card col m-3">
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">Precio: €{props.precio}</p>
      </div>
    </div>
  );
};

// Componente funcional que devuelve un array de ReactElement
const ListaProductos = (): ReactElement => {
  const productos = [
    { nombre: 'Producto A', precio: 10 },
    { nombre: 'Producto B', precio: 20 },
    { nombre: 'Producto C', precio: 30 }
  ];

  return (
    <>
      <h3 className="mb-3">Lista de productos</h3>
      <div className="row">
        {productos.map((producto, index) => (
          <ItemProducto key={index} nombre={producto.nombre} precio={producto.precio} />
        ))}
      </div>
    </>
  );
};

const Unidad01Leccion05 = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Ejemplo del uso de ReactElement</h2>
      {/* Renderizando el componente que devuelve un array de ReactElement */}
      <ListaProductos />
    </div>
  );
};

export default Unidad01Leccion05;
