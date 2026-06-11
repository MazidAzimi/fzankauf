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
  if (nav) {
    var scrollThreshold = 60;
    var ticking = false;

    function updateNav() {
      if (window.pageYOffset > scrollThreshold) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
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
    form.addEventListener('submit', function (e) {
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
