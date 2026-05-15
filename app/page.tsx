import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { Contact, Footer } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
