export type FiveStepsType = {
  order: number
  image: string
  title: string
  description: string
}

export const fiveStepsList: FiveStepsType[] = [
  {
    order: 1,
    image: '/assets/images/step1.svg',
    title: 'COMPREENSÃO',
    description: 'Nosso relacionamento começa com uma conversa para nos conhecermos, entendermos a situação do cliente e seus objetivos. Aproveitamos esse momento para discutir necessidades específicas, aspirações e principais metas.'
  },
  {
    order: 2,
    image: '/assets/images/step2.svg',
    title: 'DIAGNÓSTICO​',
    description: 'Seu planejamento abrangerá tudo que importa: tolerância a risco, preferências, aposentadoria e estrutura familiar. Desenvolveremos um portfólio de investimentos para alcançar seus objetivos.'
  },
  {
    order: 3,
    image: '/assets/images/step3.svg',
    title: 'IMPLEMENTAÇÃO',
    description: 'Uma vez que concordarmos com a estratégia, começaremos a implementação prática do planejamento patrimonial.'
  },
  {
    order: 4,
    image: '/assets/images/step3.svg',
    title: 'MANUTENÇÃO',
    description: 'O planejamento financeiro continua e você terá uma equipe que te conhece a fundo e monitorará o mercado e sua vida constantemente. Estabeleceremos uma rotina de revisões e ajustes conforme sua agenda para garantir que o planejamento siga rumo aos seus principais objetivos.'
  },
  {
    order: 5,
    image: '/assets/images/step5.svg',
    title: 'RELACIONAMENTO',
    description: 'Conforme você se move nos diferentes estágios de sua vida, estaremos aqui para potencializar os bons momentos e para minimizar o impacto dos momentos indesejados. ​'
  }
]
