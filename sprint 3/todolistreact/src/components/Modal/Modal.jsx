import { useState } from "react";
import { MainTitle } from "../Titles/Titles";

function Modal({ isOpen, isClose }) {
    if (!isOpen) return null;

    return (
        <MainTitle dayText={"Descreva sua tarefa!"}/>
    )
}

export default Modal;