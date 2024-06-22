export interface Transaction {
  id: number
  amount: number
  description: string
  paymentDate: string
  type: 'INPUT' | 'OUTPUT'
  tagsId: number[]
  planningId: string | null
  ownerId: string
  createdAt: string
  updatedAt: string
}
