# Checklist de Despliegue Vercel - ContratoFácil

Usa este checklist para asegurar que el frontend está correctamente desplegado y operativo.

- [ ] **Repositorio GitHub:** `GodinesCrazy/ContratoFacil` conectado a Vercel.
- [ ] **Framework:** Vite detectado automáticamente.
- [ ] **Build Command:** Configurado como `npm run build:frontend`.
- [ ] **Output Directory:** Configurado como `frontend/dist`.
- [ ] **Variable VITE_API_BASE_URL:** Configurada con la URL de Railway.
- [ ] **Deploy Status:** "Ready" (Build exitoso en Vercel).
- [ ] **Acceso Landing:** La página principal carga correctamente.
- [ ] **Acceso Login:** La ruta `/login` es accesible.
- [ ] **Rutas Protegidas:** Redirección al login al intentar entrar a `/dashboard` sin token.
- [ ] **Comunicación API:** Las peticiones a `/api` son redirigidas exitosamente a Railway (ver Network tab).
- [ ] **CORS:** La variable `FRONTEND_URL` en Railway ha sido actualizada con el dominio de Vercel (Paso manual final).
- [ ] **URL Final:** Copiada para documentar en el README/Handoff.
