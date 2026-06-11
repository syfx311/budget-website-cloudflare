'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ImageModal } from '@/components/masonry-image-modal'

const galleryImages = [
  // Product Designs
  { id: 1, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/715969874_1747474516410302_3756133849334655963_n-VzYhxi1xEiQWVpq0FTEkYGBINFIqBH.jpg', alt: 'Pink Checkered Binder Collection' },
  { id: 2, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/716229960_1493503895902549_6147637086174305808_n-v3hcLCnKlzwPgJ0ns4FN3OSg3odtqw.jpg', alt: 'Floral Budget Organizer Cards' },
  { id: 3, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/719148646_999453012774996_6274572490147430472_n-F8DUDCByI48HiMMpM4xegCCcN4VZdK.jpg', alt: '100k Savings Challenge Budget Planner' },
  { id: 4, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/716329907_1787604458891555_5986076942112204960_n-SZ2GUU64AmczEK9CYBa6hT4WUTG4NO.jpg', alt: 'Yellow Green Sinking Funds Cards' },
  { id: 5, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/714930560_1179497107694689_6966121322948553748_n-DPfcxXDUxbosTUuWsTB6oFsngYQg6C.jpg', alt: 'Beige Floral Monthly Binder' },
  { id: 6, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/715749859_28163290499937341_7457507059605810008_n-BqilkdQsI5MIl6HnQa3KuR9ILKVTpY.jpg', alt: 'Aesthetic Household Budget Planner' },
  { id: 7, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/715375742_2008106906732193_6714402345513427369_n-b1FF5WyqPmdgAYtGsZy4g8NJcSBSZi.jpg', alt: 'Vintage Stewardship Budget Collection' },
  { id: 8, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/710388363_1006710161823477_2473827541225585822_n-i4juMHjwwiqadaGuEMJimu1wMctNuK.jpg', alt: 'Pink Illustrated Budget Binder' },
  { id: 9, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/715216832_2300137997460738_5998579637912139122_n-iNC4p8oJexKhSPBm0a5dK1RMp8OxRz.jpg', alt: 'Aesthetic Budget Era Planner' },
  { id: 10, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/719300983_2229962241136947_588258290332643950_n-qhHX980pLADI8d1Gs9BqvXp6skJj1Q.jpg', alt: 'Sinking Funds Budget Tracker' },
]

export function GalleryShowcase() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gingham Background */}
      <div className="absolute inset-0 gingham-pattern opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-noto-sans text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 text-balance">
            Design <span className="font-signature text-5xl md:text-6xl lg:text-7xl text-primary">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our beautiful collection of budget planner designs
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedImage(image)
                setIsModalOpen(true)
              }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/50 transition-all shadow-md hover:shadow-lg group bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                loading={index < 6 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16"
        >
          <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Unique Designs</div>
          </div>
          <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Customizable</div>
          </div>
          <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">Fast</div>
            <div className="text-sm text-muted-foreground">Delivery</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="font-noto-sans text-2xl md:text-3xl text-foreground mb-4">
            Love what you see?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our full collection and find the perfect budget planner design for you.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
