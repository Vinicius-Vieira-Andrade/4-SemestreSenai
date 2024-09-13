import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import PainelPage from "../Pages/Painel";

export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />

        <Route element={<PainelPage />} path="/painel-ativos" />

        {/* Configuracao para evitar erros de rota */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
