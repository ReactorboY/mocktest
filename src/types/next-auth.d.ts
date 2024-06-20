import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      _id?: string
      name?: string
      email?: string
      session_expiry: string
    } & DefaultSession['user']
  }

  interface User {
    _id?: string
    name?: string
    email?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string
    name?: string
    email?: string
  }
}
