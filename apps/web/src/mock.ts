import { Transaction } from './domain/transaction/model'

export const mockTransactions: Transaction[] = [
  {
    id: 22,
    amount: 1000,
    description:
      'Stipes sopor vulgus spiritus patria comis carbo tamen sufficio. Colligo distinctio soluta commemoro despecto crudelis convoco. Tenetur cito succedo viridis cibo avaritia virtus altus ait vitae.',
    paymentDate: '2024-06-16T16:53:07.590Z',
    type: 'INPUT',
    ownerId: '940c0dfd-c868-440f-b4c9-6aca9c70c2c4',
    tagsId: [14, 15],
    planningId: '715074f8-cd28-41c3-92c7-6edf90d689ba',
    createdAt: '2024-06-16T16:53:07.590Z',
    updatedAt: '2024-06-16T16:53:07.590Z',
  },
  {
    id: 24,
    amount: 10,
    description:
      'Conitor caste inflammatio. Tabella inventore antiquus cibus sollicito quas acquiro acerbitas atrocitas cedo. Tergum commemoro aer carcer censura corona aegre.',
    paymentDate: '2024-06-16T16:53:07.590Z',
    type: 'OUTPUT',
    ownerId: '940c0dfd-c868-440f-b4c9-6aca9c70c2c4',
    tagsId: [14],
    planningId: null,
    createdAt: '2024-06-16T16:53:07.590Z',
    updatedAt: '2024-06-16T16:53:07.590Z',
  },
  {
    id: 25,
    amount: 10123.12,
    description:
      'Cimentarius sonitus via. Vigor curiositas curto tamdiu abstergo volo accedo. Aggredior cohors crur facilis aiunt itaque tepesco argentum.',
    paymentDate: '2024-06-16T16:53:07.590Z',
    type: 'OUTPUT',
    ownerId: '940c0dfd-c868-440f-b4c9-6aca9c70c2c4',
    tagsId: [15],
    planningId: 'b0cb143d-6707-401f-9ae6-243fbcad3142',
    createdAt: '2024-06-16T16:53:07.590Z',
    updatedAt: '2024-06-16T16:53:07.590Z',
  },
  {
    id: 26,
    amount: 31231231237.5,
    description: 'Buasdasdasdasdy the new item for car ...',
    paymentDate: '2024-06-16T16:57:19.281Z',
    type: 'INPUT',
    ownerId: '940c0dfd-c868-440f-b4c9-6aca9c70c2c4',
    tagsId: [1],
    planningId: 'b0cb143d-6707-401f-9ae6-243fbcad3142',
    createdAt: '2024-06-16T16:58:14.965Z',
    updatedAt: '2024-06-16T16:58:14.965Z',
  },
]
