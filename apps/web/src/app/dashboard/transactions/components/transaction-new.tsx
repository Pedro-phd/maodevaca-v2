'use client'

import { useQuery } from '@tanstack/react-query'
import { CheckCircle2, PlusCircle } from 'lucide-react'
import { CurrencyInput } from 'react-currency-mask'
import { toast } from 'sonner'

import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useFormState } from '@/hook/useFormState'
import { getPlannings } from '@/http/get-plannings'

import { newTransactionAction } from './action'

interface Props {
  refetch: () => void
}

function TransactionNew({ refetch }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ['plannings-data'],
    queryFn: getPlannings,
  })
  console.log(data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ errors, message, success }, handleSubmit] = useFormState(
    newTransactionAction,
    () => {
      toast('Transação adicionada com sucesso', {
        icon: <CheckCircle2 />,
      })
      refetch()
    },
  )
  return (
    <Sheet>
      <SheetTrigger>
        <AnimatedButton
          iconPlacement="left"
          variant="expandIcon"
          Icon={PlusCircle}
        >
          Nova Transação
        </AnimatedButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nova Transação</SheetTitle>
          <SheetDescription>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="amount">Valor</Label>
                <CurrencyInput
                  onChangeValue={() => {}}
                  InputElement={
                    <Input
                      id="amount"
                      defaultValue={0}
                      name="amount"
                      required={true}
                    />
                  }
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Saida para jantar ..."
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Data de pagamento</Label>
                <Input
                  id="paymentDate"
                  name="paymentDate"
                  required={true}
                  type="date"
                />
              </div>

              <Select name="planningId" disabled={isLoading}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Transação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="empty-planning#hash">
                    Nenhum plano
                  </SelectItem>
                  {data?.map((p) => {
                    return <SelectItem value={p.id}>{p.name}</SelectItem>
                  })}
                </SelectContent>
              </Select>

              <RadioGroup defaultValue="INPUT" name="type">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="INPUT" id="INPUT" />
                  <Label htmlFor="INPUT">Entrada</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="OUTPUT" id="OUTPUT" />
                  <Label htmlFor="OUTPUT">Saida</Label>
                </div>
              </RadioGroup>

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

export default TransactionNew
