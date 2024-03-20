import React from 'react';
import { Boton } from './Boton';
import { Input } from './Input';
import { ProveedorMiContexto } from './ContextoGenerico';

const Unidad03Leccion03: React.FC = () => {
    return (
        <div style={{
            width: 200
        }}>
            <ProveedorMiContexto<number>>
                <div className="mt-3">
                    <Input />
                </div>
                <div className="mt-3">
                    <Boton />
                </div>
            </ProveedorMiContexto>
        </div>
    );
};

export default Unidad03Leccion03;