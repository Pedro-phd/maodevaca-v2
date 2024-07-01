import { Planning } from '@/domain/planning/model'

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

export const mockPlannings: Planning[] = [
  {
    id: '546e8528-9480-4f23-bac7-09c4648a0bc4',
    name: 'overfeed',
    description:
      'Turbo ventus sollicito cuius tonsor delectus decimus. Agnitio uberrime aiunt amo ter thalassinus suppono. Tergiversatio quia sursum.',
    createdAt: '2024-06-25T04:12:14.236Z',
    updatedAt: '2024-06-25T04:12:14.236Z',
    ownerId: '1cc9958e-6bf9-4971-ae2c-0f99eba7d561',
    members: [
      {
        id: '8edff125-3b1b-4739-b098-0bb0506daebb',
        user: {
          name: 'admin',
          avatarUrl: null,
          id: '1',
          email: 'admin@email.com',
        },
      },
      {
        id: '2129f80b-af1d-4a46-86c8-84132c044400',
        user: {
          name: 'Celia Konopelski',
          avatarUrl: 'https://avatars.githubusercontent.com/u/13225608',
          id: '2',
          email: 'celia@email.com',
        },
      },
    ],
  },
  {
    id: '2beac356-b32b-42a4-87b2-ebedb7b8cb5c',
    name: 'hunker',
    description:
      'Comminor explicabo vereor verto cariosus arcus cras adopto vos cursim. Volaticus absens eveniet alo apostolus ater. Aveho carcer absum quo video coruscus vigilo torrens contabesco officiis.',
    createdAt: '2024-06-25T04:12:14.240Z',
    updatedAt: '2024-06-25T04:12:14.240Z',
    ownerId: '1cc9958e-6bf9-4971-ae2c-0f99eba7d561',
    members: [
      {
        id: 'd7f8398e-95f3-463e-bbc5-34da9697f611',
        user: {
          name: 'admin',
          avatarUrl: null,
          id: '1',
          email: 'admin@email.com',
        },
      },
      {
        id: '4f5c3c94-8fca-44b8-b083-d3796a492f28',
        user: {
          name: 'Celia Konopelski',
          avatarUrl: 'https://avatars.githubusercontent.com/u/13225608',
          id: '2',
          email: 'celia@email.com',
        },
      },
    ],
  },
  {
    id: '809db250-d9ff-4b21-beac-45ee742aa28f',
    name: 'instill',
    description:
      'Voco xiphias tego avaritia. Universe adimpleo qui non crebro tempora facilis vitium ante. Quas comedo subnecto ver tamen.',
    createdAt: '2024-06-25T04:12:14.243Z',
    updatedAt: '2024-06-25T04:12:14.243Z',
    ownerId: '1cc9958e-6bf9-4971-ae2c-0f99eba7d561',
    members: [
      {
        id: 'e1c3f5f0-175c-42d6-aa01-ebb08daaf03a',
        user: {
          name: 'admin',
          avatarUrl: null,
          id: '1',
          email: 'admin@email.com',
        },
      },
      {
        id: 'fccebb07-bd74-45fe-a1c1-373179f22570',
        user: {
          name: 'Celia Konopelski',
          avatarUrl: 'https://avatars.githubusercontent.com/u/13225608',
          id: '2',
          email: 'celia@email.com',
        },
      },
    ],
  },
]
