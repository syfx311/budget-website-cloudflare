import type { Metadata } from 'next'
import Script from 'next/script'
import { appSchema } from '@/lib/schema'
import { getCanonicalMetadata } from '@/lib/canonical'
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
  ...getCanonicalMetadata('/app'),
  title: 'Louise ExpenseDesk - Free Budget & Expense Tracking App Philippines',
  description: 'Free digital budgeting app for Filipino families. Track expenses, manage cash envelopes, and master the cash stuffing method with Louise ExpenseDesk.',
  keywords: ['budgeting app', 'expense tracking app', 'cash envelope app', 'budget management Philippines', 'family finance app', 'free budgeting tool'],
  openGraph: {
    title: 'Louise ExpenseDesk - Free Budget & Expense Tracking App Philippines',
    description: 'Free digital budgeting app for Filipino families. Track expenses and manage cash envelopes with Louise ExpenseDesk.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/app',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-app.jpg',
        width: 1200,
        height: 630,
        alt: 'Louise ExpenseDesk - Budget & Expense Tracking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louise ExpenseDesk - Free Budget & Expense Tracking App Philippines',
    description: 'Free digital budgeting app for Filipino families to track expenses and manage budgets.',
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
