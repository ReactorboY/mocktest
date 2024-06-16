import React from 'react'
import './featured.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <section className='mt-10 h-[250px] rounded-lg bg-blue-400 flex p-4'>
      <div className='flex-1 flex justify-center flex-col mx-10'>
        <h2 className='text-3xl font-bold text-white'>Battle Test your Preparation</h2>
        <h3 className='text-xl'>Where Champions are Tested</h3>
        <button className='bg-white py-4 px-3 mt-8 rounded-lg w-[150px]'>Start Free Mock</button>
      </div>
      <div className='flex-1 w-full justify-end flex'>
        <Image src='/hardwork.png' height={200} width={300} alt='' />
      </div>
    </section>
  )
}

export default Featured
