import context from "../../Context/userContext";
import { v4 as uuid } from "uuid";
import { useContext, useEffect, useState } from "react";
import { octokit } from "../../Utils/githubkey";

import { ButtonLink } from "../../Components/Button";
import { FormAccess } from "../../Components/Forms";
import { Paragraph, TextError, Title } from "../../Components/Texts";
import { useNavigate } from "react-router-dom";


export const Register = ({ onLinking, status }) => {
    const { setUser } = useContext(context); // importando dentro do contexto, a função de alimentar os dados do usuário (setUser)
    const navigate = useNavigate();

    const [load, setLoad] = useState(false);
    const [message, setMessage] = useState("");
    const [userAccess, setUserAccess] = useState("");

    // Limpa mensagem de erro após 5 segundos
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("");
            }, 5000)
        }
    }, [message])

    // Função para validar o perfil do github
    const validateUser = (e) => {
        e.preventDefault();

        setLoad(true);
        // Requisição para API GitHub passando o "username"
        octokit.request("GET /users/{username}", {
            username: userAccess,
            headers: {
                "X-GitHub-Api-Version": "2022-11-28"
            }
        }).then(async response => {
            const verifyUserExists = await checkUserExists();

            if (verifyUserExists)
                setMessage("O usuário inserido já está cadastrado!");
            else
                // Registra um novo usuário com o retorno da requisição na API do GitHub
                registerUser(response.data);
        }).catch(error => {
            setMessage("Usuário inválido, tente novamente");
        });

        setTimeout(() => {
            setLoad(false);
            setUserAccess("");
        }, 200);
    }

    // Função para verificar se o usuário já está registrado
    const checkUserExists = () => {
        // GET no JSON Server para verificar se já existe algúm usuário
        return fetch(`http://localhost:3000/usuarios?login=${userAccess.toLocaleLowerCase()}`)
            .then(response => response.json())
            .then(response => {
                // Se for encontrado algúm usuário (existe um usuário)
                if (response.length > 0) {
                    return true;
                }
                // Se não houver o usuário
                return false;
            }).catch(() => {
                alert("Não foi possível consultar o usuário");
            })

    }

    // Função ára regostrar o usuário
    const registerUser = (user) => {
        try {
            const data = {
                id: uuid(),
                login: user.login.toLocaleLowerCase(),
                imagem: user.avatar_url
            }

            fetch("http://localhost:3000/usuarios", {
                method: "POST",
                body: JSON.stringify(data),
            });
            setUser(data);
            navigate("/painel-ativos");
        } catch (error) {
            setMessage("Não foi possível registrar o usuário, tente novamente");
        }
    }

    return (
        <section className={`${status === false ? "opacity-0 transition-opacity duration-[300ms]" : "opacity-100 transition-opacity duration-[2500ms]"} flex flex-1 flex-col items-center justify-center gap-8`}>
            <Title>Registrar-se na plataforma</Title>

            <Paragraph styles="w-[55%]">Para criar uma conta, informe a url de acesso ao seu perfil da plataforma do Github</Paragraph>

            {/* Formulário de acesso */}
            <FormAccess
                load={load}
                onSubmit={validateUser}

                value={userAccess}
                onChange={e => setUserAccess(e.target.value)}

                textButton={"Cadastrar conta"}
            />

            {/* Exibindo as mensagens de erro */}
            <TextError>{message}</TextError>

            {/* O onLinking - alimentando o state para o container de gradiente - vai para o click do botão de link */}
            <Paragraph>Já possui registro? <ButtonLink onClick={onLinking}>acessar conta</ButtonLink></Paragraph>
        </section>
    );
}