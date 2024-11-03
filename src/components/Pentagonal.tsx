import { fiveStepsList } from '@/data/fiveSteps'
import Image from 'next/image'
import { Collapse } from './Collapse'

export function Pentagonal() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <Collapse
        className="w-1/3"
        icon={fiveStepsList[0].image}
        title={fiveStepsList[0].title}
        description={fiveStepsList[0].description}
      />
      <div className="flex items-center justify-center">
        <picture className="relative h-full w-full items-center justify-center">
          <Image
            src={`/assets/images/vector-oqueesperar.svg`}
            alt={'RTS'}
            // sizes="(min-width: 46rem) height: 22.5rem, height: 16.1875rem"
            width={480}
            height={463}
          />
          <Collapse
            classNames={{
              Accordion: 'hidden md:flex w-1/2 absolute top-[33.5%] -right-[60%]',
              AccordionTrigger: 'md:text-left md:justify-start md:items-start',
              AccordionContent: 'md:text-left md:justify-start md:items-start'
            }}
            icon={fiveStepsList[1].image}
            title={fiveStepsList[1].title}
            description={fiveStepsList[1].description}
          />
          <Collapse
            classNames={{
              Accordion: 'hidden md:flex w-1/3 absolute top-[91.5%] -right-[25%]',
              AccordionTrigger: 'md:text-left md:justify-start md:items-start',
              AccordionContent: 'md:text-left md:justify-start md:items-start'
            }}
            icon={fiveStepsList[2].image}
            title={fiveStepsList[2].title}
            description={fiveStepsList[2].description}
          />
          <Collapse
            classNames={{
              Accordion: 'hidden md:flex w-1/3 absolute top-[91.5%] -left-[25%]',
              AccordionTrigger: 'md:text-right md:justify-end md:items-end',
              AccordionContent: 'md:text-right md:justify-end md:items-end'
            }}
            icon={fiveStepsList[3].image}
            title={fiveStepsList[3].title}
            description={fiveStepsList[3].description}
          />
          <Collapse
            classNames={{
              Accordion: 'hidden md:flex w-1/3 absolute top-[33.5%] -left-[60%]',
              AccordionTrigger: 'md:text-right md:justify-end md:items-end',
              AccordionContent: 'md:text-right md:justify-end md:items-end'
            }}
            icon={fiveStepsList[4].image}
            title={fiveStepsList[4].title}
            description={fiveStepsList[4].description}
          />
        </picture>
      </div>


    </div>
  )
}
