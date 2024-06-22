/* eslint-disable camelcase */
import { Caveat_Brush } from 'next/font/google'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const CaveatBrush = Caveat_Brush({
  weight: ['400'],
})

function Logo({ className }: Props) {
  return (
    <span className={cn('text-amber-500', CaveatBrush.className, className)}>
      Mão de vaca
    </span>
  )
}

export default Logo
