import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(20, "JWT_SECRET debe tener al menos 20 caracteres"),
  FRONTEND_URL: z.string().url().default("http://localhost:5173"),
  EMAIL_FROM: z.string().default("ContratoFÃ¡cil <no-reply@contratofacil.cl>"),
  SMTP_HOST: z.string().optional().default(""),
  SMTP_PORT: z.coerce.number().optional().default(587),
  SMTP_USER: z.string().optional().default(""),
  SMTP_PASS: z.string().optional().default(""),
  OPENAI_API_KEY: z.string().optional().default(""),
  PAYMENT_PROVIDER: z.string().default("mock")
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Variables de entorno invÃ¡lidas", parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
