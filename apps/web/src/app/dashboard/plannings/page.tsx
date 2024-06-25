import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { mockPlannings } from '@/mock'

import PlanningsTable from './components/plannings-table'

function PlanningsPage() {
  return (
    <div className="flex w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Planejamentos</CardTitle>
          <CardDescription>
            Aqui você encontra todos seus planejamentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PlanningsTable data={mockPlannings} />
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanningsPage
