import { getCookie } from 'cookies-next'
import { CookiesFn } from 'cookies-next/lib/types'
import ky from 'ky'

export const ClientHttp = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (req) => {
        let cookieStore: CookiesFn | undefined

        if (typeof window === 'undefined') {
          const { cookies: serverCookies } = await import('next/headers')
          cookieStore = serverCookies
        }

        const token = getCookie('token', { cookies: cookieStore })

        if (token) {
          req.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
