'use client'

import { AlertCircle, CircleCheck, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AnimatedBorder } from '@/components/ui/animated-border'
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
    <div className="relative m-auto max-w-xl rounded-md border">
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full space-y-4 rounded-md p-8"
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col gap-4">
            <small className="flex items-center gap-2 text-sm font-medium leading-none">
              <CircleCheck className="size-4 text-emerald-500" />
              100% Grátis
            </small>
            <small className="flex items-center gap-2 text-sm font-medium leading-none">
              <CircleCheck className="size-4 text-emerald-500" />
              Seguro
            </small>
            <small className="flex items-center gap-2 text-sm font-medium leading-none">
              <CircleCheck className="size-4 text-emerald-500" />
              Simples e eficiente
            </small>
          </div>
          <div className="block h-12 border" />
          <div className="">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Cadastro.
            </h1>
            <p className="text-sm text-muted-foreground">
              Se cadastre e comece a organizar sua vida.
            </p>
          </div>
        </div>
        {success && (
          <Alert variant="destructive">
            <CircleCheck className="h-4 w-4" />
            <AlertTitle>Sucesso</AlertTitle>
            <AlertDescription>
              Você foi cadastrado com sucesso, deve ser redirecionado em breve.
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
          <Input id="confirmPassword" name="confirmPassword" type="password" />
          {errors?.confirmPassword && (
            <small className="text-sm font-medium leading-none text-destructive">
              {errors.confirmPassword[0]}
            </small>
          )}
        </div>
        <div className="flex justify-between space-x-2">
          <AnimatedButton
            variant="expandIcon"
            Icon={MoveRight}
            iconPlacement="right"
            isLoading={isLoading}
          >
            Se Cadastrar
          </AnimatedButton>
          <Link href="/auth/signin">
            <AnimatedButton variant="linkHover2">Entrar</AnimatedButton>
          </Link>
        </div>
      </form>
      <AnimatedBorder colorTo="#6D45F2" colorFrom="#4724b7" />
    </div>
  )
}
