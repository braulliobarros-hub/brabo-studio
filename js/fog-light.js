/**
 * Farol de milha decorativo.
 * Acende quando a pessoa rola a página ou mexe o mouse/dedo
 * e apaga suave depois de ~1,2s sem movimento.
 */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var OFF_DELAY = 1200;

  var wrap = document.createElement('div');
  wrap.className = 'fog-light';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.innerHTML =
    '<div class="fog-light__beam"></div>' +
    '<div class="fog-light__bloom"></div>' +
    '<svg class="fog-light__svg" viewBox="0 0 100 100" xmlns="' + NS + '">' +
      '<defs>' +
        '<linearGradient id="flChrome" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#f2f4f7"/>' +
          '<stop offset="0.35" stop-color="#7d828a"/>' +
          '<stop offset="0.55" stop-color="#d9dde2"/>' +
          '<stop offset="1" stop-color="#3a3d42"/>' +
        '</linearGradient>' +
        '<radialGradient id="flLensOff" cx="0.42" cy="0.38" r="0.7">' +
          '<stop offset="0" stop-color="#3a3f47"/>' +
          '<stop offset="0.6" stop-color="#16181c"/>' +
          '<stop offset="1" stop-color="#0a0b0d"/>' +
        '</radialGradient>' +
        '<radialGradient id="flLensOn" cx="0.5" cy="0.5" r="0.55">' +
          '<stop offset="0" stop-color="#ffffff"/>' +
          '<stop offset="0.35" stop-color="#eaf3ff"/>' +
          '<stop offset="0.75" stop-color="#9cc4ff"/>' +
          '<stop offset="1" stop-color="#3d86ff"/>' +
        '</radialGradient>' +
      '</defs>' +
      // carcaça preta
      '<circle cx="50" cy="50" r="48" fill="#0b0c0e" stroke="#000" stroke-width="1"/>' +
      // aro cromado
      '<circle cx="50" cy="50" r="43" fill="url(#flChrome)"/>' +
      '<circle cx="50" cy="50" r="38" fill="#08090a"/>' +
      // lente apagada
      '<circle cx="50" cy="50" r="36" fill="url(#flLensOff)"/>' +
      // lente acesa (some/aparece)
      '<g class="fog-light__lit">' +
        '<circle cx="50" cy="50" r="36" fill="url(#flLensOn)"/>' +
      '</g>' +
      // anéis do refletor (desenho da lente)
      '<g fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="0.8">' +
        '<circle cx="50" cy="50" r="30"/>' +
        '<circle cx="50" cy="50" r="23"/>' +
        '<circle cx="50" cy="50" r="16"/>' +
        '<path d="M14 50 H86 M50 14 V86"/>' +
      '</g>' +
      // lâmpada
      '<circle cx="50" cy="50" r="6" fill="#cfd4da" opacity="0.85"/>' +
      // reflexo do vidro
      '<path d="M26 34 A28 28 0 0 1 46 20" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>';

  document.body.appendChild(wrap);

  var timer = null;
  var ticking = false;

  function turnOn() {
    ticking = false;
    wrap.classList.add('is-on');
    clearTimeout(timer);
    timer = setTimeout(function () {
      wrap.classList.remove('is-on');
    }, OFF_DELAY);
  }

  function onActivity() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(turnOn);
  }

  var opts = { passive: true };
  window.addEventListener('scroll', onActivity, opts);
  window.addEventListener('mousemove', onActivity, opts);
  window.addEventListener('touchmove', onActivity, opts);
  window.addEventListener('wheel', onActivity, opts);
})();
