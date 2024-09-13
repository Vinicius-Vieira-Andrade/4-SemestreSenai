import { useContext } from "react";
import context from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import logomarca from "../../Assets/logomarca_dark.png";
import { ButtonTransparent } from "../Button";

export const Header = () => {
    const { user } = useContext(context); // Buscando dentro do contexto os dados do usuário logado
    const navigate = useNavigate();

    // Salva o último acesso no banco e retorna à tela de Login (Desloga)
    const logoutUser = () => {
        try {
            const data = {
                ...user,
                lastAccess: new Date().toLocaleString()
            };

            fetch("http://localhost:3000/usuarios/" + user.id, {
                method: "PUT",
                body: JSON.stringify(data)
            });

            navigate("/");

        } catch {
            alert("Não foi possível registar o seu acesso!");
        }
    }

    return (
        <header className="w-full flex justify-between items-center py-6">
            <img src={logomarca} alt="logo do site" />

            <div className="flex justify-center items-center gap-5">
                <a
                    target='_blank'
                    rel="noreferrer"
                    href={`https://github.com/${user.login}`}
                    title={`Acessar o perfil do ${user.login} no github`}
                >
                    <img className="w-16 rounded" src={user.imagem} alt="Foto de perfil do usuário logado" />
                </a>

                <ButtonTransparent onClick={logoutUser} styles={"border-primary-red"}>
                    <FaPowerOff fill="#bf0000" />
                </ButtonTransparent>
            </div>
        </header>
    )
}
