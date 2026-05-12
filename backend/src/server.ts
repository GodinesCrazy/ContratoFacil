import { env } from "./config/env.js";
import { prisma } from "./lib/prisma.js";
import { app } from "./app.js";

const server = app.listen(env.PORT, () => {
  console.log(`ContratoFÃ¡cil backend escuchando en puerto ${env.PORT}`);
});

async function shutdown(signal: string) {
  console.log(`Recibido ${signal}. Cerrando servidor...`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
