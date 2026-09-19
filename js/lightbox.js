/**
 * Lightbox da galeria: tocar numa foto abre a versão em alta resolução.
 * <dialog> nativo (foco preso, ESC fecha). Setas/botões e arrastar pro lado trocam de foto.
 */
(function () {
  var dlg = document.getElementById('lightbox');
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery__item[data-full]'));
  if (!dlg || !items.length || typeof dlg.showModal !== 'function') return;

  var img = document.getElementById('lbImg');
  var count = document.getElementById('lbCount');
  var current = 0;
  var opener = null;

  function show(i) {
    current = (i + items.length) % items.length;
    var it = items[current];
    var thumb = it.querySelector('img');
    img.src = it.getAttribute('data-full');
    img.alt = thumb ? thumb.alt : '';
    count.textContent = (current + 1) + ' / ' + items.length;
  }

  function open(i) {
    opener = items[i];
    show(i);
    dlg.showModal();
    document.documentElement.classList.add('lightbox-open');
  }

  function close() { dlg.close(); }

  items.forEach(function (it, i) {
    it.addEventListener('click', function () { open(i); });
  });

  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('lbNext').addEventListener('click', function () { show(current + 1); });

  // clique no fundo escuro fecha
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });

  dlg.addEventListener('close', function () {
    document.documentElement.classList.remove('lightbox-open');
    img.removeAttribute('src');
    if (opener) opener.focus({ preventScroll: true });
  });

  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // arrastar pro lado
  var startX = null;
  dlg.addEventListener('pointerdown', function (e) { startX = e.clientX; });
  dlg.addEventListener('pointerup', function (e) {
    if (startX === null) return;
    var dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  });
})();
