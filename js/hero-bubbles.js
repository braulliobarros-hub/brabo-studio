/**
 * Bolhas do Hero ("Bubbles FX" do Figma).
 * Posições e tamanhos são os do design (frame de 390px): [x, y, tamanho].
 * Ficam decorativas (aria-hidden) e a animação some com prefers-reduced-motion (CSS).
 */
(function () {
  var container = document.getElementById('heroBubbles');
  if (!container) return;

  var BASE_WIDTH = 390;
  var BUBBLES = [
    [28, 40, 22],
    [300, 70, 34],
    [340, 180, 16],
    [60, 160, 12],
    [230, 230, 26],
    [20, 260, 18],
    [350, 300, 20],
    [150, 30, 14]
  ];

  BUBBLES.forEach(function (b, i) {
    var el = document.createElement('span');
    el.className = 'hero__bubble';
    el.style.left = (b[0] / BASE_WIDTH * 100) + '%';
    el.style.top = b[1] + 'px';
    el.style.width = b[2] + 'px';
    el.style.height = b[2] + 'px';
    el.style.animationDelay = (-(i * 1.1)) + 's';
    el.style.animationDuration = (8 + (i % 3)) + 's';
    container.appendChild(el);
  });
})();
