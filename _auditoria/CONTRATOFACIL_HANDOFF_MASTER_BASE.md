# ContratoFácil — Documento Maestro de Continuidad

> Estado de este archivo: **base documental inicial**.  
> Debe ser completado con una auditoría real del repositorio local `C:\ContratoFacil`.  
> Cualquier dato no verificado en código debe marcarse como **PENDIENTE**, **DEFINIDO POR PRODUCTO** o **REQUIERE DECISIÓN DEL DUEÑO**.

---

## 1. Identidad del proyecto

| Campo | Valor |
|---|---|
| Nombre comercial | ContratoFácil |
| Nombre técnico sugerido | contratofacil |
| Ruta local | `C:\ContratoFacil` |
| Repositorio GitHub | `https://github.com/GodinesCrazy/ContratoFacil.git` |
| Mercado inicial | Chile |
| Vertical inicial | Contratos de arriendo |
| Cliente inicial | Propietarios, corredores independientes, pequeñas inmobiliarias, pymes y personas que necesitan contratos rápidos |
| Tipo de producto | SaaS documental legal |
| Posicionamiento | Asistente documental inteligente para crear, completar, guardar y descargar contratos frecuentes en Chile |
| Regla de marca | No presentarse como “abogado online” |

---

## 2. Concepto del producto

ContratoFácil es una plataforma SaaS chilena para crear documentos legales frecuentes mediante formularios guiados. El usuario selecciona un documento, completa datos paso a paso, revisa una vista previa, genera un PDF profesional, paga por descarga o plan y guarda el documento en su cuenta.

El producto comienza con contratos de arriendo habitacional para Chile, pero debe quedar preparado para crecer hacia documentos inmobiliarios, laborales, comerciales y documentos para pymes.

El concepto original contempla generación de PDF, historial documental, envío por correo, pagos, plantillas administrables, motor de cláusulas, IA asistida y firma electrónica futura.

---

## 3. Advertencia legal obligatoria

ContratoFácil debe mantener una advertencia visible en landing, generador, vista previa, PDF y términos de uso:

> ContratoFácil entrega plantillas y asistencia documental. No reemplaza la asesoría legal profesional. Para casos complejos, conflictos o dudas jurídicas específicas, se recomienda consultar a un abogado.

Reglas:
- No prometer que el contrato asegura ganar un juicio.
- No afirmar que la IA reemplaza revisión jurídica.
- No entregar asesoría legal definitiva automatizada.
- No generar documentos complejos sin advertencia.
- Toda cláusula sugerida por IA debe quedar marcada como sugerencia revisable.

---

## 4. Problema que resuelve

Usuarios en Chile suelen crear contratos copiando modelos de internet, editando documentos antiguos en Word o reutilizando plantillas sin control. Esto genera errores, documentos mal formateados, omisiones, falta de trazabilidad e inseguridad.

ContratoFácil resuelve:

- Falta de modelos ordenados.
- Pérdida de tiempo redactando.
- Errores al completar datos.
- Documentos poco profesionales.
- Falta de historial.
- Dificultad para enviar, firmar y guardar.
- Falta de control de vencimientos.
- Falta de trazabilidad documental.

---

## 5. MVP definido

Primera versión vendible:

1. Landing pública.
2. Registro/login.
3. Dashboard de documentos.
4. Selector de documento.
5. Formulario guiado para contrato de arriendo habitacional.
6. Vista previa HTML.
7. PDF con marca de agua.
8. Pago por documento o simulación inicial.
9. PDF limpio post-pago.
10. Historial de documentos.

---

## 6. Documentos iniciales

### Fase inicial recomendada

| Documento | Prioridad | Estado |
|---|---:|---|
| Contrato de arriendo habitacional | Alta | PENDIENTE DE AUDITORÍA |
| Acta de entrega de inmueble | Alta | PENDIENTE |
| Inventario de inmueble | Alta | PENDIENTE |
| Anexo de modificación de contrato | Media | PENDIENTE |
| Carta de aviso de término de arriendo | Media | PENDIENTE |

### Fase posterior

| Documento | Prioridad | Estado |
|---|---:|---|
| Contrato de arriendo comercial | Media | PENDIENTE |
| Contrato de prestación de servicios | Media | PENDIENTE |
| Contrato de trabajo básico | Media | PENDIENTE |
| Contrato a honorarios | Media | PENDIENTE |
| Acuerdo de confidencialidad simple | Media | PENDIENTE |

---

