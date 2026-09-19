/**
 * Aplica o link de agendamento (config.js) em todo elemento com [data-booking].
 * Abre em nova aba, com rel seguro. Cards de serviço passam o data-service-id
 * pra buildBookingUrl() (hoje sem efeito, ver SUPPORTS_SERVICE_PARAM).
 */
(function () {
  document.querySelectorAll('[data-booking]').forEach(function (link) {
    var serviceId = link.getAttribute('data-service-id');
    link.setAttribute('href', buildBookingUrl(serviceId));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
})();
