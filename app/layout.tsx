import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display, Noto_Sans_Adlam, Noto_Sans, DM_Sans, Allura, Grand_Hotel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { BackToTop } from '@/components/back-to-top'
import { organizationSchema, breadcrumbSchema, websiteSearchSchema } from '@/lib/schema'
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

const notoSansAdlam = Noto_Sans_Adlam({
  subsets: ["latin"],
  variable: '--font-noto-sans-adlam',
  weight: ['400', '500', '600', '700']
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: '--font-noto-sans',
  weight: ['400', '500', '600', '700']
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700']
})

const allura = Allura({
  subsets: ["latin"],
  variable: '--font-handwrite',
  weight: ['400']
})

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  variable: '--font-grand-hotel',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Cash Stuffing Method - Budget Envelopes & Templates for Filipino Families',
  description: 'Learn the proven cash stuffing method with beautiful budget envelopes. Transform your family finances with our customizable budgeting system designed for Filipino households.',
  keywords: ['cash stuffing', 'budget envelopes', 'family budget', 'money management', 'savings', 'personal finance Philippines', 'budget templates'],
  authors: [{ name: 'Mommy Louise' }],
  openGraph: {
    title: 'Cash Stuffing Method - Budget Envelopes & Templates for Filipino Families',
    description: 'Learn the proven cash stuffing method with beautiful budget envelopes. Transform your family finances with our customizable budgeting system designed for Filipino households.',
    type: 'website',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Cash Stuffing Budget Envelopes - Mommy Louise Budget PH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cash Stuffing Method - Budget Envelopes & Templates for Filipino Families',
    description: 'Learn the proven cash stuffing method with beautiful budget envelopes. Transform your family finances with our customizable budgeting system designed for Filipino households.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSearchSchema) }}
        />
      </head>
      <body className={`${geist.variable} ${playfair.variable} ${notoSansAdlam.variable} ${notoSans.variable} ${dmSans.variable} ${allura.variable} ${grandHotel.variable} font-sans antialiased`}>
        {children}
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
