import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordionRts'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  title: string
  icon: string
  description: string
  className?: string
  classNames?: {
    Accordion?: string,
    AccordionTrigger?: string,
    AccordionContent?: string
  }
}

export function Collapse({
  children,
  className,
  classNames,
  icon,
  title,
  description
}: PropsWithChildren<Props>) {
  return (
    <Accordion
      type="single"
      collapsible
      className={twMerge("w-full", classNames?.Accordion, className)}
    >
      <AccordionItem value={title}>
        <AccordionTrigger className={twMerge("text-rts-accent font-normal text-xl w-full justify-center text-center gap-3", classNames?.AccordionTrigger)}>
          <div className='md:hidden'>
            {icon ? (
              <Image
                src={icon}
                alt={title}
                width={27}
                height={28}
              />
            ) : null}
          </div>
          {title}
        </AccordionTrigger>
        <AccordionContent className={twMerge("text-rts-neutral-2 text-center text-base", classNames?.AccordionContent)}>
          {description}
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
