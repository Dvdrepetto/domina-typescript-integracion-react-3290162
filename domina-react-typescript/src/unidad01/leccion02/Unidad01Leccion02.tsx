import React from 'react';
import ComponenteCondicional from './ComponenteCondicional';
import { EJEMPLO_USUARIO } from '../../constantes/constantes';



const Unidad01Leccion02 = () => {
  return (
    <div>
      <ComponenteCondicional {...{logueado: false, mensajeBienvenida: 'Crea una cuenta para obtener acceso'}}/>
      <ComponenteCondicional {...{logueado: true, usuario: EJEMPLO_USUARIO}}/>
    </div>
  );
}

export default Unidad01Leccion02;