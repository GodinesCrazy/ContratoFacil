import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, setToken } from "../services/api";

type AuthResponse = {
  token: string;
  user: { id: string; name: string; email: string };
};

export function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("Usuario ContratoFÃ¡cil");
  const [email, setEmail] = useState("demo@contratofacil.cl");
  const [password, setPassword] = useState("contratofacil123");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const path = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const payload = mode === "login" ? { email, password } : { name, email, password };
      const result = await api<AuthResponse>(path, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      setToken(result.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al ingresar");
    }
  }

  return (
    <main className="page narrow">
      <div className="card">
        <h1>{mode === "login" ? "Ingresar" : "Crear cuenta"}</h1>
        <form onSubmit={handleSubmit} className="form">
          {mode === "register" && (
            <label>
              Nombre
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          )}
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            ContraseÃ±a
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="button primary" type="submit">
            {mode === "login" ? "Ingresar" : "Registrarme"}
          </button>
        </form>
        <button className="link-button" onClick={() => setMode(mode === "login" ? "register" : "login")}>
          {mode === "login" ? "Crear nueva cuenta" : "Ya tengo cuenta"}
        </button>
      </div>
    </main>
  );
}
