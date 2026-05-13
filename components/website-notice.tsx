'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

export function WebsiteNotice() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b-2 border-primary/20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 md:mb-1">
                <span className="text-lg md:text-xl">🚧</span>
                <h3 className="font-serif text-sm md:text-base font-semibold text-foreground">
                  Website Notice
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  Our website is currently under construction as we continue improving your shopping experience.
                </p>
                <ul className="text-xs md:text-sm text-muted-foreground space-y-1 ml-6 md:ml-8 list-disc">
                  <li>
                    Product pricing shown is temporary and may change without prior notice.
                  </li>
                  <li>
                    We are undergoing review and setup for our international payment system.
                  </li>
                  <li>
                    Some payment methods and checkout features may not yet be available in certain countries.
                  </li>
                </ul>
                <p className="text-xs md:text-sm text-primary font-medium mt-2">
                  We appreciate your patience and support while we work on launching the full experience soon. 💕
                </p>
              </div>
            </div>
            <motion.button
              onClick={() => setIsVisible(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="flex-shrink-0 p-1.5 md:p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Dismiss notice"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-foreground hover:text-primary" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
