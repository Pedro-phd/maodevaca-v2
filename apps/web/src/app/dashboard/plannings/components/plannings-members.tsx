'use client'

import { AlertCircle, CheckCircle2, Crown, Users } from 'lucide-react'
import { toast } from 'sonner'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Member } from '@/domain/member/model'
import { useFormState } from '@/hook/useFormState'
import { cn } from '@/lib/utils'

import { addMemberAction } from './action'

interface Props {
  members?: Member[]
  ownerId?: string
  planningId: string
  refetch: () => void
}

function PlanningsMembers({ members, ownerId, planningId, refetch }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ success, message }, handleSubmit] = useFormState(
    addMemberAction,
    () => {
      toast('Memebro adicionado com sucesso', {
        icon: <CheckCircle2 />,
      })
      refetch()
    },
  )
  return (
    <Sheet>
      <SheetTrigger>
        <AnimatedButton iconPlacement="left" variant="expandIcon" Icon={Users}>
          Membros
        </AnimatedButton>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Membros</SheetTitle>
        </SheetHeader>
        <p className="text-sm text-muted-foreground">Novo Membro</p>
        {!success && message && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            id="planningId"
            name="planningId"
            value={planningId}
            // disabled
            className="hidden"
          />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="acme@email.com"
              required={true}
              type="email"
            />
          </div>
          <AnimatedButton type="submit" variant="ringHover">
            Adicionar
          </AnimatedButton>
        </form>
        <Separator />
        <small className="text-sm text-muted-foreground">
          Lista de membros
        </small>

        <div className="rounded border bg-stone-50 px-3 py-2">
          {members?.map((m) => {
            const isOwner = ownerId === m.user.id

            return (
              <div
                className="flex items-center gap-4 rounded px-2 py-1"
                key={m.id}
              >
                <Avatar className={cn('border-2', isOwner && 'border-primary')}>
                  <AvatarImage src={m.user.avatarUrl ?? ''} />
                  <AvatarFallback>
                    {m.user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-2">
                    <p className="text-sm font-medium capitalize leading-none">
                      {m.user.name}
                    </p>
                    {isOwner && <Crown className="size-4 text-yellow-400" />}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{m.user.email}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default PlanningsMembers
