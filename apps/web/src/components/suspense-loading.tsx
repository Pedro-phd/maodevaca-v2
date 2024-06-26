import { Card, CardContent } from './ui/card'
import { Skeleton } from './ui/skeleton'

function SuspenseLoading() {
  return (
    <Card>
      <CardContent>
        <Skeleton className="roundend" />
      </CardContent>
    </Card>
  )
}

export default SuspenseLoading
