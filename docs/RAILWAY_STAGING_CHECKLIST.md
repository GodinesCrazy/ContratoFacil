# Checklist de Validación Railway Staging - ContratoFácil

Usa este checklist para verificar que el entorno de staging en Railway está correctamente configurado y operativo.

- [ ] **Proyecto Railway:** Creado con nombre "ContratoFacil".
- [ ] **Conexión GitHub:** Repositorio `GodinesCrazy/ContratoFacil` vinculado.
- [ ] **Servicio Backend:** Identificado y configurado.
- [ ] **Root Directory:** Configurado como `backend`.
- [ ] **PostgreSQL Railway:** Agregado como servicio de base de datos.
- [ ] **Variable DATABASE_URL:** Referenciada dinámicamente (`${{Postgres.DATABASE_URL}}`).
- [ ] **Variable NODE_ENV:** Seteada en `production`.
- [ ] **Variable JWT_SECRET:** Configurada con un valor seguro.
- [ ] **Build Status:** Build de Docker exitoso en Railway.
- [ ] **Prisma Migrations:** `prisma migrate deploy` ejecutado sin errores (ver logs de despliegue).
- [ ] **Healthcheck /health:** Retorna HTTP 200 y status "healthy".
- [ ] **Readiness /ready:** Retorna HTTP 200 y status "ready" (indica conexión a DB exitosa).
- [ ] **Logs:** Sin errores de conexión a base de datos o de tipos.
- [ ] **Dominio Público:** URL de Railway copiada para configurar `vercel.json` y variables de frontend.
