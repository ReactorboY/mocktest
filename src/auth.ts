import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    jwt({ token, user, account }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.exp = 24
      }

      return { ...token }
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
        session.user.name = token.name
      }
      return session
    }
  },
  session: {
    strategy: 'jwt'
  }
})
