/*
   Cookie Consent Manager – DSGVO-konform
   Speichert Zustimmung in localStorage, feuert Events für Tracking-Pixel
*/

(function () {
  'use strict';

  var STORAGE_KEY = 'nfz_consent';
  var consent = readConsent();

  // Wenn noch keine Entscheidung → Banner zeigen
  if (consent === null) {
    showBanner();
  } else {
    applyConsent(consent);
  }

  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(obj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    } catch (e) { /* ignore */ }
  }

  function applyConsent(obj) {
    // Google Fonts nur laden wenn Marketing consented
    if (obj.marketing) {
      loadGoogleFonts();
    }
    // Event feuern für Tracking-Pixel (Meta / LinkedIn)
    window.dispatchEvent(new CustomEvent('consent:ready', { detail: obj }));
  }

  function loadGoogleFonts() {
    if (document.getElementById('gf-preconnect')) return; // schon geladen
    var pre1 = document.createElement('link');
    pre1.rel = 'preconnect';
    pre1.href = 'https://fonts.googleapis.com';
    pre1.id = 'gf-preconnect';
    var pre2 = document.createElement('link');
    pre2.rel = 'preconnect';
    pre2.href = 'https://fonts.gstatic.com';
    pre2.crossOrigin = 'anonymous';
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(pre1);
    document.head.appendChild(pre2);
    document.head.appendChild(link);
  }

  function showBanner() {
    var overlay = document.createElement('div');
    overlay.className = 'cc-overlay';
    overlay.innerHTML =
      '<div class="cc-banner">' +
        '<div class="cc-banner__title">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>' +
          'Datenschutz-Einstellungen' +
        '</div>' +
        '<p class="cc-banner__text">' +
          'Wir nutzen Cookies, um diese Website bereitzustellen und ihre Reichweite zu messen. ' +
          'Notwendige Cookies sind immer aktiv. Marketing &amp; Analytics nur mit Ihrer Zustimmung. ' +
          'Details: <a href="datenschutz.html">Datenschutzerklärung</a> | <a href="impressum.html">Impressum</a>' +
        '</p>' +
        '<div class="cc-banner__options">' +
          '<div class="cc-option">' +
            '<div class="cc-option__toggle">' +
              '<input type="checkbox" id="cc-essential" checked disabled>' +
              '<span class="cc-option__slider"></span>' +
            '</div>' +
            '<div>' +
              '<div class="cc-option__label">Notwendig</div>' +
              '<div class="cc-option__desc">Technisch erforderlich (Session, Sicherheit)</div>' +
            '</div>' +
          '</div>' +
          '<div class="cc-option">' +
            '<div class="cc-option__toggle">' +
              '<input type="checkbox" id="cc-marketing">' +
              '<span class="cc-option__slider"></span>' +
            '</div>' +
            '<div>' +
              '<div class="cc-option__label">Marketing &amp; Analytics</div>' +
              '<div class="cc-option__desc">Meta-Pixel, LinkedIn Insight, Google Fonts</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="cc-banner__actions">' +
          '<button class="cc-btn cc-btn--accept" id="cc-accept-all">Alle akzeptieren</button>' +
          '<button class="cc-btn cc-btn--save" id="cc-save">Auswahl speichern</button>' +
          '<button class="cc-btn cc-btn--essential" id="cc-essential-only">Nur notwendige</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    var marketingCheck = document.getElementById('cc-marketing');

    function decide(marketing) {
      overlay.remove();
      var obj = { marketing: marketing, timestamp: Date.now() };
      saveConsent(obj);
      applyConsent(obj);
    }

    document.getElementById('cc-accept-all').addEventListener('click', function () {
      decide(true);
    });

    document.getElementById('cc-save').addEventListener('click', function () {
      decide(marketingCheck.checked);
    });

    document.getElementById('cc-essential-only').addEventListener('click', function () {
      decide(false);
    });
  }

})();
