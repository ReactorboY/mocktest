import '../../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import StoreProvider from '../provider/StoreProvider'

const inter = Inter({
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
