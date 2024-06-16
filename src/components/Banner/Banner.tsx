import React from 'react'
import './banner.css'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className='mt-10 h-[343px] rounded-lg border bg-slate-100 flex p-4 shadow-md'>
      <div className='flex justify-center flex-col mx-5 flex-1'>
        <h2 className='text-4xl font-bold'>
          Knowledge + Practise = <span className='text-teal-700'>Success</span>
        </h2>
        <p className=' mt-5 text-lg'>
          Don't just memorize, master your exams. Mockyard puts your knowledge to the test with a
          massive library, personalized insights, and expert-crafted materials. Transform learning
          into exam victory. Start practicing today!
        </p>
        <button className='bg-slate-950 shadow-sm py-4 px-3 mt-10 text-white rounded-lg w-[150px] '>
          Start Free Mock
        </button>
      </div>
      <div className='flex-1 flex justify-end'>
        <Image src='/desktop.png' height={343} width={343} alt='Image by freepik' />
      </div>
    </section>
  )
}

export default Banner
