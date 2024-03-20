import { useState, useEffect } from 'react';
import { Usuario } from '../../tipos/tipos';

// Definimos un tipo para el estado de autenticación
type EstadoAutenticacion = {
  estaAutenticado: boolean;
  usuario: Usuario | null;
};

// Creamos el custom hook useAutenticacion
function useAutenticacion(): [EstadoAutenticacion, (usuario: Usuario | null) => void, () => void] {
  // Inicializamos el estado de autenticación con valores iniciales
  const [estadoAutenticacion, setEstadoAutenticacion] = useState<EstadoAutenticacion>({
    estaAutenticado: false,
    usuario: null
  });

  // Función para iniciar sesión del usuario
  const login = (usuario: Usuario | null) => {
    setEstadoAutenticacion({ estaAutenticado: true, usuario });
  };

  // Función para cerrar sesión del usuario
  const logout = () => {
    setEstadoAutenticacion({ estaAutenticado: false, usuario: null });
  };

  // Verificamos si el usuario está autenticado al montar el componente
  useEffect(() => {
    // Simulamos una verificación de autenticación en el localStorage
    const usuarioString = localStorage.getItem('usuario-autenticado');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      login(usuario);
    }
  }, []);

  // Actualizamos el estado de autenticación en localStorage cuando cambie
  useEffect(() => {
    if (estadoAutenticacion.estaAutenticado && estadoAutenticacion.usuario) {
      localStorage.setItem('usuario-autenticado', JSON.stringify(estadoAutenticacion.usuario));
    } else {
      localStorage.removeItem('usuario-autenticado');
    }
  }, [estadoAutenticacion]);

  return [estadoAutenticacion, login, logout];
}

export default useAutenticacion;
