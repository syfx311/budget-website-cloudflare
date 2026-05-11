'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Download, Printer, MessageCircle, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 }
}

// Decorative ribbon
function DecorativeRibbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block w-full px-4">
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg py-4 px-8"
        style={{
          background: 'linear-gradient(135deg, #e869ab 0%, #db7ba8 100%)'
        }}
      >
        {/* Ribbon tails */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid #db7ba8',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent'
            }}
          />
        </div>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '8px solid #db7ba8',
              borderRight: '8px solid transparent',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent'
            }}
          />
        </div>

        <div className="relative z-10 text-center text-primary-foreground font-bold text-2xl md:text-3xl">
          {children}
        </div>
      </div>
    </div>
  )
}

// Package card component
function PackageCard({
  title,
  badge,
  features,
  image,
  isPopular
}: {
  title: string
  badge?: string
  features: string[]
  image: React.ReactNode
  isPopular?: boolean
}) {
  return (
    <motion.div
      variants={scaleHover}
      initial="rest"
      whileHover="hover"
      className={`relative h-full rounded-3xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'ring-2 ring-primary shadow-2xl'
          : 'shadow-lg hover:shadow-xl'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.8) 0%, rgba(255, 200, 220, 0.3) 100%)'
      }}
    >
      {/* Badge */}
      {badge && isPopular && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-4 right-4 z-10"
        >
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
            <Heart className="w-3 h-3 fill-current" />
            {badge}
          </div>
        </motion.div>
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Image Area */}
        <div className="mb-6 flex-shrink-0 h-48 flex items-center justify-center bg-gradient-to-br from-pink-100/40 to-rose-100/40 rounded-2xl border-2 border-pink-200/40 overflow-hidden">
          {image}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {title}
        </h3>

        {/* Features List */}
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 fill-primary" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className={`w-full rounded-full font-semibold transition-all ${
              isPopular
                ? 'bg-gradient-to-r from-primary to-rose-500 hover:from-primary/90 hover:to-rose-600 text-primary-foreground shadow-lg'
                : 'bg-pink-200/60 hover:bg-pink-300/60 text-foreground'
            }`}
          >
            <Link href="#contact">Order Now</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Planner mockup SVG for each package
function PremiumPlannerMockup() {
  return (
    <svg viewBox="0 0 140 160" className="w-20 h-24" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="100" height="140" rx="8" fill="url(#plannerGradient)" stroke="#e869ab" strokeWidth="2" />
      <defs>
        <linearGradient id="plannerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffc8dc" />
          <stop offset="100%" stopColor="#ffb3d9" />
        </linearGradient>
      </defs>
      <circle cx="45" cy="40" r="8" fill="#e869ab" opacity="0.6" />
      <circle cx="95" cy="40" r="8" fill="#e869ab" opacity="0.6" />
      <rect x="30" y="55" width="80" height="70" fill="rgba(255, 255, 255, 0.4)" rx="4" />
      <circle cx="55" cy="75" r="4" fill="#e869ab" opacity="0.5" />
      <circle cx="75" cy="85" r="4" fill="#e869ab" opacity="0.5" />
    </svg>
  )
}

function SophiePlannerMockup() {
  return (
    <svg viewBox="0 0 140 160" className="w-20 h-24" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="15" width="104" height="130" rx="10" fill="url(#sophieGradient)" stroke="#db7ba8" strokeWidth="2" />
      <defs>
        <linearGradient id="sophieGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffc0db" />
          <stop offset="100%" stopColor="#ffb3d9" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="45" r="12" fill="#fff" opacity="0.6" />
      <circle cx="90" cy="45" r="12" fill="#fff" opacity="0.6" />
      <path d="M 45 60 Q 60 65 75 60" stroke="#db7ba8" strokeWidth="2" fill="none" />
      <line x1="35" y1="80" x2="105" y2="80" stroke="#ffb3d9" strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="95" x2="105" y2="95" stroke="#ffb3d9" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

function ElegancePlannerMockup() {
  return (
    <svg viewBox="0 0 140 160" className="w-20 h-24" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="12" width="96" height="136" rx="6" fill="rgba(255, 240, 250, 0.8)" stroke="#e869ab" strokeWidth="2" strokeDasharray="4,4" />
      <defs>
        <linearGradient id="eleganceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd9eb" />
          <stop offset="100%" stopColor="#ffc8dc" />
        </linearGradient>
      </defs>
      <rect x="30" y="25" width="80" height="40" fill="url(#eleganceGradient)" rx="4" opacity="0.7" />
      <circle cx="45" cy="40" r="3" fill="#e869ab" />
      <circle cx="55" cy="40" r="3" fill="#e869ab" />
      <circle cx="65" cy="40" r="3" fill="#e869ab" />
      <line x1="35" y1="75" x2="105" y2="75" stroke="#e869ab" strokeWidth="1" opacity="0.4" />
      <line x1="35" y1="85" x2="105" y2="85" stroke="#e869ab" strokeWidth="1" opacity="0.4" />
      <line x1="35" y1="95" x2="105" y2="95" stroke="#e869ab" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function MysticPlannerMockup() {
  return (
    <svg viewBox="0 0 140 160" className="w-20 h-24" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="100" height="140" rx="8" fill="rgba(255, 200, 220, 0.2)" stroke="#e869ab" strokeWidth="2" />
      <rect x="22" y="12" width="96" height="136" rx="7" fill="none" stroke="rgba(232, 105, 171, 0.3)" strokeWidth="1" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#e869ab" strokeWidth="1.5" opacity="0.5" />
      <circle cx="90" cy="50" r="15" fill="none" stroke="#e869ab" strokeWidth="1.5" opacity="0.5" />
      <path d="M 40 100 Q 70 110 100 100" stroke="#e869ab" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="70" cy="75" r="4" fill="#e869ab" opacity="0.7" />
    </svg>
  )
}

export function Packages() {
  const packages = [
    {
      title: 'Premium Package',
      badge: 'Most Popular',
      features: [
        'A6 or A7 premium tri-fold binder',
        '10 self-zipping envelopes',
        '10 bespoke inserts',
        '1 customized frontis piece',
        'Matching dividers',
        'Acrylic pen',
        'Bling charm'
      ],
      image: <PremiumPlannerMockup />,
      isPopular: true
    },
    {
      title: 'Sophie Package',
      features: [
        'A6 soft leather binder',
        '10 envelopes',
        '10 inserts',
        '1 signature dashboard',
        '2 dividers',
        'Thoughtful surprises'
      ],
      image: <SophiePlannerMockup />
    },
    {
      title: 'Elegance Package',
      features: [
        'A6 looseleaf binder',
        '12 custom laminated envelopes',
        '12 inserts',
        'Choice of challenge (12-Month / Weekly / Theme-Based)',
        'Hand-matched to your order'
      ],
      image: <ElegancePlannerMockup />
    },
    {
      title: 'Mystic Package',
      features: [
        'A7 transparent looseleaf binder',
        '10 envelopes',
        '10 inserts',
        '2 dashboards',
        'Effortless elegance for your budget journey'
      ],
      image: <MysticPlannerMockup />
    }
  ]

  return (
    <section id="packages" className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        whileInView={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 right-10 text-6xl pointer-events-none"
      >
        ✨
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        whileInView={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute bottom-20 left-10 text-5xl pointer-events-none"
      >
        💝
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          {/* Ribbon with heading */}
          <motion.div
            variants={fadeInUp}
            className="relative mb-8 w-full"
          >
            <DecorativeRibbon>Planning to Order?</DecorativeRibbon>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Explore our customizable budgeting packages and choose the perfect setup for your money journey.
          </motion.p>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {packages.map((pkg, index) => (
            <motion.div key={pkg.title} variants={fadeInUp}>
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </motion.div>

        {/* Digital & Printable Options */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-center text-2xl md:text-3xl font-bold text-foreground mb-8"
          >
            <Heart className="w-6 h-6 text-primary fill-primary inline mr-2" />
            Digital & Printable Options
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Soft Copies */}
            <motion.div
              variants={fadeInUp}
              className="rounded-3xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 200, 220, 0.15) 0%, rgba(255, 240, 245, 0.3) 100%)',
                border: '2px solid rgba(232, 105, 171, 0.2)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block mb-4 p-4 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50"
              >
                <Download className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-2xl font-bold text-foreground mb-3">Soft Copies</h4>
              <p className="text-muted-foreground mb-4">
                Printable digital files in A6 and A7 sizes — perfect for DIY budgeting lovers who love to personalize!
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Instant digital download
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Print and laminate at home
                </li>
              </ul>
            </motion.div>

            {/* Printed Copies */}
            <motion.div
              variants={fadeInUp}
              className="rounded-3xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 200, 220, 0.15) 0%, rgba(255, 240, 245, 0.3) 100%)',
                border: '2px solid rgba(232, 105, 171, 0.2)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block mb-4 p-4 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50"
              >
                <Printer className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-2xl font-bold text-foreground mb-3">Printed Copies</h4>
              <p className="text-muted-foreground mb-4">
                We print and prepare everything for you — ready to organize and use right out of the box!
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Bespoke designs
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Ready to use
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Customization Info Box */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-3xl p-8 md:p-10 mb-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.6) 0%, rgba(255, 220, 235, 0.4) 100%)',
            border: '2px solid rgba(232, 105, 171, 0.3)',
            boxShadow: '0 8px 32px rgba(232, 105, 171, 0.1)'
          }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Every Package is Customizable
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose your preferred binder style, customize inserts with budget trackers, savings challenges, or personalized themes. Mix and match anything to match your unique financial journey and aesthetic preferences.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Want to Order?
            </h3>
            <p className="text-lg text-muted-foreground">
              Message us now
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2 inline-block"
              >
                💕
              </motion.span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-rose-500 hover:from-primary/90 hover:to-rose-600 text-primary-foreground rounded-full px-8 py-6 font-semibold shadow-lg"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Message via Website
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-full px-8 py-6 font-semibold shadow-lg"
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Message on Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
