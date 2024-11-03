export type TopMenuListType = {
  order: number
  label: string
  href: string
  mode: 'link' | 'button' | 'logo'
}

export const topMenuList: TopMenuListType[] = [
  {
    order: 1,
    label: 'Quem somos',
    href: '#sobre',
    mode: 'link'
  },
  {
    order: 2,
    label: 'Soluções',
    href: '#solucoes',
    mode: 'link'
  },
  {
    order: 3,
    label: 'Diferenciais',
    href: '#diferenciais',
    mode: 'link'
  },
  {
    order: 4,
    label: 'RTS',
    href: '/',
    mode: 'logo'
  },
  {
    order: 5,
    label: 'Nossa proposta',
    href: '#solucoes',
    mode: 'link'
  },
  {
    order: 6,
    label: 'Network',
    href: '#network',
    mode: 'link'
  },
  {
    order: 7,
    label: 'CONTATO',
    href: '#contato',
    mode: 'button'
  }
]
