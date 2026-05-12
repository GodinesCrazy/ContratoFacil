import type { ErrorRequestHandler } from "express";
import { HttpError } from "../utils/http.js";

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  console.error(error);
  return res.status(500).json({ error: "Error interno del servidor" });
};
