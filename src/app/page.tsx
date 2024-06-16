import ComingSoonVersion from '@/components/ComingSoonVersion/ComingSoonVersion'
import CountDown from '@/components/CountDown/Countdown'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'

export default function Home() {
  const specificEndDate = new Date('2024-10-31T23:59:59')
  return (
    <>
      {/* Standard Version */}
      <Header />
      <CountDown endDate={specificEndDate} />
      <Footer />
      {/* <ComingSoonVersion /> */}
    </>
  )
}
