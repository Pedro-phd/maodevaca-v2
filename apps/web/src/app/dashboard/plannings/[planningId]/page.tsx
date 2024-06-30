'use client'
import { useQuery } from '@tanstack/react-query'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getPlannings } from '@/http/get-plannings'
import { getTransactionsPlannings } from '@/http/get-transactions-plannings'

import PlanningsMembers from '../components/plannings-members'
import PlanningsTransactionsTable from '../components/plannings-transactions-table'

interface Props {
  params: {
    planningId: string
  }
}

function PlanningTransactions({ params }: Props) {
  const { data } = useQuery({
    queryKey: ['plannings-transactions-data'],
    queryFn: () => getTransactionsPlannings(params.planningId),
  })
  const plannings = useQuery({
    queryKey: ['plannings-data'],
    queryFn: getPlannings,
  })

  const currentPlanning = plannings.data?.find(
    (p) => p.id === params.planningId,
  )

  console.log(currentPlanning)

  return (
    <div className="h-full w-full">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Transações do plano {currentPlanning?.name}</CardTitle>
          <PlanningsMembers
            members={currentPlanning?.members}
            ownerId={currentPlanning?.ownerId}
            planningId={params.planningId}
            refetch={plannings.refetch}
          />
        </CardHeader>
        <CardContent>
          <PlanningsTransactionsTable data={data} />
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanningTransactions
