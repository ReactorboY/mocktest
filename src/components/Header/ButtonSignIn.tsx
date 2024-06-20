'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

const ButtonSignIn = () => {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className='bg-slate-950 px-4 py-2 text-white rounded-lg'>
      Login
    </button>
  )
}

export default ButtonSignIn
