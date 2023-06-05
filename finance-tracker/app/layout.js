import './globals.css'
import {Inter} from 'next/font/google'
import CustomSessionProvider from '@/components/CustomSessionProvider'
import {QueryClient, QueryClientProvider} from "react-query";
import Navbar from "@/components/NavBar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Finance Tracker',
  description: 'A finance tracker app built with Next.js ',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className="bg-white">
    <body className={inter.className}>
    <CustomSessionProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Navbar/>
        {children}
      </QueryClientProvider>
    </CustomSessionProvider>
    </body>
    </html>
  )
}
