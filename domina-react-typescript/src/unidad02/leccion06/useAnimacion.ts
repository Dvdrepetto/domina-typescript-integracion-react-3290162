import { useContext } from "react";
import { ContextoAnimacion } from "./ContextoAnimacion";

// Hook personalizado para acceder al contexto de animación
const useAnimacion = () => {
    const context = useContext(ContextoAnimacion);
    if (!context) {
      throw new Error('useAnimacion debe ser usado dentro de un ProveedorAnimacion');
    }
    return context;
  };

  export default useAnimacion;
  