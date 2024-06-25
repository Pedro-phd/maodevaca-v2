import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { JwtCheck } from './lib/jwt-utils'


export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')


  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
    try {
      const decode = await JwtCheck(token.value)
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (token) {
      try {
        await JwtCheck(token.value)
        return NextResponse.redirect(new URL('/dashboard', request.url))
      } catch (error) {
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }
}