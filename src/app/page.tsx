import { AboutUs, Header, Hero, WhatExpect } from '@/sections'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-rts-primary font-[family-name:var(--font-montserrat)]">
      <Header />
      <Hero />
      <AboutUs />
      <WhatExpect />

    </div>
  )
}
