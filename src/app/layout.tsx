import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ["100", "300", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "RTS Partners - Valorize seu futuro!",
  description: "A RTS Partners oferece consultoria financeira especializada e soluções estratégicas para otimizar o crescimento do seu negócio. Acesse agora e saiba mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
