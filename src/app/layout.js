import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Script src='https://www.google.com/recaptcha/api.js?render=6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-'></Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
