import React from 'react';
import useAutenticacion from './useAuthentication';
import { EJEMPLO_USUARIO } from '../../constantes/constantes';

const Unidad02Leccion05: React.FC = () => {
    const [estadoAutenticacion, login, logout] = useAutenticacion();

    return (
        <div>
            {estadoAutenticacion.estaAutenticado ? (
                <div>
                    <p>Bienvenido, {estadoAutenticacion.usuario?.nombre}</p>
                    <button className="btn btn-secondary" onClick={() => { logout(); }}>Cerrar sesión</button>
                </div>
            ) : (
                <div>
                    <p>Inicia sesión para continuar</p>
                    <button className="btn btn-primary" onClick={() => { login(EJEMPLO_USUARIO)}}>Iniciar sesión</button>
                </div>
            )}
        </div>
    );
};

export default Unidad02Leccion05;
