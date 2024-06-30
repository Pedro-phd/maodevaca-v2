import { CircleMinus, CirclePlus } from 'lucide-react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Transaction } from '@/domain/transaction/model'
import { formatDate } from '@/lib/utils'

interface Props {
  data?: Transaction[]
}

function PlanningsTransactionsTable({ data }: Props) {
  // const tags = use(getTags())

  return (
    <Table>
      <TableHeader className="bg-stone-100">
        <TableRow>
          <TableHead>Tipo</TableHead>
          <TableHead className="max-w-[200px]">Descrição</TableHead>
          <TableHead>Data de pagamento</TableHead>
          {/* <TableHead>Tags</TableHead> */}
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((r) => {
          return (
            <TableRow key={r.id}>
              <TableCell>
                {r.type === 'INPUT' ? (
                  <CirclePlus className="text-emerald-600" />
                ) : (
                  <CircleMinus className="text-red-600" />
                )}
              </TableCell>
              <TableCell className="line-clamp-3 max-h-[80px] text-ellipsis">
                {r.description}
              </TableCell>
              <TableCell>{formatDate(r.paymentDate)}</TableCell>
              {/* <TableCell className="flex gap-2">
                {r.tagsId.map((t) => {
                  return <Tags key={t} tagId={t} tags={tags} />
                })}
              </TableCell> */}
              <TableCell className="text-right">
                {r.amount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default PlanningsTransactionsTable
