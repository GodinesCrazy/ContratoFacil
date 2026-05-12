# DEPLOYMENT GUIDE â€” ContratoFÃ¡cil

## GitHub

Repositorio objetivo:

```txt
https://github.com/GodinesCrazy/ContratoFacil.git
```

Comandos sugeridos:

```powershell
cd C:\ContratoFacil
git add .
git commit -m "Initial ContratoFacil scaffold"
git branch -M main
git push -u origin main
```

## Railway â€” Backend

Crear un proyecto Railway conectado al repositorio GitHub.

ConfiguraciÃ³n recomendada:

- Root directory: `backend`
- Build: Dockerfile o Nixpacks segÃºn preferencia
- Healthcheck path: `/health`
- Start command: `node dist/server.js`

Variables necesarias:

```txt
NODE_ENV=production
PORT=8080
DATABASE_URL=postgresql://...
JWT_SECRET=change_me
FRONTEND_URL=https://TU-FRONTEND.vercel.app
```

Para producciÃ³n con Prisma:

```bash
npx prisma migrate deploy
```

## Vercel â€” Frontend

Conectar el mismo repositorio en Vercel.

ConfiguraciÃ³n si se usa el `vercel.json` raÃ­z:

- Install command: `npm install`
- Build command: `npm run build:frontend`
- Output directory: `frontend/dist`

Editar `vercel.json` y reemplazar:

```txt
https://TU-BACKEND-RAILWAY.up.railway.app
```

por la URL real del backend Railway.

## VerificaciÃ³n

Backend:

```txt
https://TU-BACKEND-RAILWAY.up.railway.app/health
https://TU-BACKEND-RAILWAY.up.railway.app/ready
```

Frontend:

```txt
https://TU-FRONTEND.vercel.app
```
