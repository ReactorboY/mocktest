import { auth, signOut } from '@/auth'

const page = async () => {
  const session = await auth()

  if (!session?.user) return null

  return (
    <div>
      Dashboard
      <p>{session?.user.name}</p>
      <form
        action={async () => {
          'use server'
          await signOut({ redirectTo: '/' })
        }}>
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  )
}

export default page
