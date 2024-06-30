import { HTTPError } from 'ky'
import { z } from 'zod'

import { FormState } from '@/hook/useFormState'
import { addMember } from '@/http/add-member'
import { newPlanning } from '@/http/new-planning'

const planningSchema = z.object({
  name: z.string(),
  description: z.string(),
})

const memberSchema = z.object({
  email: z.string().email(),
  planningId: z.string(),
})

export async function newTransactionAction(data: FormData): Promise<FormState> {
  const validation = planningSchema.safeParse(Object.fromEntries(data))
  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  try {
    await newPlanning(validation.data)
    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof HTTPError) {
      return { success: false, message: error.message, errors: null }
    }
  }

  return {
    success: false,
    message: 'Erro interno, tente novamente mais tarde',
    errors: null,
  }
}

export async function addMemberAction(data: FormData): Promise<FormState> {
  const validation = memberSchema.safeParse(Object.fromEntries(data))
  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }
  try {
    await addMember(validation.data)
    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()
      return {
        success: false,
        message,
        errors: null,
      }
    }
  }
  return {
    success: false,
    message: 'Erro interno, tente novamente',
    errors: null,
  }
}
