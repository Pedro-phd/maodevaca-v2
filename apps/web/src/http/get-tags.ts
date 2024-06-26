import { Tag } from '@/domain/tag/model'

import { ClientHttp } from './http-client'

export async function getTags() {
  const res = await ClientHttp.get('tags').json<Tag[]>()

  return res
}
