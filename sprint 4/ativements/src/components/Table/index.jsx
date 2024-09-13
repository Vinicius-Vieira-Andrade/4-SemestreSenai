import { ButtonTransparent } from "../Button";

export const Table = ({ list, setUpdate, setList }) => {

    const removeAtivements = (ativo) => {
        try {
            const data = {
                ...ativo,
                status: !ativo.status,
            }


            fetch('http://localhost:3000/ativos/' + ativo.id, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            
            
            //  atualizar o ativo da lista
            setList( list.map(item => item.id === ativo.id ? data : item) )


        } catch{
            alert('Nao foi possivel remover o ativo')
        }
    }


    //  capturar os dados do ativo para atualiza-los
    const getAtivements = (ativo) => {
        setUpdate({...ativo})
    }

    return (
        <div className="max-md:overflow-scroll">
            <table className="w-full mt-10 ">
                <thead>
                    <tr className="bg-[#e1e0e7]">
                        <th className="py-5 px-10 text-left rounded-l">Identificação do ativo</th>
                        <th className="py-5 px-10 text-left">Nome do ativo</th>
                        <th className="py-5 px-10 text-left">Data de registro</th>
                        <th className="py-5 px-10 text-left rounded-r">Ações do ativo</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((item, index) => {
                            return (
                                <tr key={index} className="hover:bg-[#f1f0f5] hover:border-l-2 hover:border-primary-purple transition-all duration:150 hover:w-[90%]">
                                    <td className={`py-5 px-10 text-left ${item.status && "line-through"}`}>{item.numero}</td>
                                    <td className={`py-5 px-10 text-left ${item.status && "line-through"}`}>{item.nome}</td>
                                    <td className={`py-5 px-10 text-left ${item.status && "line-through"}`}>{item.dataRegistro}</td>
                                    <td className="py-5 px-10 text-left flex gap-5">
                                        <ButtonTransparent onClick={e => getAtivements(item)} styles="border-none py-0 px-0 text-[#009e9e]">Editar ativo</ButtonTransparent>

                                        <ButtonTransparent onClick={e => removeAtivements(item)} styles="border-none py-0 px-0 text-primary-red">{ item.status ? "Excluir" : "Inserir"} ativo</ButtonTransparent>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}