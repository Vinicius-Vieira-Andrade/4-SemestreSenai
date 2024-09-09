import { Button } from "../Button";
import { Input } from './../Input/index';

export const FormAccess = ({ textButton, onSubmit, value, onChange, load }) => {
  return (
    <form onSubmit={onSubmit} className="w-[40%]">
      <Input styles="w-full" id="campoFormulario" value={value} onChange={onChange}>Usuário de acesso</Input>

      <Button load={load} styles="w-full mt-4">{textButton}</Button>
    </form>
  )
}