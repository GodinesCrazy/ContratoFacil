import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">SaaS documental para Chile</p>
          <h1>Crea contratos chilenos en minutos.</h1>
          <p>
            ContratoFÃ¡cil te guÃ­a paso a paso para completar documentos frecuentes,
            generar PDF profesional y mantener todo ordenado en tu cuenta.
          </p>
          <div className="actions">
            <Link className="button primary" to="/crear-arriendo">Crear contrato de arriendo</Link>
            <Link className="button secondary" to="/dashboard">Ver dashboard</Link>
          </div>
        </div>
        <div className="card hero-card">
          <h2>Pack Arriendo Seguro</h2>
          <ul>
            <li>Contrato de arriendo habitacional.</li>
            <li>Acta de entrega.</li>
            <li>Inventario.</li>
            <li>Carta de tÃ©rmino.</li>
            <li>Anexo modificatorio.</li>
          </ul>
        </div>
      </section>

      <section className="grid three">
        <article className="card">
          <h3>Formulario guiado</h3>
          <p>Completa datos del arrendador, arrendatario, inmueble, renta, garantÃ­a y fechas.</p>
        </article>
        <article className="card">
          <h3>PDF profesional</h3>
          <p>Genera un documento formal con clÃ¡usulas numeradas y espacios de firma.</p>
        </article>
        <article className="card">
          <h3>Historial</h3>
          <p>Guarda, duplica y administra documentos desde tu panel.</p>
        </article>
      </section>

      <p className="legal-note">
        ContratoFÃ¡cil entrega plantillas y asistencia documental. No reemplaza asesorÃ­a legal profesional.
      </p>
    </main>
  );
}
