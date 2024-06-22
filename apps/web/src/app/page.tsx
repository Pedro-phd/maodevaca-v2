'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import emoji from '@/../assets/emoji-home.png'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'

export default function Home() {
  const { push } = useRouter()

  return (
    <div className="flex h-screen w-full flex-col  items-center gap-8 p-12">
      <header className="flex w-full justify-between gap-2">
        <Logo className="cursor-pointer text-2xl text-stone-950 transition-all hover:text-amber-500" />
        <div className="flex gap-2">
          <Button
            onClick={() => push('/auth/signup')}
            variant="outline"
            className="text-primary"
          >
            Cadastrar
          </Button>
          <Button onClick={() => push('/auth/signin')}>Entrar</Button>
        </div>
      </header>
      <div className="m-auto flex w-full items-center justify-center gap-8">
        <div className="text-right">
          <h3 className="animate-fade-left animate-delay-[1ms] animate-ease-in-out">
            Pronto para mudar de vida ?
          </h3>
          <h1 className="animate-fade-left scroll-m-20 text-4xl font-semibold tracking-tight animate-delay-[2ms] animate-ease-in-out lg:text-5xl">
            Organize suas finanças
          </h1>
          <h1 className="animate-fade-left scroll-m-20 text-4xl font-semibold tracking-tight animate-delay-[3ms] animate-ease-in-out lg:text-5xl">
            com a plataforma <Logo className="text-6xl" />
          </h1>
        </div>
        <Image
          src={emoji}
          alt="emoji com a boca de dinheiro"
          width={200}
          height={200}
          className="animate-fade-right animate-delay-[1ms] animate-ease-in-out"
        />
      </div>
    </div>
  )
}
