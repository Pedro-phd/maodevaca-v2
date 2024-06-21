'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signUp } from '@/http/signup'

const signUpgschema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Seu nome deve ter no minimo 3 digitos' }),
    email: z.string().email({ message: 'Por favor, digite um e-mail válido.' }),
    password: z.string().min(1, { message: 'Por favor, digite sua senha.' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Por favor, confirme sua senha.' }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Suas senhas não se coincidem',
      path: ['confirmPassword'],
    },
  )

export async function signUpAction(data: FormData) {
  const validation = signUpgschema.safeParse(Object.fromEntries(data))

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { name, email, password } = validation.data

  try {
    await signUp(name, email, password)
    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message, statusCode } = await error.response.json()

      if (typeof message === 'object' && statusCode === 400) {
        return {
          success: false,
          message: `Por favor, verifique: se seu e-mail esta correto e se sua senha contem numeros, letras minusculas, maiusculas, caracteres especiais e no minimo 8 caracteres`,
          errors: null,
        }
      }

      return { success: false, message, errors: null }
    }

    console.error(error) // TODO: improvement logs

    return {
      success: false,
      message: 'Erro interno! Tente novamente em alguns instantes.',
      errors: null,
    }
  }
}
