import Image from 'next/image'

import emoji from '@/../assets/emoji-dashboard.png'
import Logo from '@/components/ui/logo'

export default function InitalDashboard() {
  return (
    <div className="flex w-full flex-col gap-2 rounded border p-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Seja bem-vindo a sua dashboard!
      </h2>
      <div className="flex items-center gap-6">
        <Image
          src={emoji}
          alt="emoji com a boca de dinheiro"
          className="animate-fade-right animate-delay-[1ms] animate-ease-in-out"
        />
        <div className=" flex w-full flex-col gap-2">
          <p className="text-xl leading-7 [&:not(:first-child)]:mt-6">
            No momento a plataforma <Logo className="text-4xl" /> ainda esta
            sendo construida, a dashboard irá passar por reformulação.
          </p>
          <p className="text-xl leading-7">
            Então por enquanto, para desfrutar da plataforma, use o menu ao lado
            para acessar suas <span className="font-bold">transações</span> e
            seus
            <span className="font-bold"> planos!</span>
          </p>
          <p className="mt-6 text-xl font-bold leading-7">
            Obrigado e até logo, com muitas novidades.
          </p>
        </div>
      </div>
    </div>
  )
}
