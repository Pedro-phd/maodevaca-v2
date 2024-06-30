import { ClientHttp } from './http-client'

interface Props {
  name: string
  description: string
}

export async function newPlanning(props: Props) {
  const res = await ClientHttp.post('plannings', {
    json: {
      ...props,
    },
  })

  return res
}
