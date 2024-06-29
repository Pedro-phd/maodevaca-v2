import { ClientHttp } from './http-client'

interface Props {
  amount: number
  description: string
  type: string
  paymentDate: string
  tags?: number[]
  planningId?: string
}

export async function newTransaction(props: Props) {
  const res = await ClientHttp.post('transactions/new', {
    json: {
      ...props,
    },
  })

  return res
}
