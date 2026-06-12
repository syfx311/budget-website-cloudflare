import type { Metadata } from 'next'
import Script from 'next/script'
import { appSchema } from '@/lib/schema'
import { Header } from '@/components/header'
import { AppHero } from '@/components/app/app-hero'
import { AppShowcase } from '@/components/app/app-showcase'
import { AppAbout } from '@/components/app/app-about'
import { AppWhyCreated } from '@/components/app/app-why-created'
import { AppUseCase } from '@/components/app/app-use-cases'
import { AppFeatures } from '@/components/app/app-features'
import { AppBenefits } from '@/components/app/app-benefits'
import { AppPromotion } from '@/components/app/app-promotion'
import { AppFacebook } from '@/components/app/app-facebook'
import { AppTestimonials } from '@/components/app/app-testimonials'
import { AppFAQ } from '@/components/app/app-faq'
import { AppCTA } from '@/components/app/app-cta'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Louise ExpenseDesk - Budget & Expense Tracking App for Families',
  description: 'Free budgeting app for families, teams, and businesses. Track expenses, manage cash envelopes digitally, and build better financial habits with Louise ExpenseDesk.',
  keywords: ['budgeting app', 'expense tracking app', 'budget management', 'family budget app', 'cash envelope app'],
  openGraph: {
    title: 'Louise ExpenseDesk - Budget & Expense Tracking App for Families',
    description: 'Free budgeting app for families, teams, and businesses. Track expenses, manage cash envelopes digitally, and build better financial habits.',
    type: 'website',
    images: [
      {
        url: '/images/og-app.jpg',
        width: 1200,
        height: 630,
        alt: 'Louise ExpenseDesk - Budget & Expense Tracking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louise ExpenseDesk - Budget & Expense Tracking App for Families',
    description: 'Free budgeting app for families, teams, and businesses. Track expenses and manage cash envelopes digitally.',
  },
}

export default function AppPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <main className="min-h-screen">
      <Header />
      <AppHero />
      <AppShowcase />
      <AppAbout />
      <AppWhyCreated />
      <AppUseCase />
      <AppFeatures />
      <AppBenefits />
      <AppPromotion />
      <AppFacebook />
      <AppTestimonials />
      <AppFAQ />
      <AppCTA />
      <Footer />
    </main>
    </>
  )
}
