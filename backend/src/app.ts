import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { prisma } from "./lib/prisma.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { aiRoutes } from "./modules/ai/ai.routes.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { documentRoutes } from "./modules/documents/documents.routes.js";
import { paymentRoutes } from "./modules/payments/payments.routes.js";
import { templateRoutes } from "./modules/templates/templates.routes.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "healthy", service: "contratofacil-backend", timestamp: new Date().toISOString() });
});

app.get("/ready", async (_req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ready", database: "ok", timestamp: new Date().toISOString() });
  } catch (error) {
    next(error);
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/ai", aiRoutes);

app.use(errorMiddleware);
