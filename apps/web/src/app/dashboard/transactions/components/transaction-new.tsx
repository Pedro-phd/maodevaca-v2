'use client'

import { PlusCircle } from 'lucide-react'
import { CurrencyInput } from 'react-currency-mask'

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

import { newTransaction } from './action'

function TransactionNew() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, handleSubmit] = useFormState(newTransaction, () => {
    console.log('opa')
  })

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
                    <Input id="amount" defaultValue={0} name="amount" />
                  }
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="desc">Descrição</Label>
                <Input
                  id="desc"
                  name="desc"
                  placeholder="Saida para jantar ..."
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

export default TransactionNew
