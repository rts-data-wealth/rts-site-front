import { topMenuList, TopMenuListType } from '@/data/topMenuList'
import { ClassnameType } from '@/types'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export function Header({ className }: PropsWithChildren<ClassnameType>) {

  const itemRender = {
    link: (item: TopMenuListType) => (
      <a
        href={item.href}
        className="link"
      >
        {item.label}
      </a>),
    button: (item: TopMenuListType) => (
      <button
        type="button"
        className="button"
      >
        {item.label}
      </button>),
    logo: (item: TopMenuListType) => (
      <a
        href={item.href}
        className='flex items-center justify-center mx-16'
      >
        <Image
          src="/assets/images/LOGO-RTS-PARTNERS.svg"
          alt="RTS Partners - Valorize seu futuro!"
          width={80}
          height={55}
          priority
        />
      </a>
    )
  }
  return (
    <header
      id="header"
      className={twMerge(
        'fixed left-0 top-0 z-40 flex w-full items-center justify-center bg-rts-primary py-4',
        className
      )}
    >
      <div className="flex w-full max-w-screen-xl">
        <nav className='flex w-full'>
          <ul className="w-full flex items-center justify-between">
            {topMenuList.map((item) => (
              <li key={item.label}>
                {itemRender[item.mode](item)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
