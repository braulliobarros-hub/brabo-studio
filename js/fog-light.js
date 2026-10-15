/**
 * Farol de milha: luz de LED que segue o mouse ou anda com o scroll.
 * - Mouse: a luz vai atrás do cursor com um leve atraso (suave).
 * - Scroll / toque: a luz passeia pela tela conforme a página rola.
 * Acende quando tem movimento e apaga suave depois de ~1,2s parado.
 */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var OFF_DELAY = 1200;   // tempo parado até começar a apagar
  var FADE_OUT = 1500;    // tempo da transição de apagar (casa com o CSS)
  var EASE = 0.12;        // quanto menor, mais "atrasada" e suave a luz

  var wrap = document.createElement('div');
  wrap.className = 'fog-light';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.innerHTML =
    '<div class="fog-light__led">' +
      '<span class="fog-light__wash"></span>' +
      '<span class="fog-light__halo"></span>' +
      '<span class="fog-light__rays"></span>' +
      '<span class="fog-light__rays fog-light__rays--diag"></span>' +
      '<span class="fog-light__bloom"></span>' +
    '</div>';
  document.body.appendChild(wrap);
  var led = wrap.firstChild;

  var vw = window.innerWidth;
  var vh = window.innerHeight;
  var target = { x: vw * 0.7, y: vh * 0.4 };
  var pos = { x: target.x, y: target.y };

  var offTimer = null;
  var stopTimer = null;
  var running = false;

  function scrollTarget() {
    var s = window.scrollY || 0;
    target.x = vw * (0.5 + 0.34 * Math.sin(s / 420));
    target.y = vh * (0.42 + 0.22 * Math.sin(s / 700 + 1));
  }

  function frame() {
    pos.x += (target.x - pos.x) * EASE;
    pos.y += (target.y - pos.y) * EASE;
    led.style.transform = 'translate3d(' + pos.x.toFixed(1) + 'px,' + pos.y.toFixed(1) + 'px,0)';
    if (running) requestAnimationFrame(frame);
  }

  function wake() {
    wrap.classList.add('is-on');
    clearTimeout(offTimer);
    clearTimeout(stopTimer);
    if (!running) {
      running = true;
      requestAnimationFrame(frame);
    }
    offTimer = setTimeout(function () {
      wrap.classList.remove('is-on');
      // só para o loop depois que terminou de apagar
      stopTimer = setTimeout(function () { running = false; }, FADE_OUT);
    }, OFF_DELAY);
  }

  var opts = { passive: true };

  window.addEventListener('mousemove', function (e) {
    target.x = e.clientX;
    target.y = e.clientY;
    wake();
  }, opts);

  window.addEventListener('scroll', function () {
    scrollTarget();
    wake();
  }, opts);

  window.addEventListener('resize', function () {
    vw = window.innerWidth;
    vh = window.innerHeight;
  }, opts);
})();
