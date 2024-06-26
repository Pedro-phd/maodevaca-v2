import { Transaction } from '@/domain/transaction/model'

import { ClientHttp } from './http-client'

export async function getTransactions() {
  const res = await ClientHttp.get('transactions').json<Transaction[]>()

  return res
}
