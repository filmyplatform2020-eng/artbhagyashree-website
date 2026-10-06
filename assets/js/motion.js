/* ==========================================================================
   ART BHAGYASHREE STUDIO — motion layer
   Reference-matched motion using GSAP 3.15.0 + ScrollTrigger.
   Page-load reveals, scroll-triggered section reveals, counter count-up,
   and reduced-motion support. Slider/ticker behavior remains in app.js/CSS.
   ========================================================================== */
(function () {
  'use strict';

  if (!window.gsap) { console.warn('GSAP not loaded — motion disabled'); return; }

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- hero page-load sequence (staggered) ---- */
  function heroReveal() {
    var hero = document.querySelector('.hero-content-wrapper');
    if (!hero) return;
    var items = hero.querySelectorAll('.tag-title, h1, .hero-sub, .hero-actions .primary-button');
    if (!items.length) return;
    var tl = gsap.timeline();
    items.forEach(function (el, i) {
      tl.from(el, {
        opacity: 0,
        y: reduced ? 0 : 20,
        duration: reduced ? 0 : 0.5,
        ease: 'power2.out'
      }, i * 0.1);
    });
    var ticker = document.querySelector('.hero-ticker-wrapper');
    if (ticker) {
      tl.from(ticker, { opacity: 0, duration: reduced ? 0 : 0.5, ease: 'power2.out' }, 0.1);
    }
  }

  /* ---- scroll-triggered section reveals ----
     Reveals are handled ENTIRELY by the CSS `.reveal` class + IntersectionObserver
     in app.js. Previously a gsap.fromTo({opacity:0}) hid section wrappers AFTER the
     first paint — which made already-visible content flash to hidden ("images
     disappear") and left below-fold sections hidden until scrolled. Hiding now
     happens in CSS from the very first paint, so nothing visibly disappears and
     the final state is always visible. */
  function scrollReveals() { /* intentionally a no-op — see note above */ }

  /* ---- counter count-up ---- */
  function counters() {
    var counters = document.querySelectorAll('.counter-title');
    if (!counters.length) return;
    counters.forEach(function (el) {
      var raw = el.textContent.trim();
      var match = raw.match(/([\d.,]+)\s*([kKmM+]*)/);
      if (!match) return;
      var num = parseFloat(match[1].replace(/,/g, ''));
      var suffix = match[2] || '';
      var isM = /m/i.test(suffix);
      var isK = /k/i.test(suffix);
      var target = num;
      var display = function (v) {
        var val = Math.floor(v);
        var out = isM ? (val / 1000).toFixed(1).replace(/\.0$/, '') + 'm'
          : isK ? val + 'K'
          : val.toLocaleString('en-IN');
        if (suffix.indexOf('+') > -1) out += '+';
        el.textContent = out;
      };
      el.textContent = display(0);
      var run = function () {
        if (reduced) { el.textContent = raw; return; }
        gsap.to({ v: 0 }, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: function () { display(this.targets()[0].v); },
          onComplete: function () { el.textContent = raw; }
        });
      };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { if (en.isIntersecting) { run(); io.unobserve(en.target); } });
        }, { threshold: 0.4 });
        io.observe(el);
      } else { run(); }
    });
  }

  function init() {
    heroReveal();
    scrollReveals();
    counters();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.MotionEngine = { init: init };
})();
