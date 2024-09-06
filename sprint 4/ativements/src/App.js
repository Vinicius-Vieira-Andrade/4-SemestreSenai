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
      <section className={`md:flex flex-col items-center justify-center bg-atvGradient w-[50%] absolute h-screen left-[50%] transition-all duration-500 sm:flex ${left}`}>
        <Title styles='text-complementary-white'>Bem vindo ao <img className='sm:h-7 sm:ml-[20%] md:ml-[0px] sm:w-[60%] md:w-auto md:h-auto mt-3' src={logoMarca} alt='Ativements'/></Title>

        <Paragraph styles="ml-[0] text-complementary-white mt-[60px]">
        A plataforma eficiente para gerenciar e acompanhar todos os recursos da escola SENAI Informática
        </Paragraph>
      </section>

      <Register onLinking={e => setLeft("left-[50%]")}/>

      <Login onLinking={e => setLeft("left-[0%]")}/>
    </main>
  );
}

export default App;
