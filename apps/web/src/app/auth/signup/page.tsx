'use client'

import { AlertCircle, CircleCheck, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import emoji from '@/../assets/emoji-register.png'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hook/useFormState'

import { signUpAction } from './actions'

export default function SignUpPage() {
  const router = useRouter()

  const [{ message, success, errors }, handleSubmit, isLoading] = useFormState(
    signUpAction,
    () => {
      setTimeout(() => {
        router.push('/auth/signin')
      }, 2000)
    },
  )

  return (
    <div className="flex w-full items-center justify-center gap-12">
      <div className="animate-fade-left animate-delay-[2ms] animate-ease-in-out flex w-[600px] w-full flex-col justify-end gap-8">
        <div className="flex flex-col justify-start gap-4">
          <div className="text-right">
            <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Cadastrar
            </h1>
            <h3>Se cadastra-se e comece a organizar sua vida</h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-2 items-center justify-center gap-4"
        >
          {success && (
            <Alert variant="destructive">
              <CircleCheck className="h-4 w-4" />
              <AlertTitle>Sucesso</AlertTitle>
              <AlertDescription>
                Você foi cadastrado com sucesso, deve ser redirecionado em
                breve.
              </AlertDescription>
            </Alert>
          )}
          {!success && message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label>Como devemos te chamar?</Label>
            <Input id="name" name="name" />
            {errors?.name && (
              <small className="text-sm font-medium leading-none text-destructive">
                {errors.name[0]}
              </small>
            )}
          </div>
          <div className="space-y-2">
            <Label>Seu melhor e-mail, o melhor ok ?</Label>
            <Input id="email" name="email" />
            {errors?.email && (
              <small className="text-sm font-medium leading-none text-destructive">
                {errors.email[0]}
              </small>
            )}
          </div>
          <div className="space-y-2">
            <Label>Escolha uma senha, uma que seja forte!</Label>
            <Input id="password" name="password" type="password" />
            {errors?.password && (
              <small className="text-sm font-medium leading-none text-destructive">
                {errors.password[0]}
              </small>
            )}
          </div>
          <div className="space-y-2">
            <Label>Repita sua senha, só para ter certeza.</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />
            {errors?.confirmPassword && (
              <small className="text-sm font-medium leading-none text-destructive">
                {errors.confirmPassword[0]}
              </small>
            )}
          </div>
          <div></div>
          <div className="flex justify-between space-x-2">
            <Link href="/auth/signin">
              <AnimatedButton variant="linkHover2">Entrar</AnimatedButton>
            </Link>
            <AnimatedButton
              variant="expandIcon"
              Icon={MoveRight}
              iconPlacement="right"
              isLoading={isLoading}
            >
              Se Cadastrar
            </AnimatedButton>
          </div>
        </form>
      </div>
      <Image
        src={emoji}
        alt="emoji festa"
        className="animate-fade-left animate-delay-[1ms] animate-ease-in-out"
      />
    </div>
  )
}
