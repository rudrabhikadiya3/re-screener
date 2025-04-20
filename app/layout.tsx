import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const InterSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = { title: 'Property Screener | Rudra' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${InterSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
