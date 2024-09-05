import React, { useState } from "react";
import { Paragraph, TextError, Title } from "../../components/text";
import { FormAccess } from "../../components/forms";
import { ButtonLink } from "../../components/button";


const Login = (onLinking) => {
    const [load, setLoad] = useState(false);
    const [message, setMessage] = useState("");
    const [userAccess, setUserAccess] = useState("");

    

    return (
        <section className="flex flex-col items-center justify-center gap-8">
            <Title>Entrar na plataforma</Title>

            <Paragraph>Para acessar sua conta, informe seu usuário de acesso vínculado ao Github</Paragraph>

            {/* form de cadastro */}
            <FormAccess load={load} textButton="Acessar conta" value={userAccess} onChange={e => setUserAccess(e.target.value)} />

            <TextError>{message}</TextError>

            <Paragraph>Seu primeiro acesso? <ButtonLink>Registre-se aqui</ButtonLink> </Paragraph>
        </section>
    )
}

export default Login;