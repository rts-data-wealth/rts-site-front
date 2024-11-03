import { ClassnameType } from '@/types'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
  title?: string
  btnLabel?: string
} & ClassnameType

export function AboutUs({
  children,
  className,
  title = 'Quem somos',
  btnLabel = 'AGENDE UMA REUNIÃO'
}: PropsWithChildren<Props>) {
  return (
    <section className={twMerge('container h-screen min-w-full bg-no-repeat bg-center bg-aboutUs', className)}>
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col items-center justify-center w-1/2 gap-12">
          <span className="text-white text-4xl leading-tight font-medium">{title}</span>
          <div className='flex flex-col text-rts-neutral-2 text-center gap-8 text-xl leading-relaxed'>
            <p>Com experiência no aconselhamento de mais de 100 famílias, a RTS Partners nasce com um propósito claro: cuidar do seu patrimônio
              <span className='text-rts-accent'> e te representar em qualquer ocasião.</span></p>

            <p>Atuamos globalmente em busca das melhores soluções para que você possa dedicar seu tempo ao que mais ama, com a tranquilidade de saber que seu futuro financeiro será mais próspero, sólido e seguro.</p>
            {children}
          </div>
          <button className="button text-base">{btnLabel}</button>
        </div>
      </div>
    </section >
  )
}
