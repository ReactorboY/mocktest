import Image from 'next/image'

const Banner = () => {
  return (
    <section className='mt-10 rounded-lg border flex justify-center overflow-hidden shadow-sm bg-[url("/bg.jpg")] bg-cover'>
      <div className='flex justify-center items-center flex-col w-4/6'>
        <h2 className='text-5xl mt-20 font-bold'>Knowledge + Practise = Marks</h2>

        <div className='flex items-center'>
          <Image src='/study.svg' width={400} height={300} alt='study' />
          <div className='flex  flex-col  h-[60%]'>
            <p className='mt-6 text-gray-500'>
              Don't just memorize, master your exams. Mockyard puts your knowledge to the test with
              a massive library, personalized insights, and expert-crafted materials. Transform
              learning into exam victory. Start practicing today!
            </p>
            <button className='text-white mt-4 py-4 px-3 rounded-lg bg-primary w-[200px]'>
              Take a Free Mock
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
