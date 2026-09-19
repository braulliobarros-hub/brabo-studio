/**
 * Barra fixa "AGENDAR AGORA".
 * - Escondida enquanto o Hero está na tela.
 * - Aparece depois que o Hero sai por cima.
 * - Some quando o botão do CTA final está visível (pra não duplicar).
 * Usa IntersectionObserver (sem listener de scroll).
 */
(function () {
  var bar = document.getElementById('stickyCta');
  var hero = document.getElementById('inicio');
  var finalBtn = document.getElementById('ctaFinalBtn');
  if (!bar || !hero) return;

  var heroGone = false;
  var finalInView = false;

  function update() {
    var show = heroGone && !finalInView;
    bar.classList.toggle('is-visible', show);
    document.body.classList.toggle('has-sticky-cta', heroGone);
    // Fora da tela = fora da ordem de tab também
    if (show) {
      bar.removeAttribute('inert');
    } else {
      bar.setAttribute('inert', '');
    }
  }
  bar.setAttribute('inert', '');

  if (!('IntersectionObserver' in window)) return;

  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // "saiu por cima" = não está na tela e o topo já passou do topo da janela
      heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    });
  }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 }).observe(hero); // 72px = navbar (64) + folga

  if (finalBtn) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        finalInView = entry.isIntersecting;
        update();
      });
    }, { rootMargin: '0px 0px -' + 90 + 'px 0px', threshold: 0 }).observe(finalBtn);
  }
})();
