/**
 * Dados oficiais dos serviços — Brabo Studio.
 * Fonte: portfólios oficiais (Carros e Motos) fornecidos pela marca.
 * Não alterar preços/itens aqui sem confirmar com a fonte oficial.
 *
 * Para atualizar preços, nomes ou itens: edite apenas este arquivo.
 * A interface (services.js) renderiza esses dados automaticamente.
 */
const SERVICES = {
  carro: [
    {
      id: 'carro-limpeza-convencional',
      name: 'LIMPEZA CONVENCIONAL',
      price: 'R$ 60',
      summary: 'Lavagem da pintura, rodas e calotas com selante nos pneus.',
      items: [
        'Lavagem pintura',
        'Limpeza das rodas e calotas',
        'Selante nos pneus'
      ]
    },
    {
      id: 'carro-convencional-aspiracao',
      name: 'CONVENCIONAL + ASPIRAÇÃO',
      price: 'R$ 80',
      summary: 'Lavagem completa com aspiração de bancos, carpete e porta-malas.',
      items: [
        'Lavagem pintura',
        'Limpeza das rodas e calotas',
        'Selante nos pneus',
        'Aspiração completa (bancos, carpete, porta-malas)'
      ]
    },
    {
      id: 'carro-detalhada-convencional',
      name: 'DETALHADA CONVENCIONAL',
      price: 'R$ 140',
      summary: 'Pré-lavagem, limpeza interna completa e proteção hidrorrepelente.',
      items: [
        'Pré-lavagem',
        'Lavagem',
        'Limpeza das rodas e calotas',
        'Aspiração completa (bancos, carpete, porta-malas)',
        'Limpeza do painel e plásticos internos',
        'Limpeza dos vidros (interno e externo)',
        'Proteção hidrorrepelente',
        'Selante nos pneus'
      ]
    },
    {
      id: 'carro-detalhada-completa',
      name: 'LIMPEZA DETALHADA COMPLETA',
      price: 'R$ 250',
      summary: 'Descontaminação, vitrificação, polimento e cuidado completo por dentro e por fora.',
      groups: [
        {
          label: 'EXTERNA',
          items: [
            'Pré-lavagem',
            'Lavagem',
            'Descontaminação da pintura',
            'Vitrificação da pintura',
            'Polimento',
            'Proteção hidrorrepelente',
            'Proteção com cera/verniz',
            'Limpeza e proteção dos plásticos externos',
            'Limpeza das rodas e calotas',
            'Selante nos pneus',
            'Limpeza dos vidros externos'
          ]
        },
        {
          label: 'INTERNA',
          items: [
            'Aspiração completa (bancos, carpete, porta-malas)',
            'Limpeza do painel e plásticos internos',
            'Hidratação de bancos de couro (se for o caso)',
            'Limpeza dos vidros internos',
            'Higienização de tapetes',
            'Perfumador/odorizador'
          ]
        }
      ]
    }
  ],
  moto: [
    {
      id: 'moto-convencional-simples',
      name: 'LAVAGEM CONVENCIONAL (SIMPLES)',
      price: 'R$ 40',
      summary: 'Lavagem da moto, limpeza das rodas e secagem.',
      items: [
        'Lavagem da moto',
        'Limpeza das rodas',
        'Secagem'
      ]
    },
    {
      id: 'moto-convencional-protecao',
      name: 'CONVENCIONAL + PROTEÇÃO',
      price: 'R$ 60',
      summary: 'Lavagem completa com proteção hidrorrepelente.',
      items: [
        'Lavagem da moto',
        'Limpeza das rodas',
        'Secagem',
        'Proteção hidrorrepelente'
      ]
    },
    {
      id: 'moto-detalhada-convencional',
      name: 'LAVAGEM DETALHADA CONVENCIONAL',
      price: 'R$ 100',
      summary: 'Pré-lavagem, detalhamento e vitrificação da pintura e dos plásticos.',
      items: [
        'Pré-lavagem',
        'Lavagem',
        'Detalhamento',
        'Vitrificação dos plásticos',
        'Vitrificação da pintura',
        'Proteção hidrorrepelente',
        'Selante nos pneus'
      ]
    },
    {
      id: 'moto-detalhada-completa',
      name: 'LAVAGEM DETALHADA COMPLETA',
      price: 'R$ 150',
      summary: 'Descontaminação, polimento, vitrificação e restauração completa dos plásticos.',
      items: [
        'Pré-lavagem',
        'Lavagem',
        'Detalhamento',
        'Descontaminação da pintura',
        'Vitrificação dos plásticos',
        'Vitrificação da pintura',
        'Polimento',
        'Proteção hidrorrepelente',
        'Proteção com cera/verniz',
        'Descontaminação e limpeza do kit de tração',
        'Restauração de plásticos',
        'Selante nos pneus'
      ]
    }
  ]
};
