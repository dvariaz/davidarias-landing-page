import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const goboldItalicFont = localFont({
  src: '../assets/fonts/GoboldItalic-Italic.woff2',
  display: 'swap',
  variable: '--font-gobold-italic',
})

export const goboldHollowFont = localFont({
  src: '../assets/fonts/GoboldHollowItalic-Italic.woff2',
  display: 'swap',
  variable: '--font-gobold-hollow',
})

export const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})
