import { auth } from '@/auth'

export default auth((req) => {
  if (req.auth?.user && req.nextUrl.pathname === '/') {
    return Response.redirect(new URL('/dashboard', req.url))
  }

  if (!req.auth) {
    return Response.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ['/dashboard/:path*']
}
