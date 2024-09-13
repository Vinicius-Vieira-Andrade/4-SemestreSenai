import App from "../App";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Painel } from "../Pages/Painel";
import context from "../Context/userContext";

export const RoutesPage = () => {
    const [user, setUser] = useState({});

    const ProtectedRoute = ({ children }) => {
        return user.login ? children : <Navigate to="/" />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <context.Provider value={{ setUser }}>
                        <App />
                    </context.Provider>
                } path="/" />

                <Route element={
                    <context.Provider value={{ user }}>

                        <ProtectedRoute>
                            <Painel />
                        </ProtectedRoute>
                    </context.Provider>
                } path="/painel-ativos" />

                {/* Rotas não especificadas, encaminharão para a tela de login */}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}