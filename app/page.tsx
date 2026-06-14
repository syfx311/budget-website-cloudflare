import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { HowItWorks } from '@/components/how-it-works'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Packages } from '@/components/packages'
import { HomeFAQ } from '@/components/faq-home'
import { SeoContentSection } from '@/components/seo-content-section'
import { Contact, Footer } from '@/components/contact'
import { getCanonicalMetadata } from '@/lib/canonical'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is the cash stuffing method?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Cash stuffing is a hands-on budgeting technique where you allocate physical cash into labeled envelopes for different spending categories. This visual, tangible approach helps you see exactly where your money goes, control spending impulses, and build better money habits.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do I get started with cash stuffing?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Getting started is simple: Choose your budget categories, get your budget templates or envelopes, divide your monthly income according to your plan, and stuff the cash into labeled envelopes. Our personalized templates make this process easy and organized.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is cash stuffing better than digital budgeting apps?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Both have benefits! Cash stuffing gives you immediate visual feedback and makes you more intentional with spending. Digital apps offer convenience and detailed tracking. Many people use a combination of both approaches.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How long does it take to see results?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Most families notice results within the first month of consistent cash stuffing. Within 2-3 months, you\'ll have built solid money habits. By month 6, many families report significantly increased savings and improved financial confidence.'
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Cash Stuffing Budget Binders, Envelopes & Savings Challenges Philippines | Mommy Louise Budget PH',
  description: 'Discover premium cash stuffing budget binders, envelopes, savings challenges, and budgeting tools designed for Filipino families. Master envelope budgeting with our proven system.',
  ...getCanonicalMetadata('/'),
}

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <HowItWorks />
        <Portfolio />
        <Packages />
        <Testimonials />
        <SeoContentSection />
        <HomeFAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
