import { ClientHttp } from './http-client'

interface Response {
  token: string
}

export async function signIn(email: string, password: string) {
  const res = await ClientHttp.post('auth/login', {
    json: {
      email,
      password,
    },
  }).json<Response>()

  return res
}
