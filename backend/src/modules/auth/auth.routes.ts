import { Router } from "express";
import { z } from "zod";
import { requireAuth, type AuthRequest } from "../../middlewares/auth.middleware.js";
import { getCurrentUser, loginUser, registerUser } from "./auth.service.js";

export const authRoutes = Router();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

authRoutes.post("/register", async (req, res, next) => {
  try {
    const input = registerSchema.parse(req.body);
    const session = await registerUser(input);
    res.status(201).json(session);
  } catch (error) {
    next(error);
  }
});

authRoutes.post("/login", async (req, res, next) => {
  try {
    const input = loginSchema.parse(req.body);
    const session = await loginUser(input);
    res.json(session);
  } catch (error) {
    next(error);
  }
});

authRoutes.get("/me", requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const user = await getCurrentUser(req.user!.id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});
