import React, { useState } from 'react'

import { Paragraph, TextError, Title } from '../../Components/Texts'
import { ButtonLink } from '../../Components/Button'
import { FormAccess } from '../../Components/Forms'

const Login = ({ onLinking }) => {
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
  const [userAccess, setUserAccess] = useState("");

  const verifyAccess = (e) => {
    e.preventDefault();

    setLoad(true)
    fetch(`http://localhost:3000/usuarios?login=${userAccess.toLowerCase()}`)
    .then( response => response.json() )
    .then( response => {
      if(response[0]){
        alert("Usuário logado");

      }else{
        setMessage("Usuário não encontrado, tente novamente");
      }
    })
    .catch( () => {
      setMessage("Não foi possível efetuar o login, teste sua conexão com a internet")
    })

    setLoad(false)
    setUserAccess("")
  }

  return (
    <section className='flex flex-1 flex-col items-center justify-center gap-8'>
      <Title>Entrar na plataforma</Title>

      <Paragraph>Para acessar sua conta, informe seu usuário de acesso vínculado ao Github</Paragraph>

      {/* Formulario de cadastro */}
      <FormAccess
        load={load}
        onSubmit={verifyAccess}
        textButton="Acessar conta"

        value={userAccess}
        onChange={e => setUserAccess(e.target.value)}
      />

      <TextError>{message}</TextError>

      <Paragraph>Seu primeiro acesso? <ButtonLink onClick={onLinking}>registre-se aqui</ButtonLink></Paragraph>
    </section>
  )
}

export default Login
