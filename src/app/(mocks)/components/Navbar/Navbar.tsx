import { useAppSelector } from '@/lib/hooks'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[60px] shadow-md flex justify-between items-center px-4'>
      <h2 className='font-bold text-2xl'>MockYard</h2>
    </nav>
  )
}

export default Navbar
