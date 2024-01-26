import localFont from 'next/font/local'
import './globals.css'
import icon from '@/public/favicon.ico'

const jostFont = localFont({ src: './Jost-VariableFont_wght.ttf', variable: "--font-jost", display: "swap" })


export const metadata = {
  title: 'Home',
  description: 'Tech Kaushalya 2K24',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <link rel="icon" href={icon} sizes="32x32" type="image/x-icon" />
      <body className={jostFont.className}>
      <main className='w-full max-h-screen '>
        {children}
      </main>
      </body>
    </html>
  )
}
