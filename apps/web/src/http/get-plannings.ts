import { Planning } from '@/domain/planning/model'

import { ClientHttp } from './http-client'

export async function getPlannings() {
  const res = await ClientHttp.get('plannings').json<Planning[]>()

  return res
}
