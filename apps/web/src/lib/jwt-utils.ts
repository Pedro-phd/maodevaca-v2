/* eslint-disable prefer-promise-reject-errors */
import { jwtVerify } from 'jose'

export async function JwtCheck(token: string | undefined) {
  const secret = new TextEncoder().encode(process.env.JWT_PRIVATE_KEY ?? '')

  if (secret === undefined || token === undefined || token === '') {
    return Promise.reject()
  }

  return await jwtVerify(token, secret)
}
