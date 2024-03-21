import React from 'react';
import { render, screen } from '@testing-library/react';
import { EJEMPLO_USUARIO } from '../../constantes/constantes';
import ComponentePropOpcional from './ComponentePropOpcional';

describe('ComponentePropOpcional', () => {
  test('mostrar el email si se pasa como parámetro', () => {
    render(<ComponentePropOpcional
      nombre={EJEMPLO_USUARIO.nombre}
      edad={EJEMPLO_USUARIO.edad}
      email={EJEMPLO_USUARIO.email}
    />);
    screen.getByText(EJEMPLO_USUARIO.nombre);
    screen.getByText(EJEMPLO_USUARIO.edad);
    screen.getByText(EJEMPLO_USUARIO.email);
  });

  test('no mostrar el email si no se pasa como parámetro', () => {
    render(<ComponentePropOpcional
      nombre={EJEMPLO_USUARIO.nombre}
      edad={EJEMPLO_USUARIO.edad}
    />);
    screen.getByText(EJEMPLO_USUARIO.nombre);
    screen.getByText(EJEMPLO_USUARIO.edad);
    const email = screen.queryByText(EJEMPLO_USUARIO.email);
    expect(email).not.toBeInTheDocument();
  });
});
