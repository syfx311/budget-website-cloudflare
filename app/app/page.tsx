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

export const metadata = {
  title: 'Louise ExpenseDesk App | Mommy Louise Budget PH',
  description: 'Discover Louise ExpenseDesk, the budgeting and expense management platform for individuals, families, teams, businesses, and enterprises. Message us on Facebook to receive your free access link today.',
}

export default function AppPage() {
  return (
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
  )
}
