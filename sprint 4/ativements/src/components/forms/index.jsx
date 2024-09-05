import { Button } from "../button"
import { Input } from "../input"

export const FormAccess = ({textButton, onSubmit, value, onChange, load}) => {
    return (
        <form className="w-[40%]" onSubmit={onSubmit}>
            <Input styles="w-full" id='campForm' value={value} onChange={onChange}>Usuário de acesso</Input>
            <Button load={load} styles="w-full mt-4">{textButton}</Button>
        </form>
    )
}