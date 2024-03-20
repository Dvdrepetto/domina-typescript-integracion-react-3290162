import React, { createContext, useContext } from 'react';

// Definir el tipo genérico para el contexto
type TipoMiContexto<T> = {
    datos: T;
    actualizarDatos: (nuevosDatos: T) => void;
};

// Crear el contexto con el tipo genérico
const MiContexto = createContext<TipoMiContexto<any>>({
    datos: null,
    actualizarDatos: () => { },
});

// Hook personalizado para acceder al contexto
function useMiContexto<T>(): TipoMiContexto<T> {
    return useContext(MiContexto) as TipoMiContexto<T>;
}

// Proveedor del contexto que acepta el tipo genérico
function ProveedorMiContexto<T>({ children }: { children: React.ReactNode }) {
    const [datos, setDatos] = React.useState<T | null>(null);

    const actualizarDatos = (nuevosDatos: T) => {
        setDatos(nuevosDatos);
    };

    return (
        <>
            <h4>Contexto: {datos as React.ReactNode}</h4>
            <MiContexto.Provider value={{ datos, actualizarDatos }}>
                {children}
            </MiContexto.Provider>
        </>
    );
}

export { ProveedorMiContexto, useMiContexto };
