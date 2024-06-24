'use client'
import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import { Equal } from 'lucide-react'
import Nav from '../navigation/nav'
import { sendVerificationEmail } from '@/helpers/sendVerificationEmail'

const LandingPage = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    console.log('Call send API here')

    await sendVerificationEmail('JACK', 'mockyardhelp@gmail.com', '123456789')
  }
  return (
    <main className='min-h-screen min-w-screen flex flex-col px-4'>
      <Nav />
      <div className='flex justify-start items-center flex-col grow'>
        <div className='flex flex-col gap-3'>
          <h1 className='mt-40 text-5xl font-bold uppercase'>Enter the Mockyard:</h1>
          <h2 className='text-3xl font-semibold'>
            Battle-Test Your Skills & Conquer Your Govt. Exam
          </h2>
          <div className='w-[700px] mt-5'>
            <p className='text-gray-500'>
              The Mockyard isn&apos;t just a practice ground - it&apos;s your arena for exam
              mastery! We provide you with the most realistic mock tests, strategically designed to
              mirror the actual Central Government exams. Sharpen your skills, identify your
              strengths and weaknesses, and build the confidence you need to ace your exam day.
            </p>
          </div>
          <div className='mt-10'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}>
              <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-[300px] border px-5 py-3'
              />
              <button className='ml-4  px-5 py-3 rounded-lg bg-slate-900 text-white' type='submit'>
                Enter the Arena
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
