'use client'
import { increment } from '@/lib/features/counter/CounterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React from 'react'

const Navbar = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <nav className='h-[60px] shadow-md flex justify-between items-center px-4'>
      <h2 className='font-bold text-2xl'>MockYard</h2>
      {count} <button onClick={() => dispatch(increment())}>Increase</button>
    </nav>
  )
}

export default Navbar
