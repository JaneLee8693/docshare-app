"use client"
import { useState } from 'react'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
// import Toast from './_components/Toast'
import ToastContext from './../context/ToastContext'
const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'DocShare',
  description: 'File sharing app developed by Jane Lee',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  // const [toast, setToast] = useState('');
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