## 7. Producto comercial inicial

### Pack Arriendo Seguro

Incluye:

- Contrato de arriendo habitacional.
- Acta de entrega.
- Inventario.
- Carta de término.
- Anexo modificatorio.
- Descarga PDF.
- Historial en cuenta.
- Duplicación de documento.
- Recordatorios futuros.

### Modelo de cobro sugerido

| Producto | Precio sugerido |
|---|---:|
| 1 documento PDF individual | $2.990 a $4.990 CLP |
| Pack 5 documentos | $9.990 a $14.990 CLP |
| Plan básico mensual | $6.990 CLP |
| Plan profesional | $14.990 CLP |
| Plan pyme | $29.990 CLP |
| Firma electrónica integrada | Margen por transacción |
| Revisión por abogado aliado | Comisión por servicio |

---

## 8. Stack técnico definido por producto

> Esta sección debe actualizarse después de auditar el código real.

| Capa | Tecnología definida | Estado |
|---|---|---|
| Frontend | React + Vite + TypeScript | PENDIENTE DE AUDITORÍA |
| Backend | Node.js + Express + TypeScript | PENDIENTE DE AUDITORÍA |
| Base de datos | PostgreSQL | PENDIENTE DE AUDITORÍA |
| ORM | Prisma | PENDIENTE DE AUDITORÍA |
| Hosting frontend | Vercel | PENDIENTE DE CONFIGURACIÓN |
| Hosting backend | Railway | PENDIENTE DE CONFIGURACIÓN |
| PDF | Server-side PDF generation | PENDIENTE DE AUDITORÍA |
| Storage PDF | Cloudflare R2 / S3 / Supabase Storage | REQUIERE DECISIÓN |
| Auth | Email/password + Google futuro | PENDIENTE DE AUDITORÍA |
| Pagos | MercadoPago / Flow / Webpay | REQUIERE DECISIÓN |
| IA | OpenAI API | PENDIENTE FUTURO |
| Firma electrónica | Integración fase posterior | PENDIENTE FUTURO |

---

## 9. Arquitectura esperada del repositorio

```txt
C:\ContratoFacil
├── backend
├── frontend
├── docs
├── .github
├── package.json
├── README.md
├── vercel.json
└── .gitignore
```

La auditoría debe completar el árbol real excluyendo:

- `node_modules`
- `.git`
- `dist`
- `build`
- `coverage`
- temporales

---

## 10. Backend

### Objetivo

Backend API para autenticación, documentos, plantillas, generación de PDF, pagos, IA y envío de correos.

### Módulos esperados

| Módulo | Estado |
|---|---|
| auth | PENDIENTE DE AUDITORÍA |
| users | PENDIENTE DE AUDITORÍA |
| templates | PENDIENTE DE AUDITORÍA |
| documents | PENDIENTE DE AUDITORÍA |
| clauses | PENDIENTE DE AUDITORÍA |
| pdf | PENDIENTE DE AUDITORÍA |
| payments | PENDIENTE DE AUDITORÍA |
| ai | PENDIENTE DE AUDITORÍA |
| email | PENDIENTE DE AUDITORÍA |

### Endpoints esperados

```txt
GET  /health
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me

GET  /api/templates
GET  /api/templates/:slug

POST /api/documents
GET  /api/documents
GET  /api/documents/:id
PUT  /api/documents/:id
POST /api/documents/:id/duplicate
POST /api/documents/:id/preview
POST /api/documents/:id/generate-pdf
POST /api/documents/:id/send-email

POST /api/payments/checkout
POST /api/payments/webhook
GET  /api/payments/:id/status

POST /api/ai/explain-clause
POST /api/ai/suggest-clause
POST /api/ai/check-document
POST /api/ai/summarize-document
```

Todo endpoint debe marcarse como VERIFICADO solo si existe en código.

---

## 11. Frontend

### Objetivo

Interfaz web para landing, login, dashboard, creación de documentos, vista previa, checkout y descarga.

### Pantallas esperadas

| Pantalla | Estado |
|---|---|
| Landing pública | PENDIENTE DE AUDITORÍA |
| Login | PENDIENTE DE AUDITORÍA |
| Registro | PENDIENTE DE AUDITORÍA |
| Dashboard | PENDIENTE DE AUDITORÍA |
| Selector de documento | PENDIENTE DE AUDITORÍA |
| Formulario guiado | PENDIENTE DE AUDITORÍA |
| Vista previa | PENDIENTE DE AUDITORÍA |
| Checkout | PENDIENTE DE AUDITORÍA |
| Documento generado | PENDIENTE DE AUDITORÍA |

