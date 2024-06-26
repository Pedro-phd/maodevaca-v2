import { Transaction } from '@/domain/transaction/model'

import { ClientHttp } from './http-client'

export async function getTransactionsPlannings(planningId: string) {
  const res = await ClientHttp.get(`plannings/${planningId}/transactions`).json<
    Transaction[]
  >()

  await setTimeout(async () => {
    return Promise.resolve()
  }, 2000)

  return res
}
