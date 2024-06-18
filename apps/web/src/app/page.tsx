import { ChevronRight } from 'lucide-react'

import AnimatedParticles from '@/components/ui/animated-particles'
import TextAnimatedGradient from '@/components/ui/text-animated-gradient'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg">
      <TextAnimatedGradient className="absolute top-10 z-10 cursor-pointer">
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Começar agora
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </TextAnimatedGradient>
      <div className="z-10 flex flex-col gap-2">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Organize sua vida <br />
          com a plataforma <span className="text-primary">Mão de Vaca!</span>
        </h1>
        <p className="text-center text-sm text-muted-foreground">
          Organizar, Planejar, Evoluir.
        </p>
      </div>
      <AnimatedParticles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  )
}
