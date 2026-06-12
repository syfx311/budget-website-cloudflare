'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleGetStarted = () => {
    setMobileMenuOpen(false)
  }

  const getNavLink = () => {
    if (pathname === '/app') {
      return '#facebook-cta'
    }
    return '#contact'
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Mommy Louise's Budget PH"
                width={60}
                height={60}
                className="rounded-full border-2 border-primary/30"
              />
            </motion.div>
            <div>
              <span className="font-serif text-sm sm:text-lg text-foreground block leading-tight" style={{ fontFamily: 'Grand Hotel, sans-serif', fontSize: '27px' }}>mommy louise&apos;s</span>
              <span className="text-xs text-primary font-medium tracking-wider uppercase">Budget PH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/app" className="text-muted-foreground hover:text-primary transition-colors">
              App
            </Link>
            <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors">
              Coming Soon
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <a href={getNavLink()} onClick={handleGetStarted}>Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-border/50 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'App', href: '/app' },
                  { label: 'Products', href: '/products' },
                  { label: 'Gallery', href: '/gallery' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Coming Soon', href: '/coming-soon' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit rounded-full">
                    <a href={getNavLink()} onClick={handleGetStarted}>Get Started</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
