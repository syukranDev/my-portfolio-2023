'use client'
import './globals.css'
import { Navbar } from './components/Navbar'

import { ThemeProvider } from 'next-themes'

import { Inter } from 'next/font/google'

const inter = Inter({ weight: ['600'], subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
