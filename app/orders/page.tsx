import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from '@/components/header'
import { Footer, Contact } from '@/components/contact'
import { getCanonicalMetadata } from '@/lib/canonical'
import { OrdersHero } from '@/components/orders/orders-hero'
import { OrdersWelcome } from '@/components/orders/orders-welcome'
import { OrdersProcess } from '@/components/orders/orders-process'
import { OrdersReminders } from '@/components/orders/orders-reminders'
import { OrdersForm } from '@/components/orders/orders-form'
import { OrdersFeatures } from '@/components/orders/orders-features'
import { OrdersFAQ } from '@/components/orders/orders-faq'
import { OrdersCTA } from '@/components/orders/orders-cta'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How do I know if my order was received?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You will see a confirmation after successfully submitting the form.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can I edit my order after submission?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Please contact our team as soon as possible if changes are needed.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How long does order processing take?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Processing times may vary depending on product availability and order volume.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What should I do if the form is not loading?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Use the "Open Order Form in New Tab" button to access the ordering system directly.'
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Place Your Order | Mommy Louise Budget PH',
  description: 'Submit your order online through Mommy Louise Budget PH. Fast, convenient, and easy ordering with a smooth customer experience.',
  keywords: ['order', 'products', 'budget binders', 'budget envelopes', 'online ordering'],
  ...getCanonicalMetadata('/orders'),
  openGraph: {
    title: 'Place Your Order | Mommy Louise Budget PH',
    description: 'Submit your order online through Mommy Louise Budget PH. Fast, convenient, and easy ordering with a smooth customer experience.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/orders',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-orders.jpg',
        width: 1200,
        height: 630,
        alt: 'Place Your Order - Mommy Louise Budget PH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Place Your Order | Mommy Louise Budget PH',
    description: 'Submit your order online through Mommy Louise Budget PH. Fast, convenient, and easy ordering.',
  },
}

export default function OrdersPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <OrdersHero />
        <OrdersWelcome />
        <OrdersProcess />
        <OrdersReminders />
        <OrdersForm />
        <OrdersFeatures />
        <OrdersFAQ />
        <OrdersCTA />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
