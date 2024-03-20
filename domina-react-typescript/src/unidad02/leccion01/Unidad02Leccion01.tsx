import React, { useState } from 'react';
import { Usuario } from '../../tipos/tipos';

const Unidad02Leccion01: React.FC = () => {
    // Estado inicial del usuario
    const usuarioInicial: Usuario = {
        id: 1,
        nombre: 'Lucía Piedra',
        email: 'lucia@ejemplo.com',
        edad: 65,
        informacionContacto: {
            casa: '13 Calle Córdoba',
            ciudad: 'San José',
            codigoPostal: '12345',
            telefono: '555-1234'
        },
        perfil: {
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            intereses: ['Bordar', 'Viajar'],
            sitioWeb: 'https://luciapiedra.com'
        }
    };

    // Estado del usuario
    const [usuario, setUsuario] = useState<Usuario>(usuarioInicial);

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para manejar cambios en los campos de información de contacto
    const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            informacionContacto: {
                ...prevState.informacionContacto,
                [name]: value
            }
        }));
    };

    // Función para manejar cambios en los campos de perfil
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            perfil: {
                ...prevState.perfil,
                [name]: value
            }
        }));
    };

    // Función para manejar cambios en los campos de intereses
    const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            perfil: {
                ...prevState.perfil,
                intereses: value.split(',').map(item => item.trim())
            }
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(usuario);
        // Aquí podrías enviar los datos del usuario a tu servidor
    };

    return (
        <div className="container mt-5 mb-5">
            <h2>Formulario de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input className="form-control" type="text" name="nombre" value={usuario.nombre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" name="email" value={usuario.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Edad:</label>
                    <input className="form-control" type="number" name="edad" value={usuario.edad} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <h3>Información de Contacto</h3>
                    <label className="form-label">Casa:</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ciudad:</label>
                    <input className="form-control" type="text" name="ciudad" value={usuario.informacionContacto.ciudad} onChange={handleContactInfoChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Código Postal:</label>
                    <input className="form-control" type="text" name="codigoPostal" value={usuario.informacionContacto.codigoPostal} onChange={handleContactInfoChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input className="form-control" type="text" name="telefono" value={usuario.informacionContacto.telefono} onChange={handleContactInfoChange} required />
                </div>
                <div className="mb-3">
                    <h3>Perfil</h3>
                    <label className="form-label">Bio:</label>
                    <textarea className="form-control" name="bio" value={usuario.perfil.bio} onChange={handleProfileChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Intereses (separados por coma):</label>
                    <input className="form-control" type="text" name="intereses" value={usuario.perfil.intereses.join(', ')} onChange={handleInterestsChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sitio Web:</label>
                    <input className="form-control" type="text" name="sitioWeb" value={usuario.perfil.sitioWeb || ''} onChange={handleProfileChange} />
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Unidad02Leccion01;
