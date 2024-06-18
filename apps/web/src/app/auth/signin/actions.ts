'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { signIn } from '@/http/sigin'

const signIngschema = z.object({
  email: z.string().email({ message: 'Por favor, digite um e-mail válido.' }),
  password: z.string().min(1, { message: 'Por favor, digite sua senha.' }),
})

export async function signInAction(data: FormData) {
  const validation = signIngschema.safeParse(Object.fromEntries(data))

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = validation.data

  try {
    const { token } = await signIn(email, password)
    cookies().set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()

      return { success: false, message, errors: null }
    }

    console.error(error) // TODO: improvement logs

    return {
      success: false,
      message: 'Erro interno! Tente novamente em alguns instantes.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
