import "./Buttons.css"
import cancel from "../../assets/cancelicon.svg"
import edit from "../../assets/edit.svg"
import { useState } from "react"

export function NewTaskButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <button onClick={showModal} className="task-button" >Nova Tarefa</button>
    );
}

export function CancelButton() {
    return (
        <img className="cancel" src={cancel} alt="" />
    )
}

export function EditButton() {
    return (
        <img className="edit" src={edit} alt="" />
    )
}

