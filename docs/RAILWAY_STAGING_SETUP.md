# Guía de Configuración de Railway Staging - ContratoFácil

Esta guía detalla los pasos manuales para desplegar el backend de ContratoFácil en Railway con una base de datos PostgreSQL.

## Requisitos Previos
1. Cuenta en [Railway.app](https://railway.app).
2. Repositorio de GitHub: `https://github.com/GodinesCrazy/ContratoFacil.git`.

## Pasos en el Dashboard de Railway

### 1. Crear el Proyecto
1. Entrar a [Railway Dashboard](https://railway.app/dashboard).
2. Botón **+ New Project**.
3. Elegir **Deploy from GitHub repo**.
4. Seleccionar el repositorio `GodinesCrazy/ContratoFacil`.

### 2. Configurar el Servicio Backend
Railway detectará el monorepo. Es posible que intente desplegar la raíz o pida configuración.
1. Ir a los **Settings** del servicio recién creado.
2. En **General** -> **Root Directory**, establecer: `backend`.
3. Validar que el **Build Command** use el Dockerfile (`railway.json` ya lo especifica).

### 3. Agregar Base de Datos
1. Botón **+ New** (arriba a la derecha o en el canvas).
2. Elegir **Database** -> **Add PostgreSQL**.
3. Railway creará un servicio de base de datos independiente.

### 4. Configurar Variables de Entorno (Variables)
Ir a la pestaña **Variables** del servicio `backend` y agregar:

| Variable | Valor / Referencia |
|---|---|
| `NODE_ENV` | `production` |
| `PORT` | `8080` |
| `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` (Elegir de la lista de sugerencias) |
| `JWT_SECRET` | *(Generar un string largo y aleatorio)* |
| `FRONTEND_URL` | *(Dejar pendiente hasta tener la URL de Vercel)* |
| `EMAIL_FROM` | *(Pendiente)* |
| `SMTP_HOST` | *(Pendiente)* |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | *(Pendiente)* |
| `SMTP_PASS` | *(Pendiente)* |
| `OPENAI_API_KEY` | *(Pendiente)* |
| `PAYMENT_PROVIDER` | `mock` |

**IMPORTANTE:** Usa `${{Postgres.DATABASE_URL}}`. Esto vincula automáticamente el backend con la base de datos de Railway sin tener que copiar y pegar el string manualmente.

### 5. Validar Despliegue
Una vez que el build termine (Railway ejecutará automáticamente el Dockerfile):
1. Verificar la URL pública asignada por Railway (ej: `contratofacil-production.up.railway.app`).
2. Probar los endpoints:
   - `https://TU-URL.up.railway.app/health` -> Debe retornar `{ "status": "healthy", ... }`.
   - `https://TU-URL.up.railway.app/ready` -> Debe retornar `{ "status": "ready", ... }` si la DB conectó.

## Gestión de Prisma
El `Dockerfile` está configurado para ejecutar `npx prisma migrate deploy` antes de iniciar el servidor. Esto significa que cada vez que hagas un deploy, Railway aplicará las migraciones pendientes automáticamente.

## Acciones de Iván (Dueño)
- [ ] Realizar `railway login` en la terminal local si se desea usar la CLI.
- [ ] Seguir los pasos del Dashboard descritos arriba.
- [ ] Generar el `JWT_SECRET` y guardarlo en un lugar seguro (o dejarlo solo en Railway).
