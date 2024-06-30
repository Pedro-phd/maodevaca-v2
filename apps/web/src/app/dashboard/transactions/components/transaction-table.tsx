'use client'

import { format } from 'date-fns'
import { CircleMinus, CirclePlus, SquareArrowOutUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import SkeletonTableRow from '@/components/skeleton-table-row'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Transaction } from '@/domain/transaction/model'
// import { getTags } from '@/http/get-tags'
import { allMonths, formatDate } from '@/lib/utils'

interface Props {
  data?: Transaction[]
  isLoading: boolean
}

function TransactionTable({ data, isLoading = true }: Props) {
  // const tags = use(getTags())

  const today = new Date()
  const month = format(today, 'LLLL')

  const { push } = useRouter()

  const goToPlanning = (planningId: string | null) => {
    push(`/dashboard/plannings/${planningId}`)
  }

  return (
    <Table>
      <TableCaption>Transações do mês de {allMonths[month]}.</TableCaption>
      <TableHeader className="bg-stone-100">
        <TableRow>
          <TableHead>Tipo</TableHead>
          <TableHead className="max-w-[200px]">Descrição</TableHead>
          <TableHead>Data de pagamento</TableHead>
          {/* <TableHead>Tags</TableHead> */}
          <TableHead>Planejamento</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((r) => {
          return (
            <TableRow>
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
                  return <Tags tagId={t} key={t} tags={tags} />
                })}
              </TableCell> */}
              <TableCell className="text-center">
                {r.planningId !== null && (
                  <Button
                    variant="link"
                    onClick={() => goToPlanning(r.planningId)}
                  >
                    <SquareArrowOutUpRight size={16} />
                  </Button>
                )}
                {!r.planningId && '-'}
              </TableCell>
              <TableCell className="text-right">
                {r.amount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          )
        })}
        {isLoading && <SkeletonTableRow numberOfCol={5} />}
      </TableBody>
      {data?.length === 0 ||
        (data === undefined && (
          <TableCell colSpan={6}>
            <p className="text-center text-card-foreground">
              Sem transações nesse mês.
            </p>
          </TableCell>
        ))}
    </Table>
  )
}

export default TransactionTable
