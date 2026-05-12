import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { prisma } from "../../lib/prisma.js";
import { HttpError } from "../../utils/http.js";

export async function registerUser(input: { name: string; email: string; password: string }) {
  const existing = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });

  if (existing) {
    throw new HttpError(409, "Ya existe una cuenta con ese email");
  }

  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email.toLowerCase(),
      passwordHash
    }
  });

  return createSession(user.id, user.email, user.name);
}

export async function loginUser(input: { email: string; password: string }) {
  const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });

  if (!user) {
    throw new HttpError(401, "Credenciales invÃ¡lidas");
  }

  const ok = await bcrypt.compare(input.password, user.passwordHash);

  if (!ok) {
    throw new HttpError(401, "Credenciales invÃ¡lidas");
  }

  return createSession(user.id, user.email, user.name);
}

export async function getCurrentUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true, plan: true, createdAt: true }
  });

  if (!user) {
    throw new HttpError(404, "Usuario no encontrado");
  }

  return user;
}

function createSession(id: string, email: string, name: string) {
  const token = jwt.sign({ id, email }, env.JWT_SECRET, { expiresIn: "7d" });
  return { token, user: { id, email, name } };
}
