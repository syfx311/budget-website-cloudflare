'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  packageName: string
}

export function OrderModal({ isOpen, onClose, packageName }: OrderModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary/10 to-rose-100/10 border-b border-primary/20 px-6 md:px-8 py-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Order {packageName}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 md:px-8 py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  className="mb-6"
                >
                  <Facebook className="w-16 h-16 text-primary mx-auto" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-foreground mb-4"
                >
                  Place Your Order
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground mb-8 leading-relaxed"
                >
                  Thank you for your interest in the {packageName}! Please message me on Facebook 
                  with details about your order, customization preferences, and any questions you have. 
                  I&apos;ll get back to you within 24-48 hours with pricing and availability information.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-rose-500 hover:from-primary/90 hover:to-rose-600 text-primary-foreground rounded-full px-8 py-6 font-semibold shadow-lg"
                  >
                    <a 
                      href="https://www.facebook.com/profile.php?id=100087797289721" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Facebook className="w-5 h-5" />
                      Message Me on Facebook
                    </a>
                  </Button>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={onClose}
                  className="mt-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Or close this window to continue browsing
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
