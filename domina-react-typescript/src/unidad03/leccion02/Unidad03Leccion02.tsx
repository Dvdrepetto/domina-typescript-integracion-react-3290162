import React from 'react';
import ComponenteFuncionalGenerico from './ComponenteFuncionalGenerico';
import { PELICULAS, USUARIOS } from '../../constantes/constantes';
import { Pelicula, Usuario } from '../../tipos/tipos';

const Unidad03Leccion02: React.FC = () => {
    return (
        <div style={{
            width: 300
        }}>
            <div className="row">
                <ComponenteFuncionalGenerico<Pelicula>
                    datos={PELICULAS}
                    renderizarEl={(pelicula: Pelicula) => (
                        <button
                            type="button"
                            className="list-group-item list-group-item-action">
                            {pelicula.titulo}
                        </button>
                    )}
                />
            </div>
            <div className="row mt-2">
                <ComponenteFuncionalGenerico<Usuario>
                    datos={USUARIOS.usuarios}
                    renderizarEl={(usuario: Usuario, i) => (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    {usuario.nombre}
                                </div>
                                {usuario.perfil.intereses.join(',')}
                            </div>
                            <span className="badge text-bg-primary rounded-pill">{i! + 1}</span>
                        </li>
                    )}
                />
            </div>
        </div>
    );
};

export default Unidad03Leccion02;