import { Header } from '@/components/header'
import { WebsiteNotice } from '@/components/website-notice'
import { GalleryShowcase } from '@/components/gallery-showcase'
import { Contact, Footer } from '@/components/contact'

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <WebsiteNotice isPopup />
      <Header />
      <div className="pt-20">
        <GalleryShowcase />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
