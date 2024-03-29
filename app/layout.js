import './globals.css'
import { Inter } from 'next/font/google'
import Topnav from '@/components/nav/Topnav'
const inter = Inter({ subsets: ['latin'] })
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: 'Kindlecave',
  description: 'Ecommerce Site for k12 Students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topnav/>
         <NextTopLoader
      height={3}
      speed={50}
      />
        {children}
        </body>
    </html>
  )
}
