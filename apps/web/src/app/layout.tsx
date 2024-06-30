import './globals.css'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import QueryProvider from '@/lib/query-provider'

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
      <QueryProvider>
        <TooltipProvider>
          <body>{children}</body>
          <Toaster />
        </TooltipProvider>
      </QueryProvider>
    </html>
  )
}
