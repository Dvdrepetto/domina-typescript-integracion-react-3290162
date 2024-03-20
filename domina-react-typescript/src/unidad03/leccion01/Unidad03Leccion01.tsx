import React from 'react';
import ComponenteClaseGenerico from './ComponenteClaseGenerico';
import { Pelicula, Usuario } from '../../tipos/tipos';
import { PELICULAS, USUARIOS } from '../../constantes/constantes';

const Unidad03Leccion01: React.FC = () => {
    return (
        <>
            <div className="row">
                <h4>Ejemplo 1: Tabla basada en el tipo Usuario</h4>
                <ComponenteClaseGenerico<Usuario>
                    datos={USUARIOS.usuarios}
                    columnas={['nombre', 'email', 'edad']}
                    generadorFila={(usuario) => (
                        <tr>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.edad}</td>
                        </tr>
                    )}
                />
            </div>
            <div className="row mt-3">
                <h4>Ejemplo 2: Tabla basada en el tipo Pelicula</h4>
                <ComponenteClaseGenerico<Pelicula>
                    datos={PELICULAS}
                    columnas={['titulo', 'genero', 'duracion']}
                    generadorFila={(pelicula) => (
                        <tr>
                            <td>{pelicula.titulo}</td>
                            <td>{pelicula.genero}</td>
                            <td>{pelicula.duracion}</td>
                        </tr>
                    )}
                />
            </div>
        </>
    );
};

export default Unidad03Leccion01;
