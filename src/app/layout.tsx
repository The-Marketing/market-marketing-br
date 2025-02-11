import '@/app/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false,
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "The Marketing: Estratégias de Marketing e Publicidade.",
  description: "The Marketing: Estratégias de Marketing e Publicidade oferece soluções avançadas para otimização de campanhas publicitárias com aplicativos web desenvolvidos em Next.js. Nossa plataforma facilita a criação de estratégias de marketing digital eficazes, aumentando o engajamento e o ROI. Aproveite ferramentas de marketing personalizáveis e suporte especializado para alcançar seus objetivos de publicidade online. Ideal para empresas que buscam inovar e expandir sua presença digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={cn(
          "h-screen  flex flex-col gap-24 items-center justify-between",
          fontSans.variable
        )}>

            <main className="flex-1 w-full mx-auto max-w-7xl">
              {children}
            </main>
        </body>
      </html>
    </>
  )
}
