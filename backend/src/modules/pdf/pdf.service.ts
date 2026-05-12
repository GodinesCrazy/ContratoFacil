import PDFDocument from "pdfkit";

function value(data: Record<string, unknown>, key: string, fallback = "____________________") {
  const raw = data[key];
  if (raw === null || raw === undefined || raw === "") return fallback;
  return String(raw);
}

export async function generateLeasePdfBuffer(input: {
  title: string;
  data: Record<string, unknown>;
  watermark: boolean;
}) {
  return new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 56 });
    const chunks: Buffer[] = [];

    doc.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    if (input.watermark) {
      doc.save();
      doc.rotate(-35, { origin: [300, 400] });
      doc.fontSize(48).fillColor("#dddddd").text("VERSIÃ“N DE PRUEBA", 40, 360, { align: "center" });
      doc.restore();
    }

    doc.fillColor("#111111");
    doc.fontSize(18).text("CONTRATO DE ARRIENDO HABITACIONAL", { align: "center" });
    doc.moveDown(1);

    doc.fontSize(10).text(`Documento generado por ContratoFÃ¡cil - ${new Date().toLocaleDateString("es-CL")}`, { align: "center" });
    doc.moveDown(2);

    doc.fontSize(11).text(
      `En Chile, comparecen por una parte don/doÃ±a ${value(input.data, "landlordName")}, RUT ${value(input.data, "landlordRut")}, en adelante el "Arrendador"; y por la otra don/doÃ±a ${value(input.data, "tenantName")}, RUT ${value(input.data, "tenantRut")}, en adelante el "Arrendatario". Las partes acuerdan celebrar el presente contrato de arriendo habitacional conforme a las siguientes clÃ¡usulas:`,
      { align: "justify", lineGap: 4 }
    );

    const clauses = [
      ["PRIMERO: Inmueble arrendado", `El Arrendador da en arriendo al Arrendatario el inmueble ubicado en ${value(input.data, "propertyAddress")}, comuna de ${value(input.data, "propertyCommune")}, regiÃ³n de ${value(input.data, "propertyRegion")}.`],
      ["SEGUNDO: Destino", "El inmueble serÃ¡ destinado exclusivamente a habitaciÃ³n, no pudiendo el Arrendatario darle un destino distinto sin autorizaciÃ³n previa y por escrito del Arrendador."],
      ["TERCERO: Renta", `La renta mensual de arrendamiento serÃ¡ la suma de $${value(input.data, "rentAmount")}, pagadera el dÃ­a ${value(input.data, "paymentDay")} de cada mes mediante ${value(input.data, "paymentMethod")}.`],
      ["CUARTO: GarantÃ­a", `El Arrendatario entrega como garantÃ­a la suma de $${value(input.data, "depositAmount")}, destinada a responder por daÃ±os, deudas o incumplimientos asociados al presente contrato.`],
      ["QUINTO: Plazo", `El contrato comenzarÃ¡ el ${value(input.data, "startDate")} y terminarÃ¡ el ${value(input.data, "endDate")}, salvo renovaciÃ³n o tÃ©rmino anticipado conforme a lo pactado por las partes.`],
      ["SEXTO: Gastos y servicios", `Los gastos comunes y servicios bÃ¡sicos serÃ¡n pagados segÃºn lo indicado por las partes: ${value(input.data, "expensesNotes", "segÃºn corresponda y se acuerde entre las partes")}.`],
      ["SÃ‰PTIMO: Subarriendo", value(input.data, "allowSublease") === "true" ? "El subarriendo requerirÃ¡ autorizaciÃ³n previa y por escrito del Arrendador." : "Queda prohibido al Arrendatario subarrendar, ceder o transferir total o parcialmente el uso del inmueble sin autorizaciÃ³n previa y por escrito del Arrendador."],
      ["OCTAVO: Mascotas", value(input.data, "allowPets") === "true" ? "Se permite la tenencia de mascotas, quedando el Arrendatario obligado a responder por los daÃ±os que estas pudieren causar." : "No se permite la tenencia de mascotas en el inmueble salvo autorizaciÃ³n previa y por escrito del Arrendador."],
      ["NOVENO: Entrega e inventario", "El estado de entrega del inmueble y su inventario podrÃ¡n constar en documento separado firmado por las partes, formando parte integrante del presente contrato."],
      ["DÃ‰CIMO: Advertencia documental", "Este documento ha sido generado mediante ContratoFÃ¡cil como asistencia documental basada en los datos ingresados por el usuario. Para casos complejos se recomienda revisiÃ³n profesional." ]
    ];

    doc.moveDown(1);
    for (const [title, body] of clauses) {
      doc.fontSize(11).font("Helvetica-Bold").text(title);
      doc.font("Helvetica").text(body, { align: "justify", lineGap: 4 });
      doc.moveDown(0.8);
    }

    doc.moveDown(2);
    doc.text("_______________________________", 70, doc.y, { continued: true });
    doc.text("_______________________________", 330, doc.y);
    doc.text("Arrendador", 120, doc.y + 4, { continued: true });
    doc.text("Arrendatario", 385, doc.y + 4);

    doc.end();
  });
}
