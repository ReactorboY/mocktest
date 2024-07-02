import './globals.css'
import { Inter } from 'next/font/google'

import Head from 'next/head'

const inter = Inter({
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'MockYard - The Arena Where Champions Sweat & Rise from Ashes',
  description: `Knowledge isn't enough! Mockyard puts you through the test, reveals your strengths & weaknesses, and empowers you to strategize with detailed analysis.`,
  openGraph: {
    siteName: 'Mockyard',
    url: 'https://www.mockyard.com'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
