import { ClientHttp } from './http-client'

interface Props {
  planningId: string
  email: string
}

export async function addMember(props: Props) {
  const res = await ClientHttp.post(`plannings/${props.planningId}/members`, {
    json: {
      email: props.email,
    },
  })

  return res
}
