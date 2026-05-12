import { FormEvent, useState } from "react";
import { api } from "../services/api";

type CreatedDocument = {
  document: { id: string; title: string; status: string };
};

const initialForm = {
  landlordName: "",
  landlordRut: "",
  tenantName: "",
  tenantRut: "",
  propertyAddress: "",
  propertyCommune: "",
  propertyRegion: "",
  rentAmount: "",
  paymentDay: "5",
  paymentMethod: "transferencia bancaria",
  depositAmount: "",
  startDate: "",
  endDate: "",
  expensesNotes: "",
  allowPets: "false",
  allowSublease: "false"
};

export function CreateLeasePage() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [documentId, setDocumentId] = useState("");

  function updateField(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      const result = await api<CreatedDocument>("/api/documents", {
        method: "POST",
        body: JSON.stringify({
          templateSlug: "contrato-arriendo-habitacional",
          title: `Contrato arriendo - ${form.propertyAddress || "nuevo inmueble"}`,
          dataJson: form
        })
      });
      setDocumentId(result.document.id);
      setMessage("Documento creado correctamente. Ya puedes simular pago o descargar PDF con marca de agua.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear contrato");
    }
  }

  async function mockPay() {
    if (!documentId) return;
    await api(`/api/documents/${documentId}/mock-pay`, { method: "POST" });
    setMessage("Pago simulado aprobado. El PDF se descargarÃ¡ sin marca de agua.");
  }

  function downloadPdf() {
    if (!documentId) return;
    const token = localStorage.getItem("contratofacil_token");
    window.open(`/api/documents/${documentId}/pdf?token=${token || ""}`, "_blank");
  }

  return (
    <main className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Generador</p>
          <h1>Contrato de arriendo habitacional</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card form grid two">
        <label>Nombre arrendador<input value={form.landlordName} onChange={(e) => updateField("landlordName", e.target.value)} /></label>
        <label>RUT arrendador<input value={form.landlordRut} onChange={(e) => updateField("landlordRut", e.target.value)} /></label>
        <label>Nombre arrendatario<input value={form.tenantName} onChange={(e) => updateField("tenantName", e.target.value)} /></label>
        <label>RUT arrendatario<input value={form.tenantRut} onChange={(e) => updateField("tenantRut", e.target.value)} /></label>
        <label>DirecciÃ³n inmueble<input value={form.propertyAddress} onChange={(e) => updateField("propertyAddress", e.target.value)} /></label>
        <label>Comuna<input value={form.propertyCommune} onChange={(e) => updateField("propertyCommune", e.target.value)} /></label>
        <label>RegiÃ³n<input value={form.propertyRegion} onChange={(e) => updateField("propertyRegion", e.target.value)} /></label>
        <label>Renta mensual<input value={form.rentAmount} onChange={(e) => updateField("rentAmount", e.target.value)} /></label>
        <label>DÃ­a de pago<input value={form.paymentDay} onChange={(e) => updateField("paymentDay", e.target.value)} /></label>
        <label>Forma de pago<input value={form.paymentMethod} onChange={(e) => updateField("paymentMethod", e.target.value)} /></label>
        <label>GarantÃ­a<input value={form.depositAmount} onChange={(e) => updateField("depositAmount", e.target.value)} /></label>
        <label>Fecha inicio<input type="date" value={form.startDate} onChange={(e) => updateField("startDate", e.target.value)} /></label>
        <label>Fecha tÃ©rmino<input type="date" value={form.endDate} onChange={(e) => updateField("endDate", e.target.value)} /></label>
        <label>Notas gastos<input value={form.expensesNotes} onChange={(e) => updateField("expensesNotes", e.target.value)} /></label>
        <label>Permite mascotas<select value={form.allowPets} onChange={(e) => updateField("allowPets", e.target.value)}><option value="false">No</option><option value="true">SÃ­</option></select></label>
        <label>Permite subarriendo<select value={form.allowSublease} onChange={(e) => updateField("allowSublease", e.target.value)}><option value="false">No</option><option value="true">SÃ­</option></select></label>

        <div className="full actions">
          <button className="button primary" type="submit">Guardar contrato</button>
          <button className="button secondary" type="button" disabled={!documentId} onClick={mockPay}>Simular pago</button>
          <button className="button secondary" type="button" disabled={!documentId} onClick={downloadPdf}>Descargar PDF</button>
        </div>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      <p className="legal-note">
        ContratoFÃ¡cil entrega asistencia documental. Para casos complejos, revisa el documento con un abogado.
      </p>
    </main>
  );
}