---

## 12. Base de datos

### Modelos esperados

| Modelo | Estado |
|---|---|
| User | PENDIENTE DE AUDITORÍA |
| DocumentTemplate | PENDIENTE DE AUDITORÍA |
| Document | PENDIENTE DE AUDITORÍA |
| DocumentField | PENDIENTE DE AUDITORÍA |
| Clause | PENDIENTE DE AUDITORÍA |
| Payment | PENDIENTE DE AUDITORÍA |
| Reminder | PENDIENTE DE AUDITORÍA |
| AiRequestLog | PENDIENTE DE AUDITORÍA |
| EmailLog | PENDIENTE DE AUDITORÍA |

La auditoría debe copiar o resumir el `schema.prisma` real.

---

## 13. PDF

Requisito crítico:

El PDF debe ser formal, limpio y confiable.

Debe incluir:

- Título.
- Identificación clara de partes.
- Cláusulas numeradas.
- Fecha.
- Espacios de firma.
- Pie de página.
- ID interno del documento.
- Marca de agua en versión gratuita.
- Formato sobrio y profesional.

Estado actual: PENDIENTE DE AUDITORÍA.

---

## 14. Pagos

Modelo inicial:

- Crear gratis.
- Previsualizar gratis.
- Pagar para descargar PDF limpio.
- PDF gratis con marca de agua.

Integraciones posibles:
- MercadoPago.
- Flow.
- Webpay.
- Stripe si corresponde.

Estado actual: PENDIENTE DE AUDITORÍA.

---

## 15. IA

Funciones deseadas:

- Explicar cláusulas en lenguaje simple.
- Sugerir cláusulas.
- Detectar campos incompletos.
- Advertir contradicciones básicas.
- Resumir contrato.
- Mejorar redacción.
- Generar cartas asociadas.

Regla:
La IA debe estar controlada y no entregar asesoría legal definitiva.

Estado actual: PENDIENTE DE AUDITORÍA.

---

## 16. Deploy

### Frontend — Vercel

Debe existir o prepararse:

- `vercel.json`
- variables frontend
- build command
- output directory
- rewrite `/api/:path*` hacia backend Railway cuando exista URL real

### Backend — Railway

Debe existir o prepararse:

- `backend/railway.json` o configuración equivalente
- healthcheck `/health`
- start command
- variables backend
- conexión PostgreSQL

### GitHub

Repositorio:

```txt
https://github.com/GodinesCrazy/ContratoFacil.git
```

Estado actual: PENDIENTE DE AUDITORÍA.

---

## 17. Scripts y comandos base

### Instalación

```powershell
cd C:\ContratoFacil
npm install
```

### Prisma

```powershell
npm run prisma:generate
```

### Build

```powershell
npm run build
```

### Desarrollo backend

```powershell
npm run dev:backend
```

### Desarrollo frontend

```powershell
npm run dev:frontend
```

### Git

```powershell
git status
git remote -v
git add .
git commit -m "Initial ContratoFacil scaffold"
git push -u origin main
```

La auditoría debe validar qué scripts existen realmente en `package.json`.

---

## 18. Último avance exitoso

Estado pendiente de completar por auditoría real.

Debe indicar:

| Campo | Resultado |
|---|---|
| Fecha/hora | PENDIENTE |
| npm install | PENDIENTE |
| prisma:generate | PENDIENTE |
| build | PENDIENTE |
| git remote | PENDIENTE |
| push GitHub | PENDIENTE |
| frontend local | PENDIENTE |
| backend local | PENDIENTE |

---

## 19. Reglas obligatorias para futuras IA/programadores

1. No inventar funcionalidades.
2. No afirmar que algo funciona si no fue ejecutado o verificado.
3. No modificar archivos que ya funcionan sin causa justificada.
4. No cambiar nombres de carpetas, paquetes, rutas, endpoints o modelos sin autorización.
5. No eliminar archivos ni carpetas.
6. No tocar `.env` reales, solo `.env.example`.
7. No subir secretos a GitHub.
8. No mezclar este proyecto con Ivan Reseller, CanalMedico u otros repositorios.
9. No transformar el producto en asesoría legal automática.
10. Mantener disclaimers legales visibles.
11. Documentar cada cambio en `/docs`.
12. Antes de corregir errores, explicar causa raíz.
13. Si hay duda, preguntar a Iván.
14. Todo cambio debe dejar el proyecto compilando.
15. Todo módulo nuevo debe incluir documentación mínima.
16. El PDF debe tratarse como componente crítico de confianza.
17. El proyecto debe mantenerse preparado para Railway y Vercel.
18. El repositorio remoto correcto es `https://github.com/GodinesCrazy/ContratoFacil.git`.

