import { Transaction } from '@/domain/transaction/model'

import { ClientHttp } from './http-client'

export async function getTransactions() {
  return ClientHttp.get('transactions').json<Transaction[]>()
}
