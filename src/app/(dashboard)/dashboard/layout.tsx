import '../../globals.css'
import { Inter } from 'next/font/google'

import Sidebar from '@/components/Sidebar/Sidebar'

const inter = Inter({
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'MockYard: Where Champions are Tested',
  description: `Knowledge is nothing without Application! Mockyard puts you through the test, reveals your strengths & weaknesses, and empowers you to strategize with detailed result analysis.`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <section className='flex'>
          <aside className='h-screen min-h-screen min-w-[200px]'>
            <Sidebar />
          </aside>
          <main className=''>{children}</main>
        </section>
      </body>
    </html>
  )
}
