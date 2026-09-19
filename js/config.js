/**
 * Configuração central da landing page.
 *
 * BOOKING_URL: endereço do sistema externo de agendamento.
 * Todos os botões de agendar (AGENDAR MEU HORÁRIO, AGENDAR dos cards,
 * AGENDAR AGORA do CTA final e da barra fixa) usam este único valor.
 * Pra trocar o link, edite só a linha abaixo.
 *
 * SUPPORTS_SERVICE_PARAM: deixe false. Só vire true se o sistema agende-me
 * confirmar que aceita um parâmetro na URL pra identificar o serviço.
 * Quando isso existir, ajuste também o nome do parâmetro em buildBookingUrl().
 */
const BOOKING_URL = 'https://brabostudio.agende-me.com';
const SUPPORTS_SERVICE_PARAM = false;

function buildBookingUrl(serviceId) {
  if (SUPPORTS_SERVICE_PARAM && serviceId) {
    const separator = BOOKING_URL.includes('?') ? '&' : '?';
    return `${BOOKING_URL}${separator}service=${encodeURIComponent(serviceId)}`;
  }
  return BOOKING_URL;
}
