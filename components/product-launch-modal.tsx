'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Facebook, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ProductLaunchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)

    // Show modal after 1 second
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (enlargedImage) {
        setEnlargedImage(null)
      } else {
        handleClose()
      }
    }
  }

  useEffect(() => {
    if (isOpen || enlargedImage) {
      window.addEventListener('keydown', handleEscapeKey)
      return () => window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, enlargedImage])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            key="backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            key="modal"
          >
            <div
              className="relative w-full max-w-2xl h-[90vh] bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 p-6 sm:p-8 pt-12">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-center mb-4"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20">
                    <Sparkles className="w-4 h-4" />
                    Coming Soon
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="font-signature text-5xl md:text-6xl text-center mb-1 text-foreground"
                >
                  Mommy Louise
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-lg font-noto-sans text-primary mb-6 font-semibold"
                >
                  Budget Wallet Collection
                </motion.p>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-center text-foreground/80 mb-8 text-base leading-relaxed font-noto-sans"
                >
                  Beautifully crafted wallets with premium materials and elegant design. Perfect for organizing your budget categories in style.
                </motion.p>

                {/* Product Images */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <button
                    onClick={() => setEnlargedImage('/images/wallet-1.jpg')}
                    className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50 group cursor-pointer"
                  >
                    <Image
                      src="/images/wallet-1.jpg"
                      alt="Mommy Louise Budgeting Wallet - Closed View"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                  <button
                    onClick={() => setEnlargedImage('/images/wallet-2.jpg')}
                    className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50 group cursor-pointer"
                  >
                    <Image
                      src="/images/wallet-2.jpg"
                      alt="Mommy Louise Budgeting Wallet - Interior with Dividers"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="space-y-2 mb-8"
                >
                  <FeatureBullet text="Premium textured materials" />
                  <FeatureBullet text="Custom budget categories" />
                  <FeatureBullet text="Compact & stylish design" />
                  <FeatureBullet text="Perfect for cash envelope method" />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=100087797289721"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5" />
                      Send Inquiry via Facebook
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enlarged Image Lightbox */}
          <AnimatePresence>
            {enlargedImage && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setEnlargedImage(null)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-0 flex items-center justify-center z-[70] p-4"
                  onClick={() => setEnlargedImage(null)}
                >
                  <button
                    onClick={() => setEnlargedImage(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-20"
                    aria-label="Close image"
                  >
                    <X className="w-8 h-8 text-white" />
                  </button>
                  <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                    <Image
                      src={enlargedImage}
                      alt="Enlarged wallet image"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                    Press ESC or click X to close
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}

function FeatureBullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-foreground/80">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
        <span className="w-2 h-2 bg-primary rounded-full" />
      </span>
      <span className="text-sm font-noto-sans">{text}</span>
    </div>
  )
}
