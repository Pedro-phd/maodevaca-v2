import { Transaction } from '@/domain/transaction/model'

import { ClientHttp } from './http-client'

export async function getTransactionsPlannings(planningId: string) {
  return ClientHttp.get(`plannings/${planningId}/transactions`).json<
    Transaction[]
  >()
}
