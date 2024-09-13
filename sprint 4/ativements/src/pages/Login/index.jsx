import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import context from "../../Context/userContext";

import { ButtonLink } from "../../Components/Button";
import { FormAccess } from "../../Components/Forms";
import { Paragraph, TextError, Title } from "../../Components/Texts";

export const Login = ({ onLinking, status }) => {
    const { setUser } = useContext(context); // importando dentro do contexto, a função de alimentar os dados do usuário (setUser)
    const navigate = useNavigate();

    const [load, setLoad] = useState(false);
    const [message, setMessage] = useState("");
    const [userAccess, setUserAccess] = useState("");

    // Limpa as mensagens de erro após 5 segundos
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("");
            }, 5000)
        }
    }, [message])

    useEffect(() => {
        setUser({});
    }, [])

    const verifyAccess = (e) => {
        e.preventDefault();

        setLoad(true);
        fetch(`http://localhost:3000/usuarios?login=${userAccess.toLocaleLowerCase()}`)
            .then(response => response.json())
            .then(response => {
                if (response[0]) {
                    setUser(response[0]); // Alimenta os dados do user para o context da aplicação

                    navigate("/painel-ativos");
                } else {
                    setMessage("Usuário não encontrado, tente novamente!");
                }
            }).catch(() => {
                setMessage("Não foi possível efetuar o login, tente novamente!");
            });

        setTimeout(() => {
            setLoad(false);
            setUserAccess("");
        });
    }

    return (
        <section className={`${status === true ? "opacity-0 transition-opacity duration-[300ms]" : "opacity-100 transition-opacity duration-[2500ms]"} flex flex-1 flex-col items-center justify-center gap-8`}>
            <Title>Entrar na plataforma</Title>

            <Paragraph styles="w-[55%]">Para acessar sua conta, informe seu usuário de acesso vínculado ao Github</Paragraph>

            {/* Formulário de acesso */}
            <FormAccess
                load={load}
                onSubmit={verifyAccess}

                value={userAccess}
                onChange={e => setUserAccess(e.target.value)}

                textButton={"Acessar conta"}
            />

            {/* Exibindo as mensagens de erro */}
            <TextError>{message}</TextError>

            <Paragraph>Seu primeiro acesso? <ButtonLink onClick={onLinking}>registre-se aqui</ButtonLink></Paragraph>
        </section>
    );
}