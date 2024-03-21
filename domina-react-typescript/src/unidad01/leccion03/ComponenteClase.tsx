import React, { useState } from 'react';

// Definición de tipo para el estado del componente
interface EstadoComponente {
    cuenta: number;
}

const ComponenteCuenta: React.FC = () => {
    // Utilización del estado mediante useState con el
    // tipo definido
    const [state, setState] = useState<EstadoComponente>({
        cuenta: 0
    });

    // Función para incrementar el contador
    const incrementarCuenta = () => {
        setState(estadoPrevio => ({
            cuenta: estadoPrevio.cuenta + 1
        }));
    };

    // Función para decrementar el contador
    const reducirCuenta = () => {
        setState(estadoPrevio => ({
            cuenta: estadoPrevio.cuenta - 1
        }));
    };

    return (
        <div className="container">
            <h3>Contador</h3>
            <p>cuenta: {state.cuenta}</p>
            <div className="row">
                <div className="col-3">
                    <button
                        className="btn btn-primary"
                        onClick={incrementarCuenta}>
                        Incrementar
                    </button>
                </div>
                <div
                    className="col-2">
                    <button
                        className="btn btn-primary"
                        onClick={reducirCuenta}>
                        Reducir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComponenteCuenta;
