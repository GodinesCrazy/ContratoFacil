import { DocumentStatus, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../../utils/http.js";
import { generateLeasePdfBuffer } from "../pdf/pdf.service.js";

export async function createDocument(userId: string, input: { templateSlug: string; title: string; dataJson: unknown }) {
  const template = await prisma.documentTemplate.findUnique({ where: { slug: input.templateSlug } });

  if (!template) {
    throw new HttpError(404, "Plantilla no encontrada");
  }

  return prisma.document.create({
    data: {
      userId,
      templateId: template.id,
      title: input.title,
      dataJson: input.dataJson as Prisma.InputJsonValue,
      status: DocumentStatus.DRAFT
    }
  });
}

export async function listDocuments(userId: string) {
  return prisma.document.findMany({
    where: { userId },
    include: { template: { select: { name: true, slug: true, category: true, version: true } } },
    orderBy: { updatedAt: "desc" }
  });
}

export async function getDocument(userId: string, documentId: string) {
  const document = await prisma.document.findFirst({
    where: { id: documentId, userId },
    include: { template: true }
  });

  if (!document) {
    throw new HttpError(404, "Documento no encontrado");
  }

  return document;
}

export async function updateDocument(userId: string, documentId: string, dataJson: unknown) {
  await getDocument(userId, documentId);

  return prisma.document.update({
    where: { id: documentId },
    data: {
      dataJson: dataJson as Prisma.InputJsonValue,
      status: DocumentStatus.DRAFT
    }
  });
}

export async function markDocumentAsPaid(userId: string, documentId: string) {
  await getDocument(userId, documentId);

  return prisma.document.update({
    where: { id: documentId },
    data: {
      status: DocumentStatus.PAID,
      paidAt: new Date(),
      watermark: false
    }
  });
}

export async function duplicateDocument(userId: string, documentId: string) {
  const source = await getDocument(userId, documentId);

  return prisma.document.create({
    data: {
      userId,
      templateId: source.templateId,
      title: `${source.title} - copia`,
      dataJson: source.dataJson as Prisma.InputJsonValue,
      status: DocumentStatus.DRAFT
    }
  });
}

export async function generateDocumentPdf(userId: string, documentId: string) {
  const document = await getDocument(userId, documentId);
  const buffer = await generateLeasePdfBuffer({
    title: document.title,
    data: document.dataJson as Record<string, unknown>,
    watermark: document.watermark
  });

  await prisma.document.update({
    where: { id: documentId },
    data: {
      status: DocumentStatus.GENERATED,
      htmlSnapshot: JSON.stringify(document.dataJson),
      pdfUrl: null
    }
  });

  return buffer;
}
