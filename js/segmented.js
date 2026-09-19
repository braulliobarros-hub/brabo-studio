/**
 * Segmented control Carro/Moto — troca de painel sem reload,
 * seguindo o padrão de abas acessível (role="tab"/"tabpanel").
 */
(function () {
  var tabCarro = document.getElementById('tabCarro');
  var tabMoto = document.getElementById('tabMoto');
  var panelCarro = document.getElementById('panelCarro');
  var panelMoto = document.getElementById('panelMoto');

  if (!tabCarro || !tabMoto || !panelCarro || !panelMoto) return;

  var tabs = [
    { btn: tabCarro, panel: panelCarro },
    { btn: tabMoto, panel: panelMoto }
  ];

  function activate(target) {
    tabs.forEach(function (tab) {
      var isActive = tab === target;
      tab.btn.setAttribute('aria-selected', String(isActive));
      tab.panel.hidden = !isActive;
    });
  }

  tabCarro.addEventListener('click', function () {
    activate(tabs[0]);
  });
  tabMoto.addEventListener('click', function () {
    activate(tabs[1]);
  });

  // Navegação por setas (padrão ARIA de tabs)
  [tabCarro, tabMoto].forEach(function (btn, index) {
    btn.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      var nextIndex = event.key === 'ArrowRight'
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;
      tabs[nextIndex].btn.focus();
      activate(tabs[nextIndex]);
    });
  });
})();
