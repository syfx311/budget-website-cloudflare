'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
}

interface GalleryItemProps {
  item: GalleryItem
  index: number
  onImageClick: (item: GalleryItem) => void
}

// Get randomized tile span for masonry effect
const getTileSpan = (index: number): string => {
  // Seeded random for consistent results
  const seed = index % 10
  if (seed === 0 || seed === 5) return 'col-span-2 row-span-2' // Large tiles
  if (seed === 1 || seed === 6) return 'row-span-2' // Tall tiles
  if (seed === 2 || seed === 7) return 'col-span-2' // Wide tiles
  return '' // Standard square
}

export function GalleryItem({ item, index, onImageClick }: GalleryItemProps) {
  const tileSpan = getTileSpan(index)

  return (
    <motion.button
      onClick={() => onImageClick(item)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ y: -8 }}
      className={`relative group overflow-hidden rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${tileSpan}`}
    >
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 min-h-64">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          loading="lazy"
          unoptimized={item.src.startsWith('http')}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <p className="text-xs font-medium text-white/70 mb-1 capitalize">{item.category}</p>
            <h3 className="text-sm font-noto-sans font-medium text-balance">{item.alt}</h3>
          </div>
        </div>
      </div>
    </motion.button>
  )
}
