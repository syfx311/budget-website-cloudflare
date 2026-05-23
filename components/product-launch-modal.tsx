'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import Image from 'next/image'

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            key="backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            key="modal"
          >
            <div
              className="relative w-full max-w-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-full transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Badge */}
                <div className="flex items-center justify-center mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-amber-700 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    Just Released
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-900">
                  NEW Budgeting Wallet
                </h2>
                <p className="text-center text-lg text-amber-600 mb-6 font-semibold flex items-center justify-center gap-1">
                  Collection <span className="text-2xl">✨</span>
                </p>

                {/* Subheadline */}
                <p className="text-center text-gray-700 mb-8 text-lg leading-relaxed">
                  Stay organized in style with our custom-designed budgeting wallets.
                </p>

                {/* Product Images */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/wallet-1.jpg"
                      alt="Mommy Louise Budgeting Wallet - Closed View"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/wallet-2.jpg"
                      alt="Mommy Louise Budgeting Wallet - Interior with Dividers"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Feature Bullets */}
                <div className="space-y-3 mb-8">
                  <FeatureBullet text="Cash envelope budgeting system" />
                  <FeatureBullet text="Custom-designed by Mommy Louise" />
                  <FeatureBullet text="Stylish, compact, and practical" />
                  <FeatureBullet text="Perfect for saving goals & daily budgeting" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.facebook.com/messages/t/123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Send Inquiry on Facebook
                  </a>
                  <button
                    onClick={handleClose}
                    className="flex-1 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition-colors border border-gray-200"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Coming Soon Badge */}
                <p className="text-center text-sm text-gray-600 mt-6 font-medium">
                  🚀 Product Coming Soon
                </p>
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
    <div className="flex items-center gap-3 text-gray-700">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-200/50 flex items-center justify-center">
        <span className="w-2 h-2 bg-amber-600 rounded-full" />
      </span>
      <span className="text-base">{text}</span>
    </div>
  )
}
