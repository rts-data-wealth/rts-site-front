import { ClassnameType } from '@/types'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
  title?: string
  subtitle?: string
  btnLabel?: string
} & ClassnameType

export function Hero({
  className,
  title = 'A gestão patrimonial não precisa ser complicada, nem tendenciosa.',
  subtitle = 'Cuidamos do seu patrimônio sem conflitos de interesse, te representando em qualquer ocasião.',
  btnLabel = 'FALE COM OS FUNDADORES'
}: PropsWithChildren<Props>) {
  return (
    <section className={twMerge('container min-w-full h-[700px]', className)}>
      <div className="heroImage">
        <div className="imageContainer h-[700px]">
          <picture className="relative h-full w-full">
            <Image
              className={twMerge('imagePicture')}
              src={`/assets/images/bg-hero-1.png`}
              alt={title}
              // sizes="(min-width: 46rem) height: 22.5rem, height: 16.1875rem"
              width={1088}
              height={720}
            />
          </picture>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-screen-xl">
        <div className="heroContent w-1/2 gap-12">
          <div className="flex flex-col gap-6">
            <span className="text-white text-5xl leading-tight">{title}</span>
            <span className="text-rts-neutral-2 text-xl">{subtitle}</span>
          </div>
          <button className="button text-base">{btnLabel}</button>
        </div>
      </div>
    </section >
  )
}
