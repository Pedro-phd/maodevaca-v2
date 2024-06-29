import './globals.css'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Mão de vaca',
  description: 'Gerencie seus gastos com o Mão de vaca!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <Toaster />
    </html>
  )
}
