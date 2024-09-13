import { useContext, useState, useEffect } from "react";
import { Button, ButtonTransparent } from "../Button";
import { Input, Select } from "../Inputs";
import context from "../../Context/userContext";

import { v4 as uuid } from "uuid";

export const FormAccess = ({ textButton, value, onChange, onSubmit, load }) => {
    return (
        <form onSubmit={onSubmit} className="w-[50%]">
            <Input id="camporegistro" value={value} onChange={onChange}>Usuário de acesso</Input>

            <Button load={load} styles="w-full mt-4">{textButton}</Button>
        </form>
    );
}

export const FormAtivement = ({ list, setList, places, setPlaces, update }) => {
    const { user } = useContext(context);
    const [ativement, setAtivement] = useState({
        nome: '',
        numero: '',
        local: ''
    });

    const validateData = async (e) => {
        e.preventDefault();

        //  procurar a existência de um ativo com a numeracao destacada
        const numerationInUse = await validateNumberAtivement();

        //  Quantidade de caracteres, deve ser maior 2 - nome
        if (ativement.nome.length <= 2) {
            alert('Nome do ativo está muito curto.')
        }

        //  A numeração do ativo deve ser tamanho maior que 5
        else if (ativement.numero.length <= 5) {
            alert('Número do ativo é muito curto.')
        }

        //  verificar se os campos estao preeenchidos corretamente  
        else if (ativement.nome.trim() == "" || ativement.nome.trim() == "") {
            alert('Campos não preenchidos corretamente')
        }

        //  numeracao do ativo nao pode ser repetida
        else if (numerationInUse) {
            alert('Numero do ativo ja utilizado, informe outra numeracao.')
        }

        else{
            createAtivement();
        }

        const validateNumberAtivement = () => {
            fetch('http://localhost:3000/ativos?numero=' + ativement.numero)
                .then(response => response.json())
                .then(response => {
                    if (response[0]) { //se retornar um ativo com o número informado, não pode cadastra-lo
                        return true;
                    }
                    return false;
                })
                .catch(() => {
                    return true;
                })
        }
    }

    // 
    const createAtivement = async (e) => {
        e.preventDefault();

        // Valida se o local existe ou precisa cadastrar
        const localId = await findLocal(ativement.local);

        try {
            const data = {
                ...ativement,
                local: localId,
                id: uuid(),
                dataRegistro: new Date().toLocaleString(),
                user_id: user.id,
                status: true // O Ativo está ativo
            };

            fetch("http://localhost:3000/ativos", {
                method: "POST",
                body: JSON.stringify(data)
            });

            // Adiciona na lista de ativos, o novo ativo inserido
            setList({ ...list, data });

        } catch {
            alert("Não foi possível registrar o ativo!");
        }
    }

    const findLocal = (local) => {
        return fetch("http://localhost:3000/locais?nome=" + local)
            .then(response => response.json())
            .then(async response => {
                // Se não tiver um item no banco, registrar um novo local
                if (response.length === 0)
                    return await createLocal(local);
                else
                    // Caso ele exista, retorne o id do local
                    return response[0].id;
            }).catch(() => alert("Não foi encontrado o local"));
    }

    const createLocal = (local) => {
        try {
            const data = {
                id: uuid(),
                nome: local,
            };

            fetch("http://localhost:3000/locais", {
                method: "POST",
                body: JSON.stringify(data)
            });

            // Insere nas Tabs o novo local cadastrado
            setPlaces([...places, data]);

            return data.id;

        } catch {
            alert("Não foi possível registrar o novo local");
        }
    }

    useEffect(() => {
        setAtivement(update)
    }, [update])

    return (
        <form onSubmit={createAtivement} className="bg-[#D9D3F6] w-full py-5 px-10 mt-2 rounded flex justify-around items-end shadow-md 
        max-md:flex-col max-md:items-center max-md:h-[450px]">
            <Input disabled={!!ativement.id} type='number' styles="w-[20%] max-md:w-[80%]" id="numeroativo" value={ativement.numero} onChange={e => setAtivement({ ...ativement, numero: e.target.value })}>Número do ativo</Input>

            <Input type='text' styles="w-[20%] max-md:w-[80%]" id="nomeativo" value={ativement.nome} onChange={e => setAtivement({ ...ativement, nome: e.target.value })}>Nome do ativo</Input>

            <Select places={places} styles="w-[20%] max-md:w-[80%]" id="localativo" value={ativement.local} onChange={e => setAtivement({ ...ativement, local: e.target.value })}>Local do ativo</Select>

            <ButtonTransparent styles="w-[15%] text-primary-blue border-primary-blue max-md:w-[60%] max-md:m-2">Limpar campos</ButtonTransparent>
            <Button styles="w-[15%] max-md:w-[60%] max-md:w-[60%]">Inserir ativo</Button>
        </form>
    );
}