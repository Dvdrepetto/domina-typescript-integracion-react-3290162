import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './componentes/ListaProductos';
import FormularioProducto from './componentes/FormularioProducto';

const Unidad04 = () => {
    return (
        <Provider store={store}>
            <div className="container">
            <h3 className="text-center">Inventario de Productos</h3>
                <FormularioProducto />
                <ProductList />
            </div>
        </Provider>
    )
};

export default Unidad04;
