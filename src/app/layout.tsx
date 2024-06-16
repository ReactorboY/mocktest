import './globals.css'
import { Inter } from 'next/font/google'

import Head from 'next/head'

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
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://mockyard.com/' />
      </Head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
