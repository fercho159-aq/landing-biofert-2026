/* ==========================================================================
   Biofert · Landing 2026 — main.js
   - Enlaces de WhatsApp con mensaje precargado y contexto de campaña
   - Acordeón de FAQ
   - Utilidades de conversión (dispara evento a dataLayer si existe)
   ========================================================================== */
(function () {
  'use strict';

  // Número oficial de WhatsApp de Biofert (formato internacional, sin signos).
  var WA_NUMBER = '5215530394739';

  // Mensajes por contexto — con disparador de urgencia/escasez.
  var MESSAGES = {
    default:      'Hola Biofert 👋 Vi su promoción de Valoración de fertilidad a $499 y quiero apartar mi lugar antes de que se agote. ¿Me ayudan a agendar?',
    oferta:       'Hola Biofert 👋 Quiero apartar mi lugar para la Valoración inicial + seminograma a $499 (promo de cupo limitado). ¿Qué disponibilidad tienen esta semana?',
    'cta-final':  'Hola Biofert 👋 No quiero dejar pasar otro ciclo sin respuestas. Me interesa agendar mi valoración de fertilidad cuanto antes. ¿Me orientan?',
    flotante:     'Hola Biofert 👋 Tengo dudas sobre la valoración de fertilidad a $499. ¿Me pueden ayudar?',
    'barra-movil':'Hola Biofert 👋 Quiero información para agendar mi valoración de fertilidad a $499. ¿Me apartan un lugar?'
  };

  function buildLink(context) {
    var text = MESSAGES[context] || MESSAGES.default;
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
  }

  // Inicializa todos los botones marcados con [data-wa].
  var waButtons = document.querySelectorAll('[data-wa]');
  Array.prototype.forEach.call(waButtons, function (el) {
    var context = el.getAttribute('data-context') || 'default';
    el.setAttribute('href', buildLink(context));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener nofollow');

    // Registro de conversión (compatible con Google Ads / GTM si están presentes).
    el.addEventListener('click', function () {
      if (window.dataLayer && typeof window.dataLayer.push === 'function') {
        window.dataLayer.push({ event: 'whatsapp_click', wa_context: context });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact', { method: 'whatsapp', context: context });
      }
    });
  });

  // Acordeón de FAQ.
  var faqItems = document.querySelectorAll('.faq-item');
  Array.prototype.forEach.call(faqItems, function (item) {
    var btn = item.querySelector('.faq-q');
    var ans = item.querySelector('.faq-a');
    if (!btn || !ans) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // Cierra los demás.
      Array.prototype.forEach.call(faqItems, function (other) {
        other.classList.remove('open');
        var a = other.querySelector('.faq-a');
        if (a) a.style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // Año dinámico en el footer, si existe el marcador.
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
