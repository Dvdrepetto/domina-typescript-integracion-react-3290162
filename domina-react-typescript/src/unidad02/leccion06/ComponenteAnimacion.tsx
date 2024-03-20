import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import useAnimacion from './useAnimacion';

gsap.registerPlugin(useGSAP);

const estilosCuadro = (color: string): React.CSSProperties => {
  console.log(color);
  return {
    width: 100,
    height: 100,
    borderRadius: '5px',
    backgroundColor: color,
    position: 'absolute',
    top: 0,
  }
}

const estilosContenedor: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 100,
  marginTop: 10,
};

// Componente que usa la animación
const ComponenteAnimacion: React.FC<{ color: string }> = ({ color }) => {
  const contenedor = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLDivElement>(null);
  const [animacion, setAnimacion] = useState<gsap.core.Tween | undefined>(undefined);
  const [completo, setCompleto] = useState<boolean>(false);
  const { estaAnimando, estaPausado, reportarFinalAnimacion } = useAnimacion();

  useGSAP(() => {
    setAnimacion(gsap.fromTo(el.current, {
      rotation: -360, x: 0, paused: true, onComplete: () => { }
    }, {
      rotation: 360, x: 1000, paused: true, duration: 10, ease: "bounce.inOut", onComplete: () => {
        reportarFinalAnimacion();
        setCompleto(true);
      }
    }));
  }, { scope: contenedor });

  if (estaAnimando) {
    if (completo) {
      animacion?.restart();
      setCompleto(false);
    } else {
      animacion?.play();
    }
  }

  if (estaPausado) {
    animacion?.pause();
  }

  return (
    <div ref={contenedor} className="contenedor" style={estilosContenedor}>
      <div ref={el} style={estilosCuadro(color)}></div>
    </div>

  );
};

export default React.memo(ComponenteAnimacion);