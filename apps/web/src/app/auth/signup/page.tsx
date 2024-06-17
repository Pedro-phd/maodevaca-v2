import { CircleCheck, MoveRight } from 'lucide-react'
import Link from 'next/link'

import { AnimatedBorder } from '@/components/ui/animated-border'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignUpPage() {
  return (
    <div className="relative m-auto max-w-xl rounded-md border">
      <form className="relative z-10 w-full space-y-4 rounded-md p-8">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col gap-4">
            <small className="flex items-center gap-2 text-sm font-medium leading-none">
              <CircleCheck className="size-4 text-emerald-500" />
              100% Free
            </small>
            <small className="flex items-center gap-2 text-sm font-medium leading-none">
              <CircleCheck className="size-4 text-emerald-500" />
              Total security
            </small>
            <small className="flex items-center gap-2 text-sm font-medium leading-none">
              <CircleCheck className="size-4 text-emerald-500" />
              Simply and efficient
            </small>
          </div>
          <div className="block h-12 border" />
          <div className="">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Register.
            </h1>
            <p className="text-muted-foreground text-sm">
              Register and start organizing your life.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>What should we call you?</Label>
          <Input id="name" name="name" />
        </div>
        <div className="space-y-2">
          <Label>Your best E-mail, please. The best, ok ?</Label>
          <Input id="email" name="email" />
        </div>
        <div className="space-y-2">
          <Label>Chose a Password, strong please!</Label>
          <Input id="password" name="password" type="password" />
        </div>
        <div className="space-y-2">
          <Label>Repeat your Password, just to be sure.</Label>
          <Input id="confirmPassword" name="confirmPassword" type="password" />
        </div>
        <div className="flex justify-between space-x-2">
          <AnimatedButton
            variant="expandIcon"
            Icon={MoveRight}
            iconPlacement="right"
          >
            Sign up
          </AnimatedButton>
          <Link href="/auth/signin">
            <AnimatedButton variant="linkHover2">Sign in</AnimatedButton>
          </Link>
        </div>
      </form>
      <AnimatedBorder colorTo="#6D45F2" colorFrom="#4724b7" />
    </div>
  )
}
