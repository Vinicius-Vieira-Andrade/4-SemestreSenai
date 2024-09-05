// import './App.css';
import { Paragraph, Title } from './components/text';
import Register from './pages/Register';
import logoMarca from './assets/logomarca.png'
import Login from './pages/Login';
import { useState } from 'react';


function App() {
  const [left, setLeft] = useState("")

  return (
    <main className="flex flex-row h-screen">
      <section className='flex flex-col items-center justify-center bg-atvGradient w-[50%] absolute h-screen left-[50%]'>
        <Title styles='text-complementary-white'>Bem vindo ao <img className='mt-3' src={logoMarca} alt='Ativements'/></Title>

        <Paragraph styles="text-complementary-white mt-[60px]">
        A plataforma eficiente para gerenciar e acompanhar todos os recursos da escola SENAI Informática
        </Paragraph>
      </section>

      <Register onLinking={e => setLeft("left-[50%]")}/>

      <Login onLinking={e => setLeft("left-[0%]")}/>
    </main>
  );
}

export default App;
