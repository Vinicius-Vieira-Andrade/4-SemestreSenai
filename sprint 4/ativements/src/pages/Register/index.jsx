import React, { useState } from "react";
import { Paragraph, TextError, Title } from "../../components/text";
import { Input } from "../../components/input";
import { Button, ButtonLink } from "../../components/button";
import { FormAccess } from "../../components/forms";
import { octokit } from "../../../src/utils/githubKey"
import { v4 as uuid } from "uuid"

const Register = (onLinking) => {
    const [load, setLoad] = useState(false);
    const [message, setMessage] = useState("");
    const [userAccess, setUserAccess] = useState("");

    //verifica se usuario existe
    const validateUser = (e) => {
        e.preventDefault();

        setLoad(true);
        octokit.request("GET /users/{username}", {
            username: userAccess,
            headers: {
                'X-GitHub-Api-Version': "2022-11-28"
            }
        }).then(async response => {
            const verify = (await checkUserExists());

            if (!verify) {
                registerUser(response.data)
            }
            else {
                setMessage('Usuário já cadastrado')
            }
        }).catch(() => {
            setMessage("Usuário não encontrado, tente novamente")
        })

        setLoad(false);
    }


    const checkUserExists = () => {
        return fetch(`http://localhost:3000/usuarios?Login=${userAccess.toLowerCase()}`)
            .then(response => response.json())
            .then(response => {
                if (response.length > 0) {
                    return true;
                }

                return false

            }).catch(() => {
                alert('nao foi possivel encontrar o usuario!')
                // setMessage('Não foi possível encontrar o usuário')
            })
    }


    const registerUser = (user) => {
        setMessage("")
        try {
            const data = {
                id: uuid(),
                login: user.login.toLowerCase(),
                imagem: user.avatar.url
            }


            fetch("http://localhost:3000/usuarios", {
                method: "POST",
                body: JSON.stringify(data)
            })

            alert("usuario cadastrado")
        }
        catch {
            setMessage("Não foi possível efetuar o registro, teste sua conexão com a internet.")
        }
    }


    return (
        <section className="flex flex-col items-center justify-center gap-8">
            <Title>Registrar-se na plataforma</Title>

            <Paragraph>Para criar uma conta, informe a url de acesso ao seu perfil da plataforma do Github</Paragraph>

            {/* form de cadastro */}
            <FormAccess load={load} onSubmit={validateUser} textButton="Cadastrar conta" value={userAccess} onChange={e => setUserAccess(e.target.value)} />

            <TextError>{message}</TextError>

            <Paragraph>Já possui registro? <ButtonLink>Acessar aqui</ButtonLink> </Paragraph>
        </section>
    )
}

export default Register;