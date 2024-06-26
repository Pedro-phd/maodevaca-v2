import { use } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getTransactions } from '@/http/get-transactions'

import TransactionTable from './components/transaction-table'

function Transactions() {
  const data = use(getTransactions())
  return (
    <div className="h-full w-full">
      <Card>
        <CardHeader>
          <CardTitle>Transações</CardTitle>
          <CardDescription>
            Aqui você acha as suas transações do mês!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionTable data={data} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
