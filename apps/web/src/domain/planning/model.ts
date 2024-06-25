import { Member } from '../member/model'

export interface Planning {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  ownerId: string | null
  members: Member[]
}
