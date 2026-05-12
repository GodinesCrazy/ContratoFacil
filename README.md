# ContratoFÃ¡cil

ContratoFÃ¡cil es un SaaS chileno para crear contratos y documentos legales frecuentes mediante formularios guiados, generaciÃ³n de PDF profesional, historial documental y futura firma electrÃ³nica.

## Enfoque inicial

Vertical inicial: contratos de arriendo para Chile.

MVP inicial:

- Landing pÃºblica.
- Registro/login.
- Dashboard.
- Generador de contrato de arriendo habitacional.
- Vista previa.
- GeneraciÃ³n de PDF.
- SimulaciÃ³n de pago.
- Historial de documentos.

## Stack

- Frontend: React + Vite + TypeScript.
- Backend: Node.js + Express + TypeScript.
- Base de datos: PostgreSQL.
- ORM: Prisma.
- Deploy frontend: Vercel.
- Deploy backend: Railway.

## InstalaciÃ³n local

```powershell
cd C:\ContratoFacil
npm install
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env
npm run prisma:generate
npm run dev:backend
```

En otra terminal:

```powershell
cd C:\ContratoFacil
npm run dev:frontend
```

## Git remoto

```powershell
git remote -v
git add .
git commit -m "Initial ContratoFacil scaffold"
git push -u origin main
```

## Despliegue

Revisar `docs/DEPLOYMENT_GUIDE.md`.
