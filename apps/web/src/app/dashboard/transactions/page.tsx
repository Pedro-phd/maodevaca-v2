'use client'

import { useQuery } from '@tanstack/react-query'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getTransactions } from '@/http/get-transactions'

import TransactionNew from './components/transaction-new'
import TransactionTable from './components/transaction-table'

function Transactions() {
  // const data = use(getTransactions())

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['transactions-data'],
    queryFn: getTransactions,
  })

  return (
    <div className="h-full w-full">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Transações</CardTitle>
            <CardDescription>
              Aqui você acha as suas transações do mês!
            </CardDescription>
          </div>
          <TransactionNew refetch={refetch} />
        </CardHeader>
        <CardContent>
          <TransactionTable data={data} isLoading={isLoading} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
