import MenuDashboard from './components/menu-dashboard'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="animate-fade animate-ease-out flex h-screen w-full p-6">
      <MenuDashboard />
      {children}
    </div>
  )
}
