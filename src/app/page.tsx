import { auth } from '@/auth'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { redirect } from 'next/navigation'

export default async function Home() {
  const specificEndDate = new Date('2024-10-31T23:59:59')
  const session = await auth()

  if (session?.user) {
    redirect('/dashboard')
  }

  return (
    <>
      {/* Standard Version */}
      <Header />

      <Footer />
      {/* <ComingSoonVersion /> */}
    </>
  )
}
