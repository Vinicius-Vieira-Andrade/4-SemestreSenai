import React from "react"
import Header from "../../Components/Header"
import { FormActives } from "../../Components/Forms"
import Tabs from "../../Components/Tabs"
import Table from "../../Components/Table"

const PainelPage = () => {
    return (
        <div className="w-10/12 mx-auto">
            {/* cabecario */}
            <Header />

            {/* formulario de ativos */}
            <FormActives />

            {/* tabs - locais dos ativos */}
            <Tabs/>

            <Table/>
        </div>
    )
}

export default PainelPage
