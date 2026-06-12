'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0
      setProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-40"
      style={{
        scaleX: progress / 100,
        transformOrigin: '0%'
      }}
    />
  )
}
