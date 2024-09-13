import { Button, ButtonTransparent } from "../Button";
import { Input } from './../Input/index';

export const FormAccess = ({ textButton, onSubmit, value, onChange, load }) => {
  return (
    <form onSubmit={onSubmit} className="w-[40%]">
      <Input styles="w-full" id="campoFormulario" value={value} onChange={onChange}>Usuário de acesso</Input>

      <Button load={load} styles="w-full mt-4">{textButton}</Button>
    </form>
  )
}


export const FormActives = () => {
  return (
    <form className="bg-[#D9D2F6] w-full py-5 px-10 mt-5 flex justify-between items-end shadow-md">
      <Input styles="w-[20%]" id="numeroAtivo">Número do ativo</Input>
      <Input styles="w-[20%]" id="nomeAtivo">Nome do ativo</Input>
      <Input styles="w-[20%]" id="localAtivo">Local do ativo</Input>

      <ButtonTransparent styles="border-primary-blue text-primary-blue">Limpar Campos</ButtonTransparent>
      <Button styles="w-[15%]">Inserir ativo</Button>
    </form>
  )
}