# Checklist de Validación Railway Staging - ContratoFácil

Usa este checklist para verificar que el entorno de staging en Railway está correctamente configurado y operativo.

- [x] **Proyecto Railway:** Creado con nombre "ContratoFacil".
- [x] **Conexión GitHub:** Repositorio `GodinesCrazy/ContratoFacil` vinculado.
- [x] **Servicio Backend:** Identificado y configurado.
- [x] **Root Directory:** Configurado como `backend`.
- [x] **PostgreSQL Railway:** Agregado como servicio de base de datos.
- [x] **Variable DATABASE_URL:** Referenciada dinámicamente (`${{Postgres.DATABASE_URL}}`).
- [x] **Variable NODE_ENV:** Seteada en `production`.
- [x] **Variable JWT_SECRET:** Configurada con un valor seguro.
- [x] **Build Status:** Build de Docker exitoso en Railway.
- [x] **Prisma Migrations:** `prisma migrate deploy` ejecutado sin errores (ver logs de despliegue).
- [x] **Healthcheck /health:** Retorna HTTP 200 y status "healthy".
- [x] **Readiness /ready:** Retorna HTTP 200 y status "ready" (indica conexión a DB exitosa).
- [x] **Logs:** Sin errores de conexión a base de datos o de tipos.
- [x] **Dominio Público:** URL de Railway copiada para configurar `vercel.json` y variables de frontend. (`https://contratofacil-backend-production.up.railway.app`)
