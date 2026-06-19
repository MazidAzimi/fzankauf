/* ============================================================
   NFZ ANKAUF – JavaScript
   Mobile Nav, Form Validation, Scroll Reveal, Nav Styling
   ============================================================ */

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
