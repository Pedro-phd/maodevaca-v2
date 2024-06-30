import { Skeleton } from './ui/skeleton'
import { TableCell, TableRow } from './ui/table'

interface Props {
  numberOfCol: number
}

function SkeletonTableRow({ numberOfCol = 1 }: Props) {
  return (
    <TableRow>
      {Array.from({ length: numberOfCol }).map((_, i: number) => {
        return (
          <TableCell key={i}>
            <Skeleton className="h-8 w-full rounded" />
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default SkeletonTableRow
