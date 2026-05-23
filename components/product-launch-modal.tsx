'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Facebook } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ProductLaunchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

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
              className="relative w-full max-w-2xl bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50"
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

              {/* Content */}
              <div className="p-6 sm:p-8 pt-12">
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
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50">
                    <Image
                      src="/images/wallet-1.jpg"
                      alt="Mommy Louise Budgeting Wallet - Closed View"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50">
                    <Image
                      src="/images/wallet-2.jpg"
                      alt="Mommy Louise Budgeting Wallet - Interior with Dividers"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
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
