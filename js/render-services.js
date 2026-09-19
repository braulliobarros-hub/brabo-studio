/**
 * Renderiza os cards de serviço a partir de SERVICES (services-data.js).
 * Não altera dados, só monta o DOM.
 */
(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderItemsList(items) {
    return (
      '<ul class="service-card__list">' +
      items
        .map(function (item) {
          return (
            '<li class="service-card__item">' +
            '<span class="service-card__item-check" aria-hidden="true">✓</span>' +
            '<span>' + escapeHtml(item) + '</span>' +
            '</li>'
          );
        })
        .join('') +
      '</ul>'
    );
  }

  function renderDetailsInner(service) {
    if (Array.isArray(service.groups)) {
      return service.groups
        .map(function (group) {
          return (
            '<p class="service-card__group-label">' + escapeHtml(group.label) + '</p>' +
            renderItemsList(group.items)
          );
        })
        .join('');
    }
    return renderItemsList(service.items || []);
  }

  function renderCard(service, vehicleKey, index) {
    var detailsId = 'details-' + vehicleKey + '-' + index;
    var toggleId = 'toggle-' + vehicleKey + '-' + index;
    var id = escapeHtml(service.id);

    return (
      '<article class="service-card" data-service-id="' + id + '">' +
        '<div class="service-card__header">' +
          '<h3 class="service-card__name">' + escapeHtml(service.name) + '</h3>' +
          '<span class="service-card__price">' + escapeHtml(service.price) + '</span>' +
        '</div>' +
        '<p class="service-card__summary">' + escapeHtml(service.summary) + '</p>' +
        '<button class="service-card__toggle" id="' + toggleId + '" type="button"' +
          ' aria-expanded="false" aria-controls="' + detailsId + '">' +
          '<span>VER O QUE INCLUI</span>' +
          '<span class="service-card__toggle-icon" aria-hidden="true">+</span>' +
        '</button>' +
        '<div class="service-card__details" id="' + detailsId + '" role="region" aria-labelledby="' + toggleId + '">' +
          '<div class="service-card__details-inner">' +
            renderDetailsInner(service) +
            '<a href="#" class="btn btn--card" data-booking data-service-id="' + id + '">AGENDAR</a>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function renderList(vehicleKey, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var services = SERVICES[vehicleKey] || [];
    container.innerHTML = services
      .map(function (service, index) { return renderCard(service, vehicleKey, index); })
      .join('');
  }

  // ---------- Card "Serviços adicionais e para motos" ----------
  // Accordion igual aos outros cards: reúne extras avulsos que valem
  // tanto pra carro quanto pra moto, por isso fica fora do seletor Carro/Moto.
  function renderPriceItem(item) {
    return `
      <div class="service-card__price-item">
        <span class="service-card__item-check" aria-hidden="true">✓</span>
        <span class="service-card__price-item-label">${escapeHtml(item.label)}</span>
        <span class="service-card__price-item-value">${escapeHtml(item.price)}</span>
      </div>`;
  }

  function renderCategory(category) {
    const description = category.description
      ? `<p class="service-card__category-desc">${escapeHtml(category.description)}</p>`
      : '';
    return `
      <div class="service-card__category">
        <p class="service-card__category-name">${escapeHtml(category.name)}</p>
        ${description}
        ${category.items.map(renderPriceItem).join('')}
      </div>`;
  }

  function renderAdditionalServices(containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof ADDITIONAL_SERVICES === 'undefined') return;
    const data = ADDITIONAL_SERVICES;

    const detailsId = 'details-additional';
    const toggleId = 'toggle-additional';

    container.innerHTML = `
      <article class="service-card service-card--additional" data-service-id="${escapeHtml(data.id)}">
        <div class="service-card__header">
          <h3 class="service-card__name">${escapeHtml(data.title)}</h3>
        </div>
        <p class="service-card__summary">${escapeHtml(data.summary)}</p>
        <button class="service-card__toggle" id="${toggleId}" type="button"
          aria-expanded="false" aria-controls="${detailsId}">
          <span>VER O QUE INCLUI</span>
          <span class="service-card__toggle-icon" aria-hidden="true">+</span>
        </button>
        <div class="service-card__details" id="${detailsId}" role="region" aria-labelledby="${toggleId}">
          <div class="service-card__details-inner">
            <p class="service-card__group-label">BENEFÍCIOS</p>
            ${renderItemsList(data.benefits)}

            <p class="service-card__group-label service-card__group-label--spaced">SERVIÇOS E VALORES</p>
            ${data.categories.map(renderCategory).join('')}

            <p class="service-card__contact-note">${escapeHtml(data.contactNote)}</p>

            <a href="#" class="btn btn--card" data-booking data-service-id="${escapeHtml(data.id)}">
              ${escapeHtml(data.ctaLabel)}
            </a>
          </div>
        </div>
      </article>`;
  }

  renderList('carro', 'listCarro');
  renderList('moto', 'listMoto');
  renderAdditionalServices('additionalServices');
})();
