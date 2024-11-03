import { Pentagonal } from '@/components/Pentagonal'
import { ClassnameType } from '@/types'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
  title?: string
  subtitle?: string
} & ClassnameType

export function WhatExpect({
  className,
  title = 'O que esperar?',
  subtitle = 'O planejamento financeiro personalizado considera diversas variáveis que conectam o momento de vida à estratégia de investimentos. Resumimos o processo em 5 etapas:',
}: PropsWithChildren<Props>) {
  return (
    <section className={twMerge('container min-w-full items-center justify-center h-screen', className)}>
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col items-center justify-center w-1/2 gap-12">
          <div className="flex flex-col gap-4">
            <span className="w-full text-center text-white text-4xl leading-tight font-medium">{title}</span>
            <span className="flex flex-col text-rts-neutral-2 text-center gap-8 text-xl leading-relaxed">{subtitle}</span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Pentagonal />
      </div>
    </section >
  )
}
