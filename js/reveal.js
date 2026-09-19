/**
 * Scroll reveal via IntersectionObserver (opacity + translateY 12px, ~480ms).
 * Sem listener de scroll. Com prefers-reduced-motion tudo aparece direto.
 */
(function () {
  var targets = document.querySelectorAll(
    '.hero__headline, .hero__support, .hero__actions, .hero__tag, ' +
    '.section__header, .services__selector, .service-card, ' +
    '.cta-final__logo, .cta-final__divider, .cta-final__heading, .cta-final__quote, ' +
    '.cta-final__handle, .cta-final__meta'
  );
  if (!targets.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return; // sem .reveal = já visível

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();
