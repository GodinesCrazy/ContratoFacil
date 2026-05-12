import { Router } from "express";
import { z } from "zod";
import { requireAuth, type AuthRequest } from "../../middlewares/auth.middleware.js";
import { prisma } from "../../lib/prisma.js";

export const aiRoutes = Router();

aiRoutes.use(requireAuth);

const explainSchema = z.object({
  clause: z.string().min(5)
});

aiRoutes.post("/explain-clause", async (req: AuthRequest, res, next) => {
  try {
    const input = explainSchema.parse(req.body);
    const output = `ExplicaciÃ³n simple: esta clÃ¡usula regula una obligaciÃ³n o condiciÃ³n entre las partes. Debe revisarse segÃºn el caso concreto. Texto recibido: ${input.clause}`;

    await prisma.aiRequestLog.create({
      data: {
        userId: req.user!.id,
        action: "explain-clause",
        inputJson: input,
        output
      }
    });

    res.json({
      output,
      disclaimer: "Esta explicaciÃ³n es informativa y no reemplaza asesorÃ­a legal profesional."
    });
  } catch (error) {
    next(error);
  }
});

aiRoutes.post("/check-document", async (req: AuthRequest, res, next) => {
  try {
    await prisma.aiRequestLog.create({
      data: {
        userId: req.user!.id,
        action: "check-document",
        inputJson: req.body,
        output: "ValidaciÃ³n bÃ¡sica ejecutada"
      }
    });

    res.json({
      warnings: [
        "ValidaciÃ³n MVP: verifica que nombre, RUT, direcciÃ³n, renta, garantÃ­a y fechas estÃ©n completos.",
        "Para casos complejos, solicita revisiÃ³n profesional."
      ]
    });
  } catch (error) {
    next(error);
  }
});
