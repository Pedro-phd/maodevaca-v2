'use client'

import { ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

import SkeletonTableRow from '@/components/skeleton-table-row'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { Planning } from '@/domain/planning/model'

interface Props {
  data?: Planning[]
  isLoading: boolean
}

function PlanningsTable({ data, isLoading = true }: Props) {
  const { push } = useRouter()
  const goToTransactions = (id: string) => {
    push(`/dashboard/plannings/${id}`)
  }

  return (
    <Table>
      <TableCaption>Lista de todos seus planos.</TableCaption>
      <TableHeader className="bg-stone-100">
        <TableRow>
          <TableHead className="">Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Membros</TableHead>
          <TableHead className="text-right">Acessar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((d) => {
          return (
            <TableRow key={d.id}>
              <TableCell className="font-medium">{d.name}</TableCell>
              <TableCell>{d.description}</TableCell>
              <TableCell className="flex gap-2">
                {d.members.map((m) => {
                  return (
                    <Avatar>
                      <AvatarImage src={m.user.avatarUrl ?? ''} />
                      <AvatarFallback>
                        {m.user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )
                })}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="link" onClick={() => goToTransactions(d.id)}>
                  <ExternalLink />
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
        {isLoading && <SkeletonTableRow numberOfCol={4} />}
      </TableBody>
    </Table>
  )
}

export default PlanningsTable
