import { auth } from '@/auth'
import { error } from 'console'
import { cookies, headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  try {
    const sesssion = await auth()

    const res = await fetch('http://localhost:8001/api/v1/exams/', {
      cache: 'no-store'
    })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      error('Failed to fetch data')
      return
    }
    return res.json()
  } catch (err) {
    console.error(err)
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
}

export default async function Page() {
  const data = await getData()
  data.map((data: any) => console.log(data))

  return (
    <main className='w-full block p-5'>
      <h2 className='text-3xl font-bold'>Exams</h2>
      <section className='flex gap-3 mt-5'>
        {data &&
          data.map((exam: any) => (
            <Link
              href={'/dashboard/tests/' + encodeURIComponent(exam.slug)}
              key={exam.id}
              className='min-w-[150px] border min-h-[50px] py-5  px-3 rounded-md flex justify-center items-center flex-col'>
              <Image src={'/sslogo.png'} width={40} height={40} alt='' />
              <h3 className='text-lg mt-3'>{exam.name}</h3>
            </Link>
          ))}
      </section>
    </main>
  )
}
