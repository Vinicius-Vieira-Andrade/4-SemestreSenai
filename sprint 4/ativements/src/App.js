import { Paragraph, Title } from "./Components/Texts";
import logomarca from "./Assets/logomarca.png";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { useState } from "react";

export function App() {
  const [statusRegister, setStatusRegister] = useState(true);

  return (
    <main className="h-screen flex lg:flex-row flex-row sm:flex-col">
      
      <section className={`flex flex-1 flex-col items-center justify-center bg-atvGradient absolute transition-all duration-1000 lg:w-1/2 lg:h-screen ${statusRegister
        ? "lg:left-[50%] lg:top-0 sm:top-[50%]"
        : "lg:left-0 lg:top-0 sm:top-0"}
         sm:w-full sm:h-1/2`}>
        <Title styles="text-complementary-white">Bem-vindo ao <img className="mt-3" src={logomarca} alt="Ativements" /></Title>

        <Paragraph styles="text-complementary-white mt-16 sm:hidden lg:block">
          A plataforma eficiente para gerenciar e acompanhar todos os recursos da escola SENAI Informática
        </Paragraph>
      </section>

      <Register status={statusRegister} onLinking={e => setStatusRegister(false)} />
      <Login status={statusRegister} onLinking={e => setStatusRegister(true)} />
    </main>
  );
}

export default App;