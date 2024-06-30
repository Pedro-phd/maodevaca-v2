import { User } from '../user/model'

export interface Member {
  id: string
  user: Pick<User, 'name' | 'avatarUrl' | 'email' | 'id'>
}
