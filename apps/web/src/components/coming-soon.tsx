import Image from 'next/image'

import emoji from '@/../assets/coming-soon.png'

function ComingSoon() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <Image
        src={emoji}
        alt="emoji com a boca de dinheiro"
        className="animate-fade-right animate-delay-[1ms] animate-ease-in-out"
      />
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-muted-foreground lg:text-5xl">
        Em breve ...
      </h2>
    </div>
  )
}

export default ComingSoon
