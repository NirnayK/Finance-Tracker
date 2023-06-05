import './globals.css'
import { Inter } from 'next/font/google'
import CustomSessionProvider from '@/components/CustomSessionProvider'
import Navbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Finance Tracker',
  description: 'A finance tracker app built with Next.js ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <CustomSessionProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </CustomSessionProvider>
    </html>
  )
}
