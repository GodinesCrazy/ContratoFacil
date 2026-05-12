import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

type DocumentItem = {
  id: string;
  title: string;
  status: string;
  updatedAt: string;
  template: { name: string };
};

export function DashboardPage() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api<{ documents: DocumentItem[] }>("/api/documents")
      .then((result) => setDocuments(result.documents))
      .catch((err) => setError(err instanceof Error ? err.message : "Error al cargar documentos"));
  }, []);

  return (
    <main className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Panel</p>
          <h1>Mis documentos</h1>
        </div>
        <Link className="button primary" to="/crear-arriendo">Crear contrato</Link>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="card">
        {documents.length === 0 ? (
          <p>AÃºn no tienes documentos. Crea tu primer contrato de arriendo.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Documento</th>
                <th>Plantilla</th>
                <th>Estado</th>
                <th>Actualizado</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.title}</td>
                  <td>{doc.template.name}</td>
                  <td>{doc.status}</td>
                  <td>{new Date(doc.updatedAt).toLocaleDateString("es-CL")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
