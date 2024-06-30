import { Planning } from '@/domain/planning/model'

import { ClientHttp } from './http-client'

export async function getPlannings() {
  return ClientHttp.get('plannings').json<Planning[]>()
}
