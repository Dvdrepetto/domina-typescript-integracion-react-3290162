import { useMiContexto } from "./ContextoGenerico"

export const Boton = () => {
    const { actualizarDatos, datos } = useMiContexto<number>()
    return (
        <button
            type="button"
            className="btn btn-info"
            onClick={() => {
                actualizarDatos(datos + 1)
            }}>
            Incrementar
        </button>
    )
}