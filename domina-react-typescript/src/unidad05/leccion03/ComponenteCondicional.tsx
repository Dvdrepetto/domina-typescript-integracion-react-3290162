import React, { Component } from 'react';
import { Usuario } from '../../tipos/tipos';

type UsuarioLogueado = {
  logueado: true,
  usuario: Usuario
}

type NoLogueado = {
  logueado: false,
  mensajeBienvenida: string,
}

type Estado = {
  email?: string,
  contrasena?: string,
};

// Define Props con unión de tipos:
type Props = UsuarioLogueado | NoLogueado;

class ComponenteCondicional extends Component<Props, Estado> {
  estado: Estado = {
    email: undefined,
    contrasena: undefined,
  };

  render() {
    const { logueado } = this.props;

    return (
      <div className="container">
        {!logueado && <div>
          <h1 className="mb-3 mt-3">{this.props.mensajeBienvenida}</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input
                type="text"
                id="usuario"
                value={this.estado.email}
                placeholder="Tu usuario..."
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                value={this.estado.contrasena}
                placeholder="Tu contraseña.."
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input className="btn btn-primary" type="submit" value="Acceder" />
            </div>
          </form>
        </div>}
        {
          logueado && (
            <div className="container">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{this.props.usuario.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{this.props.usuario.perfil.sitioWeb}</h6>
                  <p className="card-text">{this.props.usuario.perfil.bio}</p>
                  <a href="#" className="card-link">{this.props.usuario.email}</a>
                  <a href="#" className="card-link">{this.props.usuario.informacionContacto.telefono}</a>
                </div>
              </div>
            </div>
          )
        }
      </div >
    );
  }
}

export default ComponenteCondicional;
