import { Suspense } from 'react'

import MenuDashboard from './components/menu-dashboard'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full animate-fade gap-8 p-6 animate-ease-out">
      <MenuDashboard />
      <Suspense fallback={<p>Loading ...</p>}>{children}</Suspense>
    </div>
  )
}
