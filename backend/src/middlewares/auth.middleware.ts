import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { HttpError } from "../utils/http.js";

export type AuthRequest = Request & {
  user?: {
    id: string;
    email: string;
  };
};

export function requireAuth(req: AuthRequest, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const queryToken = typeof req.query.token === "string" ? req.query.token : "";

  if (!header?.startsWith("Bearer ") && !queryToken) {
    return next(new HttpError(401, "Token no enviado"));
  }

  try {
    const token = header?.startsWith("Bearer ") ? header.replace("Bearer ", "") : queryToken;
    const payload = jwt.verify(token, env.JWT_SECRET) as { id: string; email: string };
    req.user = { id: payload.id, email: payload.email };
    return next();
  } catch {
    return next(new HttpError(401, "Token invÃ¡lido"));
  }
}
