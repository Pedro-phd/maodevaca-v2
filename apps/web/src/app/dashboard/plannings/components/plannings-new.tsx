'use client'

import { CheckCircle2, PlusCircle } from 'lucide-react'
import { toast } from 'sonner'

import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useFormState } from '@/hook/useFormState'

import { newTransactionAction } from './action'

interface Props {
  refetch: () => void
}

function PlanningsNew({ refetch }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, handleSubmit] = useFormState(newTransactionAction, () => {
    toast('Plano adicionado com sucesso', {
      icon: <CheckCircle2 />,
    })
    refetch()
  })
  return (
    <Sheet>
      <SheetTrigger>
        <AnimatedButton
          iconPlacement="left"
          variant="expandIcon"
          Icon={PlusCircle}
        >
          Novo Plano
        </AnimatedButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Novo Plano</SheetTitle>
          <SheetDescription>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="🏖️ Praia"
                  required={true}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Viajar para praia ano que vem ..."
                  required={true}
                />
              </div>

              <AnimatedButton type="submit" variant="ringHover">
                Salvar
              </AnimatedButton>
            </form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default PlanningsNew
