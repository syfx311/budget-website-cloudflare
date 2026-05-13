import { Header } from '@/components/header'
import { WebsiteNotice } from '@/components/website-notice'
import { ProductsGallery } from '@/components/products-gallery'
import { BinderCollectionPreview } from '@/components/binder-collection-preview'
import { Contact, Footer } from '@/components/contact'

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <WebsiteNotice />
      <Header />
      <div className="pt-20">
        <ProductsGallery />
        <BinderCollectionPreview />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
