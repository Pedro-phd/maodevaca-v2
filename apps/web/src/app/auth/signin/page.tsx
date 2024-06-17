import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import { AnimatedBorder } from '@/components/ui/animated-border'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignInPage() {
  return (
    <div className="relative m-auto max-w-xl rounded-md border">
      <form className="relative z-10 w-full space-y-4 rounded-md p-8">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Login.
            </h1>
            <p className="text-muted-foreground text-sm">
              Log in to enjoy 100% of our platform.
            </p>
          </div>
          <div className="block h-12 border" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Lets go to organize your{' '}
            <span className="text-primary">finance</span> life ?
          </h4>
        </div>
        <div className="space-y-2">
          <Label>E-mail</Label>
          <Input id="email" name="email" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input id="password" name="password" />
        </div>
        <div className="flex justify-between space-x-2">
          <AnimatedButton
            variant="expandIcon"
            Icon={MoveRight}
            iconPlacement="right"
            type="submit"
          >
            Sign in
          </AnimatedButton>
          <Link href="/auth/signup">
            <AnimatedButton variant="linkHover2">Sign up</AnimatedButton>
          </Link>
        </div>
      </form>
      <AnimatedBorder colorTo="#6D45F2" colorFrom="#4724b7" />
    </div>
  )
}
