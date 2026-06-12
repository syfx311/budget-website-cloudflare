import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { ComingSoonContent } from '@/components/coming-soon-content'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Coming Soon - New Budget Solutions from Mommy Louise',
  description: 'Stay tuned for exciting new budget planning features, templates, and financial tools coming soon from Mommy Louise Budget PH. Subscribe for updates.',
  keywords: ['coming soon', 'budget tools', 'financial planning', 'money management', 'budget solutions'],
  openGraph: {
    title: 'Coming Soon - New Budget Solutions from Mommy Louise',
    description: 'Stay tuned for exciting new budget planning features and financial tools coming soon from Mommy Louise Budget PH.',
    type: 'website',
    images: [
      {
        url: '/images/og-coming-soon.jpg',
        width: 1200,
        height: 630,
        alt: 'Coming Soon - Mommy Louise Budget PH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon - New Budget Solutions from Mommy Louise',
    description: 'Stay tuned for exciting new budget planning features coming soon.',
  },
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ComingSoonContent />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
