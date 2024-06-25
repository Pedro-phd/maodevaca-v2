import { ExternalLink } from 'lucide-react'

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
  data: Planning[]
}

function PlanningsTable({ data }: Props) {
  const members = data.map((d) => d.members.map((m) => m.user))[0]
  console.log(members)

  return (
    <Table>
      <TableCaption>Lista de todos seus planos.</TableCaption>
      <TableHeader className="bg-stone-100">
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Membros</TableHead>
          <TableHead className="text-right">Acessar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d) => {
          return (
            <TableRow key={d.id}>
              <TableCell className="font-medium">{d.name}</TableCell>
              <TableCell>{d.description}</TableCell>
              <TableCell className="flex gap-2">
                {members.map((m) => {
                  return (
                    <Avatar>
                      <AvatarImage src={m.avatarUrl} />
                      <AvatarFallback>
                        {m.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )
                })}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="link">
                  <ExternalLink />
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default PlanningsTable
