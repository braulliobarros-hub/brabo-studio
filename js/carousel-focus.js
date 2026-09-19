/**
 * Carrosséis de Avaliações e Galeria: o item mais perto do centro ganha
 * .is-active (nítido + brilho azul leve). Os outros ficam desfocados (CSS).
 * Passive + requestAnimationFrame, e só 3 a 5 itens por carrossel.
 * Tocar num item desfocado leva ele pro centro.
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
        if (item.classList.contains('is-active')) return;
        item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });

    scroller.classList.add('is-ready');
    update();
  });
})();
