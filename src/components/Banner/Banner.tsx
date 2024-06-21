import Image from 'next/image'

const Banner = () => {
  return (
    <section className='mt-10 rounded-lg  flex justify-center overflow-hidden  bg-primary-700 pb-10'>
      <div className='flex justify-center items-center flex-col w-4/6'>
        <h2 className='text-5xl mt-20 font-bold'>Knowledge + Practise = Marks</h2>

        <div className='flex items-center justify-center'>
          <div className='flex flex-col ml-10 w-[50%]'>
            <p className='mt-6 text-gray-500'>
              Don&apos;t just memorize, master your exams. Mockyard puts your knowledge to the test
              with a massive library, personalized insights, and expert-crafted materials. Transform
              learning into exam victory. Start practicing today!
            </p>
            <button className='text-white mt-10 py-4 px-3 rounded-lg bg-slate-700 w-[200px]'>
              Take a Free Mock
            </button>
          </div>
          <Image src='/study.svg' width={200} height={100} alt='study' className='mt-10' />
        </div>
      </div>
    </section>
  )
}

export default Banner
