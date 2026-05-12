# Scripts y Comandos — ContratoFácil

## Comandos NPM (desde la raíz `C:\ContratoFacil`)

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias en todo el monorepo. |
| `npm run dev` | Inicia el entorno de desarrollo para el backend. |
| `npm run dev:backend` | Inicia el entorno de desarrollo para el backend. |
| `npm run dev:frontend` | Inicia el entorno de desarrollo para el frontend. |
| `npm run build` | Compila ambos espacios de trabajo (frontend y backend). |
| `npm run build:backend` | Compila solo el backend usando TypeScript (`tsc`). |
| `npm run build:frontend` | Compila el frontend usando Vite. |
| `npm run lint` | Ejecuta el linter (TypeScript type check) en frontend y backend. |
| `npm run prisma:generate` | Genera el Prisma Client para el backend. |
| `npm run prisma:migrate` | Aplica las migraciones de base de datos locales. |
| `npm run seed` | Ejecuta el script de seed de Prisma. |

## Comandos Git
- Ver estado: `git status`
- Ver remoto: `git remote -v`
- Crear commit: `git add .` -> `git commit -m "Mensaje"` -> `git push`

## Docker / Railway
- Dockerfile se encuentra en `backend/Dockerfile`. Construye la imagen para producción.
- Railway se guía por `backend/railway.json`.

## Vercel
- Se despliega desde la raíz. La configuración está en `vercel.json` para redirigir tráfico `/api/*` al backend de Railway.
