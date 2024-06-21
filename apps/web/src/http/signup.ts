import { ClientHttp } from './http-client'

export async function signUp(name: string, email: string, password: string) {
  const res = await ClientHttp.post('users/new', {
    json: {
      name,
      email,
      password,
    },
  })

  return res
}
