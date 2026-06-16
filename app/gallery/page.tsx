import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from '@/components/header'
import { GalleryShowcase } from '@/components/gallery-showcase'
import { Contact, Footer } from '@/components/contact'
import { getCanonicalMetadata } from '@/lib/canonical'

export const metadata: Metadata = {
  ...getCanonicalMetadata('/gallery'),
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

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Budget Binder Designs & Templates Gallery',
  description: 'Explore aesthetic budget binder designs and cash stuffing templates for Filipino families.',
  url: 'https://mommylouisebudgetph.com/gallery',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Mommy Louise Budget PH',
    url: 'https://mommylouisebudgetph.com',
  },
  mainEntity: {
    '@type': 'ImageCollection',
    name: 'Budget Binder Designs & Templates',
    description: 'Collection of aesthetic budget binder designs, savings challenge templates, and cash stuffing systems for Filipino families.',
    creator: {
      '@type': 'Person',
      name: 'Mommy Louise',
    },
  },
}

export default function GalleryPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <GalleryShowcase />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
