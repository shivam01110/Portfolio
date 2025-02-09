import './globals.css'
import { Poppins } from 'next/font/google'
import { Gloria_Hallelujah as gloria } from "next/font/google"
import MenuCover from '@/components/utilities/MenuCover'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'

})

const glori = gloria({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fancy',
  display: 'swap'
})

export const metadata = {
  title: 'Shivam Kumar | Portfolio',
  description: 'Portfolio of Shivam Kumar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${glori.variable} dark:bg-gray-950 transition-colors selection:bg-primary-500 selection:text-white`}>
        <MenuCover>
          {children}
        </MenuCover>
      </body>
    </html>
  )
}
