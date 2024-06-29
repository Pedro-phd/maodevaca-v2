import { formatISO } from 'date-fns'
import { HTTPError } from 'ky'
import { z } from 'zod'

import { newTransaction } from '@/http/new-transaction'

const newTransactionSchema = z.object({
  amount: z.string(),
  description: z.string(),
  type: z.string(),
  paymentDate: z.string(),
  tags: z.array(z.number()).optional(),
  planningId: z.string().optional(),
})

export async function newTransactionAction(data: FormData) {
  const validation = newTransactionSchema.safeParse(Object.fromEntries(data))
  console.log(Object.fromEntries(data))
  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { amount, description, paymentDate, type, planningId, tags } =
    validation.data

  const amountFormated = parseFloat(amount.replace('R$', '').replace(',', '.'))
  const splitedDate = paymentDate.split('-').map((d: string) => parseInt(d))
  const formatedDate = formatISO(
    new Date(splitedDate[0], splitedDate[1] - 1, splitedDate[2]),
  )
  try {
    const res = await newTransaction({
      amount: amountFormated,
      description,
      paymentDate: formatedDate,
      type,
      planningId,
      tags,
    })
    console.log(res)
    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof HTTPError) {
      return { success: false, message: error.message, errors: null }
    }
    return {
      success: false,
      message: 'Erro interno ao criar transação',
      errors: null,
    }
  }
}
