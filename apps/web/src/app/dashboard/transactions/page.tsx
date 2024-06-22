import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { mockTransactions } from '@/mock'

import TransactionTable from './components/transaction-table'

function Transactions() {
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
          <TransactionTable data={mockTransactions} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
