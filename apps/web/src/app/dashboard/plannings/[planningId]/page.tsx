import { use } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTransactionsPlannings } from '@/http/get-transactions-plannings'

import PlanningsTransactionsTable from './components/plannings-transactions-table'

interface Props {
  params: {
    planningId: string
  }
}

function PlanningTransactions({ params }: Props) {
  const data = use(getTransactionsPlannings(params.planningId))

  return (
    <div className="h-full w-full">
      <Card>
        <CardHeader>
          <CardTitle>Transações do plano</CardTitle>
        </CardHeader>
        <CardContent>
          <PlanningsTransactionsTable data={data} />
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanningTransactions
