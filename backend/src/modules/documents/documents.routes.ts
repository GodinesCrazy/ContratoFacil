import { Router } from "express";
import { z } from "zod";
import { requireAuth, type AuthRequest } from "../../middlewares/auth.middleware.js";
import {
  createDocument,
  duplicateDocument,
  generateDocumentPdf,
  getDocument,
  listDocuments,
  markDocumentAsPaid,
  updateDocument
} from "./documents.service.js";

export const documentRoutes = Router();

documentRoutes.use(requireAuth);

const createDocumentSchema = z.object({
  templateSlug: z.string().min(1),
  title: z.string().min(3),
  dataJson: z.record(z.unknown())
});

const updateDocumentSchema = z.object({
  dataJson: z.record(z.unknown())
});

documentRoutes.get("/", async (req: AuthRequest, res, next) => {
  try {
    const documents = await listDocuments(req.user!.id);
    res.json({ documents });
  } catch (error) {
    next(error);
  }
});

documentRoutes.post("/", async (req: AuthRequest, res, next) => {
  try {
    const input = createDocumentSchema.parse(req.body);
    const document = await createDocument(req.user!.id, input);
    res.status(201).json({ document });
  } catch (error) {
    next(error);
  }
});

documentRoutes.get("/:id", async (req: AuthRequest, res, next) => {
  try {
    const document = await getDocument(req.user!.id, req.params.id);
    res.json({ document });
  } catch (error) {
    next(error);
  }
});

documentRoutes.put("/:id", async (req: AuthRequest, res, next) => {
  try {
    const input = updateDocumentSchema.parse(req.body);
    const document = await updateDocument(req.user!.id, req.params.id, input.dataJson);
    res.json({ document });
  } catch (error) {
    next(error);
  }
});

documentRoutes.post("/:id/duplicate", async (req: AuthRequest, res, next) => {
  try {
    const document = await duplicateDocument(req.user!.id, req.params.id);
    res.status(201).json({ document });
  } catch (error) {
    next(error);
  }
});

documentRoutes.post("/:id/mock-pay", async (req: AuthRequest, res, next) => {
  try {
    const document = await markDocumentAsPaid(req.user!.id, req.params.id);
    res.json({ document });
  } catch (error) {
    next(error);
  }
});

documentRoutes.get("/:id/pdf", async (req: AuthRequest, res, next) => {
  try {
    const buffer = await generateDocumentPdf(req.user!.id, req.params.id);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="contratofacil-${req.params.id}.pdf"`);
    res.send(buffer);
  } catch (error) {
    next(error);
  }
});
