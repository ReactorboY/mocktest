import React from 'react'
import CountDown from '../CountDown/Countdown'
import Footer from '../Footer/Footer'
function ComingSoonVersion1() {
    const specificEndDate = new Date('2024-10-31T23:59:59');

  return (
    <>
        <section className="flex min-h-screen flex-col w-full items-center justify-between p-5 lg:p-12">
          
            <CountDown endDate={specificEndDate} />
            
            <Footer />
        </section>
    </>
  )
}

export default ComingSoonVersion1