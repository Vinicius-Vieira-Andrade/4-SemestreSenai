import { useState } from "react";
import { CancelButton, EditButton, NewTaskButton } from "../../components/Buttons/Buttons";
import Container from "../../components/Container/Container";
import ContainerToggle from "../../components/ContainerToggle/ContainerToggle";
import { InputCheck, MainInput } from "../../components/Inputs/Inputs";
import MainContent from "../../components/MainContent/MainContent";
import { MainTitle, ToggleText } from "../../components/Titles/Titles";
import Modal from "../../components/Modal/Modal";


function HomePage() {
  return (
    <MainContent>

      <Container>

        <MainTitle dayText={"Terça Feira,"} day={"26"} month={"Julho"} />

        <MainInput />

        <ContainerToggle>
          <InputCheck />
          <ToggleText text={"Começar a execução do projeto"} />
          <CancelButton />
          <EditButton />
        </ContainerToggle>
        <ContainerToggle>
          <InputCheck />
          <ToggleText text={"Começar a execução do projeto"} />
          <CancelButton />
          <EditButton />
        </ContainerToggle>
        <ContainerToggle>
          <InputCheck />
          <ToggleText text={"Começar a execução do projeto"} />
          <CancelButton />
          <EditButton />
        </ContainerToggle>

      </Container>
      <NewTaskButton/>

      
      <Modal />

    </MainContent>

  );
}

export default HomePage;
