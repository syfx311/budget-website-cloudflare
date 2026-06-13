import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { GalleryShowcase } from '@/components/gallery-showcase'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Budget Binder Designs & Templates | Mommy Louise Gallery',
  description: 'Explore aesthetic budget binder designs and cash stuffing templates for Filipino families. Find your perfect budgeting style.',
  keywords: ['budget binder designs', 'aesthetic budgeting templates', 'budget planner designs', 'cash stuffing templates', 'financial planning'],
  openGraph: {
    title: 'Budget Binder Designs & Templates | Mommy Louise Gallery',
    description: 'Explore aesthetic budget binder designs and cash stuffing templates for Filipino families.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/gallery',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Binder Designs & Templates - Mommy Louise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Binder Designs & Templates | Mommy Louise Gallery',
    description: 'Explore aesthetic budget binder designs and templates for Filipino families.',
  },
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <GalleryShowcase />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
