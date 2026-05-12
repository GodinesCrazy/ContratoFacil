import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.documentTemplate.upsert({
    where: { slug: "contrato-arriendo-habitacional" },
    update: {},
    create: {
      name: "Contrato de arriendo habitacional",
      slug: "contrato-arriendo-habitacional",
      category: "Arriendos",
      version: 1,
      schemaJson: {
        steps: [
          "Arrendador",
          "Arrendatario",
          "Inmueble",
          "Condiciones econÃ³micas",
          "DuraciÃ³n",
          "ClÃ¡usulas opcionales"
        ],
        requiredFields: [
          "landlordName",
          "landlordRut",
          "tenantName",
          "tenantRut",
          "propertyAddress",
          "rentAmount",
          "startDate",
          "endDate"
        ]
      },
      htmlTemplate: "contrato-arriendo-habitacional-v1"
    }
  });

  console.log("Seed completado: plantilla contrato de arriendo habitacional.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
