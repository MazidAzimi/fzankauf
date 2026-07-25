/* ============================================================
   NFZ ANKAUF – JavaScript
   Mobile Nav, Form Validation, Scroll Reveal, Nav Styling
   ============================================================ */

/* Signalisiert dem CSS, dass JS aktiv ist. Erst dann werden Reveal-Elemente
   ausgeblendet (Progressive Enhancement) – ohne JS bleibt alles sichtbar. */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile Nav Toggle ----
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      var isOpen = navLinks.classList.contains('open');
      toggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-label', 'Menü öffnen');
      });
    });
  }

  // ---- Nav: Fahrzeuge-Dropdown ----
  var dropdown = document.getElementById('navDropdown');
  var dropdownToggle = document.getElementById('navDropdownToggle');

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Klick außerhalb schließt das Dropdown
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Escape schließt das Dropdown
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Nav: Scrolled State ----
  var nav = document.getElementById('nav');
  var mobileCta = document.getElementById('mobileCta');
  if (nav) {
    var scrollThreshold = 60;
    var ticking = false;

    function updateNav() {
      if (window.pageYOffset > scrollThreshold) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      // Sticky-Mobil-CTA nach etwas Scrollen einblenden
      if (mobileCta) {
        if (window.pageYOffset > 500) {
          mobileCta.classList.add('is-visible');
        } else {
          mobileCta.classList.remove('is-visible');
        }
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    });

    // Initial check
    updateNav();
  }

  // ---- Scroll Reveal (Intersection Observer) ----
  var revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal-stagger')) {
              entry.target.classList.add('reveal-stagger--visible');
            }
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('reveal--visible');
            }
            // Once revealed, stop observing (keep it visible)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else if (revealElements.length > 0) {
    // Fallback: show everything immediately
    revealElements.forEach(function (el) {
      if (el.classList.contains('reveal-stagger')) {
        el.classList.add('reveal-stagger--visible');
      }
      if (el.classList.contains('reveal')) {
        el.classList.add('reveal--visible');
      }
    });
  }

  // ---- Trust-Zahlen hochzaehlen (Vertrauen = Zahlen) ----
  var statNums = document.querySelectorAll('.warum__num');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (statNums.length > 0) {
    statNums.forEach(function (el) {
      var raw = el.textContent.trim();
      var digits = raw.replace(/\D/g, '');
      if (!digits) return;
      el.setAttribute('data-count', digits);
      el.dataset.suffix = raw.replace(/[\d.]/g, '');   // z. B. "+" oder "%"
      el.dataset.grouped = raw.indexOf('.') !== -1 ? '1' : '';
    });

    var countables = document.querySelectorAll('.warum__num[data-count]');

    function fmtNum(n, grouped) {
      return grouped ? n.toLocaleString('de-DE') : String(n);
    }

    function runCount(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var grouped = el.dataset.grouped === '1';
      var suffix = el.dataset.suffix || '';
      if (reduceMotion || !('requestAnimationFrame' in window)) {
        el.textContent = fmtNum(target, grouped) + suffix;
        el.classList.add('is-done');
        return;
      }
      el.classList.add('is-counting');
      var duration = 1400;
      var start = performance.now();
      function tick(now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 4);            // easeOutQuart – ruhiger Auslauf
        el.textContent = fmtNum(Math.round(target * eased), grouped) + suffix;
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = fmtNum(target, grouped) + suffix;
          el.classList.remove('is-counting');
          el.classList.add('is-done');
        }
      }
      requestAnimationFrame(tick);
    }

    if (countables.length > 0 && 'IntersectionObserver' in window) {
      var statObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      countables.forEach(function (el) { statObserver.observe(el); });
    } else {
      countables.forEach(runCount);
    }
  }

  // ---- Form Submission ----
  var form = document.getElementById('ankaufForm');

  if (form) {
    var emailEl = document.getElementById('email');
    var telEl = document.getElementById('telefon');
    var hintEl = document.querySelector('.form__hint');
    var hintOriginal = hintEl ? hintEl.innerHTML : '';

    function clearHintError() {
      if (hintEl) {
        hintEl.classList.remove('form__hint--error');
        hintEl.innerHTML = hintOriginal;
      }
    }
    [emailEl, telEl].forEach(function (el) {
      if (el) el.addEventListener('input', clearHintError);
    });

    form.addEventListener('submit', function (e) {
      // Mindestens ein Kontaktweg (E-Mail oder Telefon)
      if (emailEl && telEl && !emailEl.value.trim() && !telEl.value.trim()) {
        e.preventDefault();
        if (hintEl) {
          hintEl.textContent = 'Bitte E-Mail oder Telefon angeben – mindestens ein Kontaktweg.';
          hintEl.classList.add('form__hint--error');
        }
        emailEl.focus();
        return;
      }
      // Datei-Größe prüfen
      var fileInput = document.getElementById('fotos');
      if (fileInput && fileInput.files.length > 0) {
        var maxSize = 10 * 1024 * 1024; // 10 MB
        for (var i = 0; i < fileInput.files.length; i++) {
          if (fileInput.files[i].size > maxSize) {
            e.preventDefault();
            alert('Datei "' + fileInput.files[i].name + '" ist zu groß. Maximal 10 MB pro Datei.');
            return;
          }
        }
      }
    });
  }

  // ---- Smooth scroll offset for fixed nav ----
  if (nav) {
    var navHeight = nav.offsetHeight;
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 24;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

});
