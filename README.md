# Brabo Studio: Landing Page Mobile

Landing page mobile-first da Brabo Studio (estética automotiva, São Miguel dos Campos, AL), feita a partir do design aprovado no Figma. HTML, CSS e JS puros: sem framework, sem build, pronta pro GitHub Pages.

## Estrutura

```
index.html
.nojekyll
css/
  tokens.css        cores, espaços, tipografia e motion (medidas do Figma)
  base.css          reset, foco, skip-link, .container, .reveal
  layout.css        seções: hero, serviços, CTA final, footer
  components.css    navbar, menu, botões, tag, seletor, cards, sticky CTA
js/
  config.js           BOOKING_URL (link da agenda)
  services-data.js    serviços, preços e itens (Carro e Moto)
  additional-services-data.js  card "Serviços adicionais e para motos" (vale pros dois)
  render-services.js  monta os cards a partir dos dados
  navbar.js           menu mobile + borda da navbar ao rolar
  segmented.js        seletor Carro/Moto
  accordion.js        "VER O QUE INCLUI"
  reveal.js           entrada dos blocos ao rolar
  sticky-cta.js       barra fixa "AGENDAR AGORA"
  hero-bubbles.js     bolhas do hero
  booking-links.js    aplica o link da agenda em todo [data-booking]
assets/images/hero.jpg + hero.webp
```

## Onde mudar cada coisa

| O que | Onde |
|---|---|
| Link da agenda | `js/config.js`, constante `BOOKING_URL` (vale pra todos os botões) |
| Serviços, preços, itens | `js/services-data.js` |
| Serviços adicionais e valores | `js/additional-services-data.js` |
| Avaliações e galeria | `index.html`, seções `#avaliacoes` e `#galeria` (fotos em `assets/images/gallery/` e `reviews/`) |
| Foto do hero, logo, favicon | `assets/images/` |
| Cores e medidas | `css/tokens.css` |
| Textos fixos | `index.html` |

O parâmetro de serviço na URL (`?service=...`) está desligado (`SUPPORTS_SERVICE_PARAM = false`). Só ligue se o agende-me confirmar que aceita.

## Testar local

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## Publicar no GitHub Pages

1. Crie o repositório (ex.: `brabo-studio`) e suba estes arquivos na raiz da branch `main`.
2. No GitHub: Settings, Pages, Source = `main`, pasta `/ (root)`.
3. O site abre em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Todos os caminhos são relativos, então funciona no subdiretório do Pages.

## Pendências

- Galeria: as 7 fotos vieram em 180x240px. Trocar por originais (mín. 300x400) pra ficar nítido em tela retina.
- Avaliação do Rafael termina em "ganhou outro" (texto do design). Confirmar o texto completo.
- Confirmar os itens dos serviços de Carro (exceto o Detalhada Completa) e todos os de Moto, que não estão no Figma.
