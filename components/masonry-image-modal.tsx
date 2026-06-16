'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

interface ImageModalProps {
  image: GalleryImage | null
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && image && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto"
          >
            <div className="relative max-w-4xl w-full pointer-events-auto my-auto">
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-50 md:relative md:top-0 md:mb-4"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
              
              <div className="relative aspect-video bg-background rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                  unoptimized={image.src.startsWith('http')}
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-center text-white"
              >
                <p className="text-sm font-medium text-white/70 mb-1 capitalize">{image.category}</p>
                <h3 className="text-xl font-noto-sans font-medium">{image.alt}</h3>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
