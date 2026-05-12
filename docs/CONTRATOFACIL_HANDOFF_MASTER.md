# ContratoFácil — Documento Maestro de Continuidad

## 1. Identidad del proyecto
- Nombre: ContratoFácil
- Ruta local: C:\ContratoFacil
- Repositorio: https://github.com/GodinesCrazy/ContratoFacil.git
- Mercado inicial: Chile
- Vertical inicial: contratos de arriendo
- Cliente inicial: propietarios, corredores independientes, pequeñas inmobiliarias y usuarios que necesitan contratos rápidos
- Tipo de producto: SaaS documental legal, no estudio jurídico

## 2. Concepto del producto
ContratoFácil permite crear contratos mediante formularios guiados, generar PDF, guardar historial, pagar por descarga o plan, y en fases futuras integrar firma electrónica, IA y gestión de arriendos.

## 3. Advertencia legal obligatoria
ContratoFácil entrega plantillas y asistencia documental. No reemplaza asesoría legal profesional. Para casos complejos o disputas, se recomienda consultar a un abogado.

## 4. Problema que resuelve
- Modelos de internet poco confiables.
- Errores editando Word.
- Falta de historial.
- PDF poco profesional.
- Falta de control de vencimientos.
- Falta de trazabilidad.

## 5. MVP definido
Primera versión:
- Landing.
- Registro/login.
- Dashboard.
- Crear contrato de arriendo habitacional.
- Vista previa.
- PDF con marca de agua.
- Pago simulado o real según avance.
- PDF limpio.
- Historial documental.

## 6. Documentos iniciales
Fase inicial:
- Contrato de arriendo habitacional.
- Acta de entrega de inmueble.
- Inventario de inmueble.
- Anexo de modificación de contrato.
- Carta de aviso de término de arriendo.

*Nota: Auditoría pendiente de implementación real en el código frontend/backend de los documentos listados.*

## 7. Stack técnico
- Frontend: React 18, Vite, TypeScript, React Router DOM (VERIFICADO)
- Backend: Node.js, Express, TypeScript, Zod, PDFKit, Bcryptjs, JWT, Nodemailer (VERIFICADO)
- Base de datos: PostgreSQL (VERIFICADO según schema)
- ORM: Prisma (VERIFICADO)
- PDF: PDFKit (VERIFICADO según package.json)
- Auth: JWT + Bcryptjs (VERIFICADO)
- Pagos: PENDIENTE (Variable PAYMENT_PROVIDER="mock" encontrada, no verificado en código)
- IA: PENDIENTE (Modelo AiRequestLog existe, variable OPENAI_API_KEY presente, no verificado uso real)
- Deploy: Vercel (frontend), Railway / Docker (backend) (VERIFICADO)

## 8. Arquitectura del repositorio
```text
C:\ContratoFacil
├── .github/
├── _auditoria/
├── backend/
│   ├── dist/
│   ├── node_modules/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   ├── tests/
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   ├── railway.json
│   └── tsconfig.json
├── docs/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
├── package.json
├── README.md
└── vercel.json
```

## 9. Backend
- Framework: Express + Node.js
- Entry points: `src/server.ts`
- Rutas / Middlewares / Servicios / Módulos: PENDIENTE revisión exhaustiva, fallos de compilación actuales por Prisma.
- Prisma: Configurado con PostgreSQL. `prisma generate` falla por BOM encoding en package.json.
- Healthcheck: `/health` configurado en `railway.json`.
- Variables: Definidas en `.env.example`.
- Scripts: `dev`, `build`, `start`, `lint`, `prisma:generate`, `prisma:migrate`, `prisma:deploy`, `seed`.

## 10. Frontend
- Framework: React + Vite.
- Rutas: React Router DOM configurado.
- Páginas / Componentes / Servicios API: PENDIENTE.
- Variables: `VITE_API_BASE_URL`.
- Scripts: `dev`, `build`, `preview`, `lint`.

## 11. Base de datos
Modelos verificados en `schema.prisma`:
- User
- DocumentTemplate
- Document
- Clause
- Payment
- Reminder
- AiRequestLog
- EmailLog

## 12. PDF
Utiliza `pdfkit` según `backend/package.json`.

## 13. Pagos
PENDIENTE. Simulación preparada (`PAYMENT_PROVIDER="mock"`). El modelo de base de datos (`Payment`) existe.

## 14. IA
PENDIENTE integración real. Existe el modelo `AiRequestLog` y la variable `OPENAI_API_KEY`. Regla: IA controlada, no asesoría legal definitiva.

## 15. Deploy
- Vercel: Configurado para frontend en `vercel.json` apuntando a `frontend/dist` y rewrites hacia Railway.
- Railway: Configurado para backend en `railway.json` usando `Dockerfile`.
- Variables requeridas: Referirse a `.env.example`.
- GitHub Actions: PENDIENTE (carpeta `.github/workflows` existe pero vacía u oculta).
- Healthcheck: Endpoint `/health` documentado en Vercel y Railway.

## 16. Scripts
Comandos de root `package.json`:
- `npm run dev`: Inicia backend.
- `npm run dev:backend` / `npm run dev:frontend`
- `npm run build`: Construye backend y frontend.
- `npm run build:backend` / `npm run build:frontend`
- `npm run lint`
- `npm run prisma:generate` / `npm run prisma:migrate`
- `npm run seed`

## 17. Último avance exitoso
- Fecha/hora de auditoría: 2026-05-12T04:54Z
- Comando ejecutado: `npm install`, `npm run prisma:generate`, `npm run build`.
- Resultado: Dependencias instaladas. `prisma:generate` falla, lo que causa falla en el `build`.
- Qué quedó funcionando: Estructura, modelos de Prisma, scripts configurados.
- Qué no se validó: Funcionalidad del código fuente, inicio de servidores.

## 18. Reglas obligatorias para futuras IA/programadores
- No inventar.
- No modificar código funcionando sin necesidad.
- No romper estructura.
- No cambiar remoto GitHub.
- No tocar .env reales.
- No eliminar carpetas.
- No mezclar ContratoFácil con Ivan Reseller u otros proyectos.
- Documentar cada cambio.
- Antes de corregir, explicar causa raíz.
- Si hay duda, preguntar.

## 19. Roadmap
Fase 1 MVP.
Fase 2 Pack Arriendo Seguro.
Fase 3 SaaS mensual.
Fase 4 Firma electrónica.
Fase 5 Integración con gestión de arriendos.

## 20. Pendientes de decisión
- Corrección del error de BOM en `backend/package.json`.
- Funcionalidad real de pagos.
- Funcionalidad real de IA.
- Contenidos exactos de los documentos iniciales.
