import { Header } from '@/components/header'
import { WebsiteNotice } from '@/components/website-notice'
import { BinderCollectionPreview } from '@/components/binder-collection-preview'
import { Contact, Footer } from '@/components/contact'

export default function BinderCollectionPage() {
  return (
    <main className="min-h-screen">
      <WebsiteNotice />
      <Header />
      <div className="pt-20">
        <BinderCollectionPreview />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
