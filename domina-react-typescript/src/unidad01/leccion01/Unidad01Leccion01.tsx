import React from 'react';
import { EJEMPLO_USUARIO } from '../../constantes/constantes';
import Componente from './Componente';



const Unidad01Leccion01 = () => {
    return (
        <div>
            <Componente
                nombre={EJEMPLO_USUARIO.nombre}
                edad={EJEMPLO_USUARIO.edad}
                email={EJEMPLO_USUARIO.email}
            />
        </div>
    );
}

export default Unidad01Leccion01;