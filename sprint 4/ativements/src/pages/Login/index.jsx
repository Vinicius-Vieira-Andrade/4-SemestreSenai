import React, { useState } from "react";
import { Paragraph, TextError, Title } from "../../components/text";
import { FormAccess } from "../../components/forms";
import { ButtonLink } from "../../components/button";


const Login = ({onLinking}) => {
    const [load, setLoad] = useState(false);
    const [message, setMessage] = useState("");
    const [userAccess, setUserAccess] = useState("");

    const verifyAccess = (e) => {
        e.preventDefault();

            setLoad(true)
        //comunicando com "api"
        fetch(`http://localhost:3000/usuarios?login=${userAccess.toLowerCase()}`)
        .then(response => response.json())
        .then(response => {
            if (response[0]) {
                alert("Usuario logado")
            }
            else{
                setMessage("Usuário não encontrado, tente novamente")
            }
        }).catch(() => {
            setMessage("Não foi possível efetuar o login, teste sua conexão com o servidor")
        })

        setLoad(false)
    }

    return (
        <section className="flex flex-col items-center justify-center md:gap-8 sm:gap-3">
            <Title>Entrar na plataforma</Title>

            <Paragraph>Para acessar sua conta, informe seu usuário de acesso vínculado ao Github</Paragraph>

            {/* form de cadastro */}
            <FormAccess onSubmit={verifyAccess} load={load} textButton="Acessar conta" value={userAccess} onChange={e => setUserAccess(e.target.value)} />

            <TextError>{message}</TextError>

            <Paragraph>Seu primeiro acesso? <ButtonLink onClick={onLinking}>Registre-se aqui</ButtonLink> </Paragraph>
        </section>
    )
}

export default Login;