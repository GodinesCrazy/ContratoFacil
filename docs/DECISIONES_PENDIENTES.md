# Decisiones Pendientes (Para Iván)

1. **Corrección Crítica de BOM**: ¿Autorizas modificar `backend/package.json` para quitar el carácter invisible que está rompiendo Prisma y la compilación?
2. **Pasarela de Pagos**: La variable de entorno marca `PAYMENT_PROVIDER="mock"`. ¿Qué pasarela real se utilizará en producción para el mercado chileno (Flow, Transbank, Stripe, MercadoPago)?
3. **Proveedor de Emails**: Las variables para SMTP están vacías en `.env.example`. ¿Se utilizará Resend, SendGrid o AWS SES?
4. **Firma Electrónica**: En la fase 4, ¿se tiene en mente un proveedor en específico que deba tenerse en cuenta desde ahora a nivel de arquitectura?
