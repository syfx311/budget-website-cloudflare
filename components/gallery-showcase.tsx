'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ImageModal } from '@/components/masonry-image-modal'

const galleryImages = [
  // New Product Designs
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
  // Original Design Images
  { id: 11, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc7105fef800b4637876202ef11a2d508?format=webp&width=800&height=1200', alt: 'Emergency Funds Design' },
  { id: 12, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F693215361ff64879a2f52c74582ee66d?format=webp&width=800&height=1200', alt: 'Budget Envelope Insert' },
  { id: 13, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8266e96c8aae4cddb6d583e2b6a960c1?format=webp&width=800&height=1200', alt: 'Budget Binder Design' },
  { id: 14, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd09509dc10a84edbbc57eababafe6ba2?format=webp&width=800&height=1200', alt: 'Seasonal Budget' },
  { id: 15, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd4962b456bd14788846c02c810e1f9a4?format=webp&width=800&height=1200', alt: 'Monthly Savings Plan' },
  { id: 16, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F1f903ad41cb94b28acae567467461196?format=webp&width=800&height=1200', alt: 'Pink Budget Design' },
  { id: 17, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F24ca4eb7bd5e4e3fbb864c7017acda3a?format=webp&width=800&height=1200', alt: 'Monthly Challenge' },
  { id: 18, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9a2da6acd34048848ba5e1cb37b5b6af?format=webp&width=800&height=1200', alt: 'Scheduler Design' },
  { id: 19, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fe0b894f42f5c4c38a478fcb763879a5e?format=webp&width=800&height=1200', alt: 'Savings Envelope' },
  { id: 20, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fdddf6dfefb9e47a7ab4aa8a55b28f9cd?format=webp&width=800&height=1200', alt: 'Budget Cards' },
  { id: 21, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8dd2c505d9864ba4a4a06e5e4c7233b6?format=webp&width=800&height=1200', alt: 'Financial Planning' },
  { id: 22, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F939f19cf0d524c02bc528b4be882329a?format=webp&width=800&height=1200', alt: 'Binder Collection' },
  { id: 23, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa2b7792628fa45ea8f49ed25a11d465f?format=webp&width=800&height=1200', alt: 'Budget Planner' },
  { id: 24, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3414467aad2847d2ada40c2452e1142a?format=webp&width=800&height=1200', alt: 'Monthly Tracker' },
  { id: 25, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fe9385f198d294bf99f5422bc2331a04e?format=webp&width=800&height=1200', alt: 'Savings Goals' },
  { id: 26, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F5e00e5fb62d9406aa0ea777d62e48d0c?format=webp&width=800&height=1200', alt: 'Budget Inserts' },
  { id: 27, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fee9b8333d8ef44f6afb7003128e0640f?format=webp&width=800&height=1200', alt: 'Digital Planning' },
  { id: 28, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3923d80910e3486a9070594a394b123a?format=webp&width=800&height=1200', alt: 'Aesthetic Budget' },
  { id: 29, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F44749ffcb9674e488dc0f4888bff9ab6?format=webp&width=800&height=1200', alt: 'Pink Savings' },
  { id: 30, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd55f3916d7d446c68a5aaf1637f2ddb7?format=webp&width=800&height=1200', alt: 'Budget Essentials' },
  { id: 31, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa375720d57914db4befdd6fec37e8cfb?format=webp&width=800&height=1200', alt: 'Money Tracker' },
  { id: 32, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fdca22a41742849ec9b7f8d3e605dc62d?format=webp&width=800&height=1200', alt: 'Financial Tools' },
  { id: 33, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8bbf39e5f040445db0a3f21f65d5ec05?format=webp&width=800&height=1200', alt: 'Budget Set' },
  { id: 34, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fef3a1eaa069b4f71816fc9b596f2a5b7?format=webp&width=800&height=1200', alt: 'Planning System' },
  { id: 35, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F21d84b2add5d4687803a591a068b7cdc?format=webp&width=800&height=1200', alt: 'Savings Tracker' },
  { id: 36, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F49219545737c44c5957a4da30c8004e9?format=webp&width=800&height=1200', alt: 'Monthly Goals' },
  { id: 37, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fb98f69e5d3514272887f09e4e795dd80?format=webp&width=800&height=1200', alt: 'Budget Templates' },
  { id: 38, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3af04f8f8c7b4fd3847efeffeb731a4c?format=webp&width=800&height=1200', alt: 'Financial Design' },
  { id: 39, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F73b9b07de7fd4a1b84ada5d32b0a857d?format=webp&width=800&height=1200', alt: 'Planner Kit' },
  { id: 40, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9a740892cf52408bb3bdb671d51dae3e?format=webp&width=800&height=1200', alt: 'Savings Design' },
  { id: 41, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F22cc5aa0b662482c8f1d540b982b90e0?format=webp&width=800&height=1200', alt: 'Budget Art' },
  { id: 42, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd369392e0cab40f39d528bc9b21e9b54?format=webp&width=800&height=1200', alt: 'Pink Planner' },
  { id: 43, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F45235815fdba41769e63d4b6979ee4f4?format=webp&width=800&height=1200', alt: 'Themed Design' },
  { id: 44, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa5096065eb5949af830c2bc6aef5ad1c?format=webp&width=800&height=1200', alt: 'Budget Setup' },
  { id: 45, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9302c878cbaa4b5c929a296659158290?format=webp&width=800&height=1200', alt: 'Money Organization' },
  { id: 46, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc455b93c553b40a384752fa000208e62?format=webp&width=800&height=1200', alt: 'Financial Envelopes' },
  { id: 47, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F276c28591d59458fbb4629fab20ea874?format=webp&width=800&height=1200', alt: 'Budget Cards Kit' },
  { id: 48, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F17d7a41d776d423c9a719894f4a96977?format=webp&width=800&height=1200', alt: 'Planning Cards' },
  { id: 49, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F71307bb8ee6647d596f8c614ecd087a0?format=webp&width=800&height=1200', alt: 'Savings Challenge' },
  { id: 50, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F92b5289f27db4c4cbc0a704e7c1b9209?format=webp&width=800&height=1200', alt: 'Budget Showcase' },
  { id: 51, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Ffac27d7ec64c4622b4364ec382af41ff?format=webp&width=800&height=1200', alt: 'Planning System Kit' },
  { id: 52, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F38126ddf45394c94910993d4b67f1fc8?format=webp&width=800&height=1200', alt: 'Monthly Plan' },
  { id: 53, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F413b51a0d0d34184938eda53d68f97d9?format=webp&width=800&height=1200', alt: 'Financial Planning Set' },
  { id: 54, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8f4239940913414eb29f26f46e38d06b?format=webp&width=800&height=1200', alt: 'Budget Art Inserts' },
  { id: 55, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F7b22fccba1fa4914ae55f8b4ec4a26ae?format=webp&width=800&height=1200', alt: 'Artistic Budget' },
  { id: 56, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F6a55c74076a8418e83ad07f4800d4f70?format=webp&width=800&height=1200', alt: 'Design Collection' },
  { id: 57, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F60dc9be469d34b8ea8f6fdf021551872?format=webp&width=800&height=1200', alt: 'Financial Tools Kit' },
  { id: 58, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F4f73cc2f0e2b4ee0b5b324ef792465a4?format=webp&width=800&height=1200', alt: 'Budget Planning' },
  { id: 59, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc78be7ad3c4646fb87ea32904758b59f?format=webp&width=800&height=1200', alt: 'Money Manager' },
  { id: 60, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8e08ef747ac441fca570dfb4e167ccd0?format=webp&width=800&height=1200', alt: 'Savings System' },
  { id: 61, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fcbaae64e0af347f6ae237ccb5b4e2360?format=webp&width=800&height=1200', alt: 'Budget Design Pro' },
  { id: 62, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F5400618744fc403fb12e91029cb56a4f?format=webp&width=800&height=1200', alt: 'Complete Collection' },
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
            <div className="text-3xl font-bold text-primary mb-2">62+</div>
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
