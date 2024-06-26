import { use } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getPlannings } from '@/http/get-plannings'

import PlanningsTable from './components/plannings-table'

function PlanningsPage() {
  const data = use(getPlannings())

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Planejamentos</CardTitle>
          <CardDescription>
            Aqui você encontra todos seus planejamentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PlanningsTable data={data} />
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanningsPage
