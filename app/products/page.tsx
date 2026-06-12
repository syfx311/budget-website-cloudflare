import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { ProductsGallery } from '@/components/products-gallery'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Budget Planners, Envelopes & Templates - Mommy Louise Shop',
  description: 'Shop custom budget planners, aesthetic envelopes, and budget organizers. Personalized templates for your family budget style. Free delivery Philippines.',
  keywords: ['budget planners', 'budget envelopes', 'budget templates', 'budget organizers', 'aesthetic planners'],
  openGraph: {
    title: 'Budget Planners, Envelopes & Templates - Mommy Louise Shop',
    description: 'Shop custom budget planners, aesthetic envelopes, and budget organizers. Personalized templates for your family budget style. Free delivery Philippines.',
    type: 'website',
    images: [
      {
        url: '/images/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Budget Planners & Templates Shop - Mommy Louise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Planners, Envelopes & Templates - Mommy Louise Shop',
    description: 'Shop custom budget planners, aesthetic envelopes, and budget organizers. Personalized templates for your family budget style.',
  },
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProductsGallery />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
