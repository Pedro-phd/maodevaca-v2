'use client'
import { AlertCircle, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AnimatedBorder } from '@/components/ui/animated-border'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hook/useFormState'

import { signInAction } from './actions'

export default function SignInPage() {
  const router = useRouter()

  const [{ message, success, errors }, handleSubmit, isLoading] = useFormState(
    signInAction,
    () => {
      router.push('/')
    },
  )

  return (
    <div className="relative m-auto max-w-xl rounded-md border">
      <form
        className="relative z-10 w-full space-y-4 rounded-md p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Login.
            </h1>
            <p className="text-sm text-muted-foreground">
              Log in to enjoy 100% of our platform.
            </p>
          </div>
          <div className="block h-12 border" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Lets go to organize your{' '}
            <span className="text-primary">finance</span> life ?
          </h4>
        </div>
        {!success && message && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-2">
          <Label>E-mail</Label>
          <Input id="email" name="email" />
          {errors?.email && (
            <small className="text-sm font-medium leading-none text-destructive">
              {errors.email[0]}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input id="password" name="password" />
          {errors?.password && (
            <small className="text-sm font-medium leading-none text-destructive">
              {errors.password[0]}
            </small>
          )}
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
            <AnimatedButton isLoading={isLoading} variant="linkHover2">
              Sign up
            </AnimatedButton>
          </Link>
        </div>
      </form>
      <AnimatedBorder colorTo="#6D45F2" colorFrom="#4724b7" />
    </div>
  )
}
