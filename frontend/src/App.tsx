import { Link, Route, Routes } from "react-router-dom";
import { CreateLeasePage } from "./pages/CreateLeasePage";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

export function App() {
  return (
    <div>
      <header className="topbar">
        <Link to="/" className="brand">ContratoFÃ¡cil</Link>
        <nav>
          <Link to="/crear-arriendo">Crear contrato</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Ingresar</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/crear-arriendo" element={<CreateLeasePage />} />
      </Routes>
    </div>
  );
}
