import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { GalleryShowcase } from '@/components/gallery-showcase'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Budget Planner Design Gallery - 30+ Aesthetic Templates',
  description: 'Explore 30+ beautiful budget planner designs created for Filipino families. From minimalist to colorful templates, find the perfect design that matches your budgeting style.',
  keywords: ['budget planner designs', 'aesthetic planners', 'budget templates', 'planner designs', 'financial planning'],
  openGraph: {
    title: 'Budget Planner Design Gallery - 30+ Aesthetic Templates',
    description: 'Explore 30+ beautiful budget planner designs created for Filipino families. From minimalist to colorful templates, find the perfect design that matches your budgeting style.',
    type: 'website',
    images: [
      {
        url: '/images/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Planner Design Gallery - Mommy Louise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Planner Design Gallery - 30+ Aesthetic Templates',
    description: 'Explore 30+ beautiful budget planner designs for Filipino families. Find your perfect budgeting style.',
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