---

## 20. Roadmap técnico

### Fase 1 — MVP funcional

- Landing.
- Registro/login.
- Dashboard.
- Contrato de arriendo habitacional.
- Vista previa.
- PDF con marca de agua.
- Pago/simulación.
- PDF limpio.
- Historial.

### Fase 2 — Pack Arriendo Seguro

- Acta de entrega.
- Inventario.
- Carta de término.
- Anexo.
- Duplicar documento.
- Enviar por email.
- Recordatorios.

### Fase 3 — SaaS mensual

- Planes.
- Límites por plan.
- Plantillas premium.
- Panel para propietarios.
- Panel para corredores.
- Métricas de uso.

### Fase 4 — Firma electrónica

- Proveedor de firma.
- Flujo de firma para ambas partes.
- Trazabilidad.
- Certificados.
- Estado de firma.

### Fase 5 — Integración inmobiliaria

- Inmuebles.
- Arrendatarios.
- Pagos mensuales.
- Mora.
- Cartas automáticas.
- Historial legal/documental.
- Portal propietario.

---

## 21. Decisiones pendientes

| Decisión | Estado |
|---|---|
| Dominio final | REQUIERE DECISIÓN |
| Pasarela de pago inicial | REQUIERE DECISIÓN |
| Proveedor de firma electrónica | REQUIERE DECISIÓN |
| Storage definitivo para PDFs | REQUIERE DECISIÓN |
| Si habrá revisión por abogados aliados | REQUIERE DECISIÓN |
| Plantillas validadas por abogado | REQUIERE DECISIÓN |
| Precios finales | REQUIERE DECISIÓN |
| Diseño visual final | REQUIERE DECISIÓN |
| Política de privacidad y términos | REQUIERE DECISIÓN |
| Estrategia de lanzamiento | REQUIERE DECISIÓN |

---

## 22. Archivos que toda IA futura debe revisar antes de tocar código

1. `README.md`
2. `docs/CONTRATOFACIL_HANDOFF_MASTER.md`
3. `docs/AUDITORIA_ESTADO_ACTUAL.md`
4. `docs/ULTIMO_AVANCE_EXITOSO.md`
5. `docs/REGLAS_OBLIGATORIAS_DESARROLLO.md`
6. `docs/SCRIPTS_Y_COMANDOS.md`
7. `docs/VARIABLES_ENTORNO.md`
8. `backend/prisma/schema.prisma`
9. `package.json`
10. `backend/package.json`
11. `frontend/package.json`
12. `vercel.json`
13. `backend/railway.json` si existe

---

## 23. Criterio de avance exitoso

Un avance solo se considera exitoso si:

1. El proyecto compila.
2. No se rompió el build anterior.
3. Se documentaron los cambios.
4. No se tocaron secretos.
5. No se cambió la estructura sin autorización.
6. Git muestra cambios esperados.
7. Se puede explicar qué se hizo, por qué y dónde.
8. El próximo agente puede continuar sin adivinar.

---

## 24. Criterio GO / NO-GO para producción

### GO

- Auth funcional.
- Plantillas iniciales revisadas.
- PDF profesional.
- Pago funcional.
- Dashboard estable.
- Seguridad básica.
- Variables configuradas.
- Deploy Railway/Vercel operativo.
- Disclaimers legales visibles.
- Política de privacidad y términos publicados.

### NO-GO

- PDF mal formateado.
- Contratos con datos cruzados.
- Errores en campos obligatorios.
- Pagos no trazables.
- Falta de disclaimers.
- Secretos en GitHub.
- Build inestable.
- Railway/Vercel sin healthcheck.
- Promesas de asesoría legal automática.

---

## 25. Nota final para continuidad

ContratoFácil debe construirse primero como un SaaS pequeño, confiable y vendible para contratos de arriendo. El objetivo no es lanzar con cien documentos, sino validar que usuarios reales paguen por generar documentos útiles, profesionales y ordenados.

La expansión natural será convertir ContratoFácil en el módulo documental de un sistema mayor de administración de arriendos para pequeños propietarios en Chile.
