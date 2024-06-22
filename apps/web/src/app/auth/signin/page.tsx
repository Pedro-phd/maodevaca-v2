'use client'

import { AlertCircle, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import emoji from '@/../assets/emoji-login.png'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
    <div className="flex w-full justify-center gap-36">
      <Image
        src={emoji}
        alt="emoji com a boca de dinheiro"
        className="animate-fade-right animate-delay-[1ms] animate-ease-in-out"
      />
      <div className="flex flex-col justify-start gap-4">
        <div>
          <h1 className="animate-fade-left animate-delay-[2ms] animate-ease-in-out scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Entrar
          </h1>
          <h3 className="animate-fade-left animate-delay-[1ms] animate-ease-in-out">
            Entre para aproveitar 100% da plataforma
          </h3>
        </div>
        <form
          className="animate-fade-right animate-delay-[2ms] animate-ease-in-out flex w-full flex-col justify-start gap-2 rounded-md"
          onSubmit={handleSubmit}
        >
          {!success && message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          <div className="flex w-full gap-4">
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
              <Label>Senha</Label>
              <Input id="password" name="password" />
              {errors?.password && (
                <small className="text-sm font-medium leading-none text-destructive">
                  {errors.password[0]}
                </small>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            <AnimatedButton
              variant="expandIcon"
              Icon={MoveRight}
              iconPlacement="right"
              type="submit"
            >
              Entrar
            </AnimatedButton>
            <Link href="/auth/signup">
              <AnimatedButton isLoading={isLoading} variant="linkHover2">
                Não possui conta ?
              </AnimatedButton>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
