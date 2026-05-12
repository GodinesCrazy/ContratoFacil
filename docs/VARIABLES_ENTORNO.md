# Variables de Entorno Documentadas

## Backend (`backend/.env.example`)
| Variable | Propósito | Estado |
|---|---|---|
| `NODE_ENV` | Define el entorno (ej: development, production). | VERIFICADO |
| `PORT` | Puerto de escucha del backend (ej: 8080). | VERIFICADO |
| `DATABASE_URL` | String de conexión de PostgreSQL. | VERIFICADO |
| `JWT_SECRET` | Secreto para firmar tokens JWT. | VERIFICADO |
| `FRONTEND_URL` | URL del frontend para CORS. | VERIFICADO |
| `EMAIL_FROM` | Remitente para correos salientes. | VERIFICADO |
| `SMTP_HOST` | Host para correos transaccionales. | VERIFICADO |
| `SMTP_PORT` | Puerto SMTP. | VERIFICADO |
| `SMTP_USER` | Usuario SMTP. | VERIFICADO |
| `SMTP_PASS` | Contraseña SMTP. | VERIFICADO |
| `OPENAI_API_KEY` | Key para integraciones de IA (futuras). | VERIFICADO |
| `PAYMENT_PROVIDER` | Proveedor de pagos (ej: mock). | VERIFICADO |

## Frontend (`frontend/.env.example`)
| Variable | Propósito | Estado |
|---|---|---|
| `VITE_API_BASE_URL` | URL base del API del backend. | VERIFICADO |

## Faltantes
- Si se integrará Flow, Transbank o Stripe en un futuro, faltarán las llaves correspondientes.
