import localFont from 'next/font/local'
import './globals.css'

const jostFont = localFont({ src: './Jost-VariableFont_wght.ttf', variable: "--font-jost", display: "swap" })


export const metadata = {
  title: 'Home',
  description: 'Tech Kaushalya 2K24',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={jostFont.className}>
      <main className='w-full max-h-screen '>
        {children}
      </main>
      </body>
    </html>
  )
}
