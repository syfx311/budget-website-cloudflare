import { Header } from '@/components/header'
import { WebsiteNotice } from '@/components/website-notice'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { HowItWorks } from '@/components/how-it-works'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Packages } from '@/components/packages'
import { Contact, Footer } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <WebsiteNotice />
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Portfolio />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
