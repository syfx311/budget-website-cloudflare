import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { BinderCollectionPreview } from '@/components/binder-collection-preview'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Budget Binder Collection | Premium Cash Stuffing System',
  description: 'Discover our premium budget binder collection for cash stuffing. Beautiful, functional designs for Filipino families.',
  openGraph: {
    title: 'Budget Binder Collection | Premium Cash Stuffing System',
    description: 'Discover our premium budget binder collection for cash stuffing.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/binder-collection',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-binder.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Binder Collection - Mommy Louise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Binder Collection | Premium Cash Stuffing System',
    description: 'Discover our premium budget binder collection for cash stuffing.',
  },
}

export default function BinderCollectionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <BinderCollectionPreview />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
