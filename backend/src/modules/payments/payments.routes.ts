import { DocumentStatus, PaymentStatus } from "@prisma/client";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../../lib/prisma.js";
import { requireAuth, type AuthRequest } from "../../middlewares/auth.middleware.js";

export const paymentRoutes = Router();

paymentRoutes.use(requireAuth);

const checkoutSchema = z.object({
  documentId: z.string().optional(),
  amount: z.number().int().positive().default(2990),
  currency: z.string().default("CLP")
});

paymentRoutes.post("/checkout", async (req: AuthRequest, res, next) => {
  try {
    const input = checkoutSchema.parse(req.body);
    const payment = await prisma.payment.create({
      data: {
        userId: req.user!.id,
        documentId: input.documentId,
        provider: "mock",
        amount: input.amount,
        currency: input.currency,
        status: PaymentStatus.PENDING
      }
    });

    res.status(201).json({
      payment,
      checkoutUrl: `/mock-checkout/${payment.id}`,
      message: "Checkout simulado. Integrar MercadoPago, Flow o Webpay en fase posterior."
    });
  } catch (error) {
    next(error);
  }
});

paymentRoutes.post("/:id/mock-approve", async (req: AuthRequest, res, next) => {
  try {
    const payment = await prisma.payment.update({
      where: { id: req.params.id },
      data: { status: PaymentStatus.APPROVED, providerPaymentId: `mock_${Date.now()}` }
    });

    if (payment.documentId) {
      await prisma.document.update({
        where: { id: payment.documentId },
        data: { status: DocumentStatus.PAID, paidAt: new Date(), watermark: false }
      });
    }

    res.json({ payment });
  } catch (error) {
    next(error);
  }
});
