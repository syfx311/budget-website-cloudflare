'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ShowcaseImage {
  id: number
  src: string
  alt: string
}

interface DesignLibraryShowcaseProps {
  images: ShowcaseImage[]
  onBowComponent?: React.ReactNode
}

function Bow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none">
      <path
        d="M50 30 C30 10, 5 15, 10 30 C15 45, 35 40, 50 30"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M50 30 C70 10, 95 15, 90 30 C85 45, 65 40, 50 30"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M50 30 C30 10, 5 15, 10 30 C15 45, 35 40, 50 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 30 C70 10, 95 15, 90 30 C85 45, 65 40, 50 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="30" r="6" fill="currentColor" />
      <path d="M46 36 Q50 55, 48 58" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M54 36 Q50 55, 52 58" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function DesignLibraryShowcase({ images }: DesignLibraryShowcaseProps) {
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([0, 1, 2])
  const [displayedIndices, setDisplayedIndices] = useState<Set<number>>(new Set([0, 1, 2]))
  const [isHovering, setIsHovering] = useState(false)
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isHovering || images.length <= 3) return

    const rotateImages = () => {
      setCurrentImageIndices((prevIndices) => {
        setDisplayedIndices((prev) => new Set([...prev, ...prevIndices]))

        const availableIndices = Array.from(
          { length: images.length },
          (_, i) => i
        ).filter((i) => !displayedIndices.has(i))

        if (availableIndices.length < 3) {
          // Reset cycle if not enough unseen images
          const shuffled = Array.from({ length: images.length }, (_, i) => i)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
          setDisplayedIndices(new Set(shuffled))
          return shuffled
        }

        // Pick 3 random unseen images
        const newImages: number[] = []
        for (let i = 0; i < 3 && availableIndices.length > 0; i++) {
          const randomIdx = Math.floor(Math.random() * availableIndices.length)
          newImages.push(availableIndices[randomIdx])
          availableIndices.splice(randomIdx, 1)
        }

        return newImages
      })
    }

    rotationIntervalRef.current = setInterval(rotateImages, 1000)

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current)
      }
    }
  }, [isHovering, images.length, displayedIndices])

  const handleMouseEnter = () => {
    setIsHovering(true)
    setDisplayedIndices(new Set(currentImageIndices))
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current)
    }
    setCurrentImageIndices([0, 1, 2])
    setDisplayedIndices(new Set([0, 1, 2]))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="bg-card rounded-3xl border-2 border-primary/20 overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 text-center border-b border-primary/10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Full Collection
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <h3 className="font-noto-sans text-2xl md:text-3xl text-foreground">
            Browse Our{' '}
            <span className="font-signature text-3xl md:text-4xl text-primary">
              Complete Design Library
            </span>
          </h3>
        </div>

        {/* Interactive Image Grid Container - 3 tiles per rotation */}
        <div
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-pointer group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full grid grid-cols-3 gap-0">
            {currentImageIndices.map((imageIndex) => (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden"
              >
                <Image
                  src={images[imageIndex].src}
                  alt={images[imageIndex].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Overlay hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center text-white">
              <p className="text-sm font-medium">Hover to rotate designs</p>
            </div>
          </motion.div>

          {/* Decorative overlay corners */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <Bow className="w-16 h-10 text-white/50" />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none">
            <Bow className="w-16 h-10 text-white/50 transform scale-x-[-1]" />
          </div>
          <div className="absolute bottom-4 left-4 pointer-events-none">
            <Bow className="w-16 h-10 text-white/50 transform scale-y-[-1]" />
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none">
            <Bow className="w-16 h-10 text-white/50 transform scale-[-1]" />
          </div>

          {/* Counter badge */}
          <motion.div
            animate={{ opacity: isHovering ? 1 : 0.7 }}
            className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-10"
          >
            {displayedIndices.size} / {images.length}
          </motion.div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-foreground font-medium">
              {images.length}+ unique designs available
            </p>
            <p className="text-muted-foreground text-sm">
              Hover to see 3 designs rotate every second. Custom orders welcome!
            </p>
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            <Link href="#contact" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Order Custom Design
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
