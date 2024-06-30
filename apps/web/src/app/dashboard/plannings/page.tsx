'use client'

import { useQuery } from '@tanstack/react-query'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getPlannings } from '@/http/get-plannings'

import PlanningsNew from './components/plannings-new'
import PlanningsTable from './components/plannings-table'

function PlanningsPage() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['plannings-data'],
    queryFn: getPlannings,
  })

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Planejamentos</CardTitle>
            <CardDescription>
              Aqui você encontra todos seus planejamentos
            </CardDescription>
          </div>
          <PlanningsNew refetch={refetch} />
        </CardHeader>
        <CardContent>
          <PlanningsTable data={data} isLoading={isLoading} />
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanningsPage
