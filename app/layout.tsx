import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Mommy Louise Budget | Cash Stuffing & Budget Templates',
  description: 'Take control of your money with beautiful cash stuffing templates and budget envelopes. Simple, visual, and satisfying way to manage your family finances.',
  keywords: ['cash stuffing', 'budget envelopes', 'family budget', 'money management', 'savings'],
  authors: [{ name: 'Mommy Louise' }],
  openGraph: {
    title: 'Mommy Louise Budget | Cash Stuffing & Budget Templates',
    description: 'Take control of your money with beautiful cash stuffing templates and budget envelopes.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#e85a8f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
