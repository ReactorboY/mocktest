import { signIn } from '@/auth'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <form
        className=''
        action={async () => {
          'use server'
          await signIn('google', { redirectTo: '/dashboard' })
        }}>
        <button className='px-3 py-4 bg-slate-50' type='submit'>
          Signin with Google
        </button>
      </form>
    </div>
  )
}

export default page
