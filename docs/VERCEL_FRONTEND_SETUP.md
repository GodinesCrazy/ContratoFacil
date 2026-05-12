# Configuración de Frontend en Vercel — ContratoFácil

Este documento detalla los pasos para desplegar el frontend de ContratoFácil en Vercel, conectándolo al backend que ya reside en Railway.

## Requisitos Previos
- Backend Railway operativo: `https://contratofacil-backend-production.up.railway.app`
- Acceso al repositorio GitHub: `GodinesCrazy/ContratoFacil`

## Pasos para el Despliegue

### 1. Importar Proyecto en Vercel
1. Ve a [Vercel Dashboard](https://vercel.com/dashboard).
2. Haz clic en **"New Project"**.
3. Selecciona el repositorio `GodinesCrazy/ContratoFacil`.

### 2. Configuración del Proyecto
Vercel debería detectar la estructura del monorepo. Configura los siguientes parámetros:

- **Framework Preset:** Vite
- **Root Directory:** `./` (Mantener la raíz para que use `vercel.json`)

### 3. Build and Output Settings
Asegúrate de que los comandos coincidan con lo definido en `vercel.json`:

- **Install Command:** `npm install`
- **Build Command:** `npm run build:frontend`
- **Output Directory:** `frontend/dist`

### 4. Variables de Entorno
Agrega la siguiente variable de entorno para que el frontend sepa dónde está el API:

| Key | Value |
|---|---|
| `VITE_API_BASE_URL` | `https://contratofacil-backend-production.up.railway.app` |

*Nota: Aunque `vercel.json` tiene rewrites, configurar esta variable asegura que las llamadas directas también funcionen correctamente.*

### 5. Despliegue
1. Haz clic en **"Deploy"**.
2. Espera a que finalice el build.
3. Vercel te proporcionará una URL (ej: `https://contratofacil-frontend.vercel.app`).

## Verificación Post-Despliegue
Una vez desplegado, verifica:
1. **Landing Page:** Visible en la URL de Vercel.
2. **Navegación:** Prueba entrar a `/login`.
3. **Conexión API:** Intenta loguearte (o revisa la consola de red para ver si las llamadas a `/api/...` devuelven 200/401 en lugar de 404).

## Actualización en Railway
Una vez que tengas la URL final de Vercel, **debes actualizar** la variable `FRONTEND_URL` en el servicio de Railway del Backend para permitir CORS desde el nuevo dominio.
