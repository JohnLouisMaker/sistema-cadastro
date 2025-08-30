import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/paginal-inicial" element={<h1>Pagina Inicial</h1>} />
      <Route path="*" element={<Navigate to="/paginal-inicial" />} />
    </Routes>
  );
}
