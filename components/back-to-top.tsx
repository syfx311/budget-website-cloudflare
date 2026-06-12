'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsVisible(window.scrollY > 300)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="fixed z-40 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-200 hover:shadow-2xl"
          style={{
            right: 'clamp(16px, 5vw, 24px)',
            bottom: 'clamp(16px, 5vw, 24px)',
            width: 'clamp(44px, 10vw, 56px)',
            height: 'clamp(44px, 10vw, 56px)',
            minWidth: '44px',
            minHeight: '44px',
            maxWidth: '56px',
            maxHeight: '56px'
          }}
          whileHover={{
            scale: 1.12,
            boxShadow: '0 20px 40px rgba(232, 90, 143, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'brightness(0.9)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'brightness(1)'
          }}
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
