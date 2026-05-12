import { Router } from "express";
import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../../utils/http.js";

export const templateRoutes = Router();

templateRoutes.get("/", async (_req, res, next) => {
  try {
    const templates = await prisma.documentTemplate.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "asc" },
      select: { id: true, name: true, slug: true, category: true, version: true }
    });
    res.json({ templates });
  } catch (error) {
    next(error);
  }
});

templateRoutes.get("/:slug", async (req, res, next) => {
  try {
    const template = await prisma.documentTemplate.findUnique({
      where: { slug: req.params.slug },
      include: { clauses: true }
    });

    if (!template || !template.isActive) {
      throw new HttpError(404, "Plantilla no encontrada");
    }

    res.json({ template });
  } catch (error) {
    next(error);
  }
});
