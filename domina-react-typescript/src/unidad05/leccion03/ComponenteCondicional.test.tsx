import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponenteCondicional from './ComponenteCondicional';
import { EJEMPLO_USUARIO } from '../../constantes/constantes';

describe('ComponenteCondicional', () => {
  test('muestra mensaje de bienvenida si el usuario no esta logueado', () => {
    render(<ComponenteCondicional {...{
      logueado: false,
      mensajeBienvenida: 'Crea una cuenta para obtener acceso'
    }}
    />);
    const mensaje = screen.getByText(/Crea una cuenta para obtener acceso/i);
    expect(mensaje).toBeInTheDocument();
  });
  
  test('muestra información de usuario si el usuario está logueado', () => {
    render(<ComponenteCondicional {...{
      logueado: true,
      usuario: EJEMPLO_USUARIO
    }}
    />);
    const nombre = screen.getByText(EJEMPLO_USUARIO.nombre);
    expect(nombre).toBeInTheDocument();
  });
});
