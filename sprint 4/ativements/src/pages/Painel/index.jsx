import { Tabs } from "../../Components/Tabs";
import { FormAtivement } from "../../Components/Forms";
import { Header } from "../../Components/Header";
import { Table } from "../../Components/Table";
import { useEffect, useState } from "react";

export const Painel = () => {
    const [update, setUpdate] = useState();
    const [selectedPlace, setSelectedPlace] = useState("");
    const [places, setPlaces] = useState([]); // Locais dos ativos
    const [listAtivements, setAllAtivements] = useState([]); // Lista de ativos

    // Pega os ativos
    useEffect(() => {
        if (selectedPlace === "")
            getPlaces();
    }, [])

    // Filtra os ativos por Local
    useEffect(() => {
        filterAtivements(selectedPlace);
    }, [selectedPlace])

    // Busca os locais cadastrados no banco
    const getPlaces = () => {
        fetch("http://localhost:3000/locais")
            .then(response => response.json()) // Converte a resposta para JSON
            .then(response => {
                setPlaces(response);

                // Pega a primeira referência dos locais dos ativos
                if (response[0])
                    setSelectedPlace(response[0].id);
            })
            .catch(() => alert("Erro inseperado, não foi possível obter os locais dos ativos!")
            );
    };

    // Lista os ativos de acordo com o local informado
    const filterAtivements = (local) => {
        fetch("http://localhost:3000/ativos?local=" + local)
            .then(response => response.json())
            .then(response => setAllAtivements(response))
            .catch(() => alert("Não foi possível obter os ativos!"));
    }

    return (
        <div className="w-10/12 my-0 mx-auto">
            <Header />

            {/* Formulário para criação/edição de ativos */}
            <FormAtivement places={places} setPlaces={setPlaces} list={listAtivements} setList={setAllAtivements} update={update} />

            {/* Tabs - listagem de locais de ativos */}
            <Tabs places={places} setSelectedPlace={setSelectedPlace} selectedPlace={selectedPlace} />

            {/* Listagens dos ativos cadastrados */}
            <Table list={listAtivements.filter(x => x.local === selectedPlace)} setList={setAllAtivements} setUpdate={setUpdate} />
        </div>
    );
}