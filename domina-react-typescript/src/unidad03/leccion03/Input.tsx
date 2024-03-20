import { useMiContexto } from "./ContextoGenerico"

export const Input = () => {
    const { actualizarDatos } = useMiContexto<number>()
    return (
        <input
            type="number"
            className="form-control"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const num = parseInt(e.currentTarget.value);
                actualizarDatos(isNaN(num) ? 0 : num);
            }}
        />
    )
}