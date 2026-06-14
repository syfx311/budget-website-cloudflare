import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from '@/components/header'
import { ProductsGallery } from '@/components/products-gallery'
import { Contact, Footer } from '@/components/contact'
import { getCanonicalMetadata } from '@/lib/canonical'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Premium Budget Planners & Envelopes | Mommy Louise Shop',
  description: 'Shop custom budget binders, aesthetic envelopes, and personalized budgeting templates for Filipino families. Premium quality, free delivery Philippines.',
  keywords: ['budget planners', 'budget binders', 'budget envelopes', 'budget templates', 'cash stuffing envelopes', 'aesthetic planners'],
  ...getCanonicalMetadata('/products'),
  openGraph: {
    title: 'Premium Budget Planners & Envelopes | Mommy Louise Shop',
    description: 'Shop custom budget binders, envelopes, and personalized budgeting templates for Filipino families.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/products',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Budget Binders & Templates - Mommy Louise Shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Budget Planners & Envelopes | Mommy Louise Shop',
    description: 'Shop custom budget binders, envelopes, and budgeting templates for Filipino families.',
  },
}

export default function ProductsPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <ProductsGallery />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
