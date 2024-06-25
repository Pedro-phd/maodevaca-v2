'use client'

import {
  ArrowLeftRight,
  HandCoins,
  LayoutDashboard,
  LineChart,
  Notebook,
  Percent,
} from 'lucide-react'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface MenuItemProps {
  title: string
  icon: JSX.Element
  href: string
}

function MenuItem({ href, icon, title }: MenuItemProps) {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <Tooltip>
      <TooltipTrigger className="group">
        <Link
          href={href}
          className={cn(
            'flex size-12 items-center justify-center rounded border bg-accent text-center',
            path === href && 'border-2 border-primary shadow-lg',
            'border-2 transition-all hover:shadow-xl group-hover:border-amber-500',
          )}
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}

function MenuDashboard() {
  return (
    <TooltipProvider>
      <div className="h-full w-[80px] rounded border bg-card p-4">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <MenuItem
            title="Dashboard"
            href="/dashboard"
            icon={<LayoutDashboard className="text-stone-600" />}
          />
          <Separator />
          <div className=" flex flex-col gap-2">
            <MenuItem
              title="Transações"
              href="/dashboard/transactions"
              icon={<ArrowLeftRight className="text-stone-600" />}
            />
            <MenuItem
              title="Planos"
              href="/dashboard/plannings"
              icon={<Notebook className="text-stone-600" />}
            />
            <MenuItem
              title="Gráficos"
              href="/dashboard/charts"
              icon={<LineChart className="text-stone-600" />}
            />
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <MenuItem
              title="Descontos"
              href="/dashboard/discount"
              icon={<Percent className="text-stone-600" />}
            />
            <MenuItem
              title="Economize"
              href="/dashboard/economy"
              icon={<HandCoins className="text-stone-600" />}
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default MenuDashboard
