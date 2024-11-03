import { twMerge } from 'tailwind-merge'
import { topMenuList } from '@/data/topMenuList'
import { PropsWithChildren } from 'react'
import { ClassnameType } from '@/types'

export function Header({ className }: PropsWithChildren<ClassnameType>) {
  return (
    <header
      id="header"
      className={twMerge(
        'fixed left-0 top-0 z-40 flex w-full items-center justify-center bg-red-500 p-8',
        className
      )}
    >
      {' '}
      <div className="mx-auto flex max-w-[1200px] items-center justify-between p-4">
        <nav>
          <ul className="flex items-center gap-4">
            {topMenuList.map((item) => (
              <li key={item.label}>
                {item.mode === 'link' ? (
                  <a
                    href={item.href}
                    className="link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="button"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
