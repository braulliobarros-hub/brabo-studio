/**
 * Serviços adicionais / avulsos — Carro e Moto.
 * Fonte: conteúdo oficial fornecido pela marca (mesma regra dos outros serviços:
 * não alterar preços/itens aqui sem confirmar com a fonte oficial).
 *
 * Esse bloco é renderizado uma única vez, abaixo do seletor Carro/Moto,
 * porque vale pros dois tipos de veículo.
 */
const ADDITIONAL_SERVICES = {
  id: 'servicos-adicionais-motos',
  title: 'SERVIÇOS ADICIONAIS E PARA MOTOS',
  summary:
    'Serviços complementares para atender necessidades específicas do seu carro ou moto — de vidros a couro, com atenção total aos detalhes.',
  benefits: [
    'Serviços avulsos para necessidades específicas',
    'Vitrificação completa para motocicletas',
    'Higienização de bancos, teto e carpete',
    'Descontaminação de vidros',
    'Produtos premium e atendimento personalizado'
  ],
  categories: [
    {
      name: 'VIDROS',
      items: [{ label: 'Descontaminação dos vidros', price: 'R$ 80,00' }]
    },
    {
      name: 'PINTURA',
      items: [{ label: 'Descontaminação da pintura', price: 'R$ 80,00' }]
    },
    {
      name: 'INTERIOR E COURO',
      items: [{ label: 'Hidratação do couro', price: 'R$ 140,00' }]
    },
    {
      name: 'HIGIENIZAÇÃO INTERNA COMPLETA',
      description:
        'Lavagem Nível 1 + oxi sanitização + eliminação de odores + extração do carpete + sanitizante antibactericida + limpeza com Extractus, Bactran e Sanitize + higienização do A/C + condicionamento do couro.',
      items: [{ label: 'Veículo Pequeno', price: 'R$ 200,00' }]
    }
  ],
  contactNote: 'Interessado neste serviço? Fale com a gente pra agendar uma avaliação ou tirar suas dúvidas.',
  ctaLabel: 'AGENDAR AGORA'
};
