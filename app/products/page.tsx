import { Header } from '@/components/header'
import { ProductsGallery } from '@/components/products-gallery'
import { ProductLaunchModal } from '@/components/product-launch-modal'
import { Contact, Footer } from '@/components/contact'

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductLaunchModal />
      <Header />
      <div className="pt-20">
        <ProductsGallery />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
