/**
 * Carrosséis de Avaliações e Galeria: o item mais perto do centro ganha
 * .is-active (nítido + brilho azul leve). Os outros ficam desfocados (CSS).
 * Passive + requestAnimationFrame, e só 3 a 5 itens por carrossel.
 * Tocar num item desfocado leva ele pro centro.
 * Rolagem automática a cada 3s; pausa quando o usuário toca/passa o mouse.
 */
(function () {
  var scrollers = document.querySelectorAll('.focus-scroller');
  if (!scrollers.length) return;

  scrollers.forEach(function (scroller) {
    var items = Array.prototype.slice.call(scroller.children);
    var ticking = false;

    function update() {
      var box = scroller.getBoundingClientRect();
      var center = box.left + box.width / 2;
      var best = null;
      var bestDist = Infinity;
      items.forEach(function (item) {
        var r = item.getBoundingClientRect();
        var dist = Math.abs(r.left + r.width / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = item;
        }
      });
      items.forEach(function (item) {
        item.classList.toggle('is-active', item === best);
      });
    }

    scroller.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        update();
        ticking = false;
      });
    }, { passive: true });

    window.addEventListener('resize', update);

    items.forEach(function (item) {
      item.addEventListener('click', function () {
        if (item.hasAttribute('data-full')) return; // galeria: o lightbox cuida do toque
      if (item.classList.contains('is-active')) return;
        item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });

    scroller.classList.add('is-ready');
    update();

    // ---- Rolagem automática a cada 3s (só visível e sem o usuário mexendo) ----
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var INTERVAL = 3000;
    var inView = false;
    var holding = false;
    var resumeAt = 0;

    function hold() { holding = true; }
    function release() { holding = false; resumeAt = Date.now() + INTERVAL; }
    scroller.addEventListener('pointerdown', hold, { passive: true });
    scroller.addEventListener('pointerup', release, { passive: true });
    scroller.addEventListener('pointercancel', release, { passive: true });
    scroller.addEventListener('mouseenter', hold);
    scroller.addEventListener('mouseleave', release);
    scroller.addEventListener('focusin', hold);
    scroller.addEventListener('focusout', release);
    scroller.addEventListener('wheel', function () { resumeAt = Date.now() + INTERVAL; }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
      }, { threshold: 0.5 }).observe(scroller);
    } else {
      inView = true;
    }

    setInterval(function () {
      if (!inView || holding || document.hidden || document.querySelector('dialog[open]') || Date.now() < resumeAt) return;
      var idx = items.findIndex(function (i) { return i.classList.contains('is-active'); });
      var next = items[(idx + 1) % items.length];
      var left = next.offsetLeft - (scroller.clientWidth - next.offsetWidth) / 2;
      scroller.scrollTo({ left: left, behavior: 'smooth' });
    }, INTERVAL);
  });
})();
