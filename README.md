# Landing Biofert 2026

Landing page de conversión para campañas de **Google Ads**, de la clínica de reproducción asistida **Biofert**.

- **Stack:** HTML5, CSS3 y JavaScript vanilla (sin frameworks ni build).
- **Copy:** fórmula **PASTOR** (Problema · Amplificar · Solución · Transformación/Testimonio · Oferta · Respuesta).
- **Oferta principal:** valoración inicial de fertilidad + seminograma desde **$499 MXN**.
- **Conversión:** botones de WhatsApp con mensaje precargado y disparador de urgencia/escasez.
- **Deploy:** [Vercel](https://vercel.com) → dominio `landingbiofert.com.mx`.

## Estructura

```
landing-biofert-2026/
├── index.html                  # Landing PASTOR
├── politica-privacidad.html    # Aviso de Privacidad (LFPDPPP)
├── terminos-y-condiciones.html # Términos y Condiciones
├── css/styles.css              # Sistema de estilos (paleta de marca + Inter)
├── js/main.js                  # WhatsApp dinámico, FAQ, tracking
├── images/                     # Logos y fotos reales de la clínica
├── robots.txt · sitemap.xml    # SEO
└── vercel.json                 # Config de deploy (cleanUrls, headers, cache)
```

## Cumplimiento Google Ads (salud · continente americano)

- ✅ Aviso de Privacidad y Términos accesibles desde el pie de página.
- ✅ Aviso médico y descargo de garantía de resultados.
- ✅ Identidad del negocio visible (nombre, domicilio, teléfono, correo).
- ✅ Sin afirmaciones médicas engañosas ni garantías de embarazo.
- ✅ Datos estructurados `MedicalClinic` (Schema.org).
- ✅ HTTPS automático vía Vercel · sitio funcional y responsive.

## Configuración

- **Número de WhatsApp:** editar `WA_NUMBER` en [`js/main.js`](js/main.js).
- **Mensajes por CTA:** objeto `MESSAGES` en [`js/main.js`](js/main.js).
- **Tracking:** al hacer clic en WhatsApp se emite `whatsapp_click` a `dataLayer` y evento `contact` a `gtag` (si Google Tag Manager / gtag están cargados). Pega tu snippet de GTM/Google Ads en el `<head>` de `index.html`.

## Desarrollo local

Cualquier servidor estático:

```bash
npx serve .
# o
python -m http.server 8000
```

---
© 2026 Biofert · Clínica de Reproducción Asistida.
