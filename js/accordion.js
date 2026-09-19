/**
 * Accordions dos cards de serviço.
 * Delegação de evento (os cards são renderizados dinamicamente).
 * Usa aria-expanded + classe .is-open (a animação é feita via CSS Grid).
 */
(function () {
  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('.service-card__toggle');
    if (!toggle) return;

    var detailsId = toggle.getAttribute('aria-controls');
    var details = document.getElementById(detailsId);
    if (!details) return;

    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    details.classList.toggle('is-open', !isOpen);
  });
})();
