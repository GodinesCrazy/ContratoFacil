const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export function getToken() {
  return localStorage.getItem("contratofacil_token");
}

export function setToken(token: string) {
  localStorage.setItem("contratofacil_token", token);
}

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Error desconocido" }));
    throw new Error(error.error || "Error de solicitud");
  }

  return response.json();
}
