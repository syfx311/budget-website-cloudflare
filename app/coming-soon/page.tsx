import { Header } from '@/components/header'
import { ComingSoonContent } from '@/components/coming-soon-content'
import { Contact, Footer } from '@/components/contact'

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ComingSoonContent />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
