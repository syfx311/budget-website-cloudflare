'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, Heart, Star, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DesignLibraryShowcase } from '@/components/design-library-showcase'
import { AutoRotatingProductImage } from '@/components/auto-rotating-product-image'

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'stationery', label: 'Stationery' },
  { id: 'planners', label: 'Budget Planners' },
  { id: 'stickers', label: 'Stickers' },
  { id: 'essentials', label: 'Home Essentials' },
  { id: 'custom', label: 'Custom Orders' },
]

const envelopeInsertTiles = [
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3f2dceb91f944d5db35fd45a0c0cde10?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fe649da41462a4c538ba0aff8ab3f4c40?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa83299145c1f4926ba880787739d0629?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9a2ced2b30f14ede83e65e6638055fb1?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fb19d0ec3276c4c7da9620542a6fae275?format=webp&width=800&height=1200',
]

const binderTiles = [
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F174b1d1c6c2d43dd80145cc5a3ca4232?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F737b1d8259f944f2bc33f99a69eae200?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F29c95cd0df64421fadb585359962de64?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Ff7cf16cc946b4cceb07665cd2a6b1462?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F1eeabf6ec07643b988c71a0c50b6c40d?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F579a464d572041d8bb3f870637646b8e?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F4fed0d0ca58a462aa2b0d8f508769f86?format=webp&width=800&height=1200',
]

const products = [
  {
    id: 1,
    title: 'Budget Envelope Inserts',
    description: 'Beautiful pink gingham cash envelopes with custom categories',
    price: '₱250',
    category: 'stationery',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3f2dceb91f944d5db35fd45a0c0cde10?format=webp&width=800&height=1200',
    tiles: envelopeInsertTiles,
    features: ['Customizable Categories', 'Premium Cardstock', 'Gingham Design'],
    badge: 'Best Seller',
    fullDescription: 'Handcrafted budget envelope inserts designed to organize your cash stuffing method. Features soft pink gingham pattern with clearly labeled budget categories.',
    colors: ['Pink', 'Beige', 'Purple'],
  },
  {
    id: 2,
    title: 'Premium Budget Binders',
    description: 'Elegant leather binders with gold ring mechanisms and card slots',
    price: '₱1,200',
    category: 'planners',
    image: '/images/budget-binders.png',
    tiles: binderTiles,
    features: ['Multiple Colors', 'Card Pockets', 'Gold Rings'],
    badge: 'Premium',
    fullDescription: 'Luxurious leather budget planner binders with premium craftsmanship. Includes removable card pockets and sturdy gold ring mechanisms.',
    colors: ['Pink', 'Purple', 'Beige', 'Sage Green'],
  },
  {
    id: 3,
    title: 'Decorative Budget Stickers',
    description: 'Cute and motivating stickers for budget tracking and planning',
    price: '₱150',
    category: 'stickers',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa375720d57914db4befdd6fec37e8cfb?format=webp&width=800&height=1200',
    features: ['150+ Designs', 'Waterproof', 'Removable'],
    badge: 'New',
    fullDescription: 'Adorable waterproof sticker sheet featuring budget-themed designs perfect for planners and envelopes.',
    colors: ['Mixed'],
  },
  {
    id: 4,
    title: 'Monthly Savings Tracker',
    description: 'Beautiful printable monthly savings and budget tracking sheets',
    price: '₱300',
    category: 'stationery',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3414467aad2847d2ada40c2452e1142a?format=webp&width=800&height=1200',
    features: ['Printable', 'Customizable', 'Set of 12'],
    badge: '',
    fullDescription: 'Monthly tracker sheets with space for goal tracking, savings breakdown, and spending notes.',
    colors: ['White/Pink'],
  },
  {
    id: 5,
    title: 'Custom Budget Set',
    description: 'Personalized budget system tailored to your needs',
    price: 'Custom Quote',
    category: 'custom',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F5e00e5fb62d9406aa0ea777d62e48d0c?format=webp&width=800&height=1200',
    features: ['Fully Customized', 'Your Colors', 'Your Design'],
    badge: 'Made to Order',
    fullDescription: 'Create your perfect budget system with custom colors, designs, and layout. Perfect for personal use or as a gift.',
    colors: ['Custom'],
  },
  {
    id: 6,
    title: 'Desk Organizer Bundle',
    description: 'Complete home office setup with budget planning essentials',
    price: '₱850',
    category: 'essentials',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc455b93c553b40a384752fa000208e62?format=webp&width=800&height=1200',
    features: ['Multi-Piece Set', 'Storage Included', 'Aesthetic Design'],
    badge: 'Value Set',
    fullDescription: 'Complete desk organization bundle including pen holder, note pads, and sticky notes in coordinated soft colors.',
    colors: ['Pink & Cream', 'Purple & Beige'],
  },
]

const designImages = [
  { id: 1, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc7105fef800b4637876202ef11a2d508?format=webp&width=800&height=1200', alt: 'Emergency Funds Design' },
  { id: 2, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F693215361ff64879a2f52c74582ee66d?format=webp&width=800&height=1200', alt: 'Budget Envelope Insert' },
  { id: 3, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8266e96c8aae4cddb6d583e2b6a960c1?format=webp&width=800&height=1200', alt: 'Budget Binder Design' },
  { id: 4, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd09509dc10a84edbbc57eababafe6ba2?format=webp&width=800&height=1200', alt: 'Seasonal Budget' },
  { id: 5, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd4962b456bd14788846c02c810e1f9a4?format=webp&width=800&height=1200', alt: 'Monthly Savings Plan' },
  { id: 6, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F1f903ad41cb94b28acae567467461196?format=webp&width=800&height=1200', alt: 'Pink Budget Design' },
  { id: 7, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F24ca4eb7bd5e4e3fbb864c7017acda3a?format=webp&width=800&height=1200', alt: 'Monthly Challenge' },
  { id: 8, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9a2da6acd34048848ba5e1cb37b5b6af?format=webp&width=800&height=1200', alt: 'Scheduler Design' },
  { id: 9, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fe0b894f42f5c4c38a478fcb763879a5e?format=webp&width=800&height=1200', alt: 'Savings Envelope' },
  { id: 10, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fdddf6dfefb9e47a7ab4aa8a55b28f9cd?format=webp&width=800&height=1200', alt: 'Budget Cards' },
  { id: 11, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8dd2c505d9864ba4a4a06e5e4c7233b6?format=webp&width=800&height=1200', alt: 'Financial Planning' },
  { id: 12, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F939f19cf0d524c02bc528b4be882329a?format=webp&width=800&height=1200', alt: 'Binder Collection' },
  { id: 13, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa2b7792628fa45ea8f49ed25a11d465f?format=webp&width=800&height=1200', alt: 'Budget Planner' },
  { id: 14, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3414467aad2847d2ada40c2452e1142a?format=webp&width=800&height=1200', alt: 'Monthly Tracker' },
  { id: 15, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fe9385f198d294bf99f5422bc2331a04e?format=webp&width=800&height=1200', alt: 'Savings Goals' },
  { id: 16, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F5e00e5fb62d9406aa0ea777d62e48d0c?format=webp&width=800&height=1200', alt: 'Budget Inserts' },
  { id: 17, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fee9b8333d8ef44f6afb7003128e0640f?format=webp&width=800&height=1200', alt: 'Digital Planning' },
  { id: 18, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3923d80910e3486a9070594a394b123a?format=webp&width=800&height=1200', alt: 'Aesthetic Budget' },
  { id: 19, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F44749ffcb9674e488dc0f4888bff9ab6?format=webp&width=800&height=1200', alt: 'Pink Savings' },
  { id: 20, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd55f3916d7d446c68a5aaf1637f2ddb7?format=webp&width=800&height=1200', alt: 'Budget Essentials' },
  { id: 21, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa375720d57914db4befdd6fec37e8cfb?format=webp&width=800&height=1200', alt: 'Money Tracker' },
  { id: 22, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fdca22a41742849ec9b7f8d3e605dc62d?format=webp&width=800&height=1200', alt: 'Financial Tools' },
  { id: 23, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8bbf39e5f040445db0a3f21f65d5ec05?format=webp&width=800&height=1200', alt: 'Budget Set' },
  { id: 24, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fef3a1eaa069b4f71816fc9b596f2a5b7?format=webp&width=800&height=1200', alt: 'Planning System' },
  { id: 25, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F21d84b2add5d4687803a591a068b7cdc?format=webp&width=800&height=1200', alt: 'Savings Tracker' },
  { id: 26, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F49219545737c44c5957a4da30c8004e9?format=webp&width=800&height=1200', alt: 'Monthly Goals' },
  { id: 27, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fb98f69e5d3514272887f09e4e795dd80?format=webp&width=800&height=1200', alt: 'Budget Templates' },
  { id: 28, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3af04f8f8c7b4fd3847efeffeb731a4c?format=webp&width=800&height=1200', alt: 'Financial Design' },
  { id: 29, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F73b9b07de7fd4a1b84ada5d32b0a857d?format=webp&width=800&height=1200', alt: 'Planner Kit' },
  { id: 30, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9a740892cf52408bb3bdb671d51dae3e?format=webp&width=800&height=1200', alt: 'Savings Design' },
  { id: 31, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F22cc5aa0b662482c8f1d540b982b90e0?format=webp&width=800&height=1200', alt: 'Budget Art' },
  { id: 32, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd369392e0cab40f39d528bc9b21e9b54?format=webp&width=800&height=1200', alt: 'Pink Planner' },
  { id: 33, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F45235815fdba41769e63d4b6979ee4f4?format=webp&width=800&height=1200', alt: 'Themed Design' },
  { id: 34, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa5096065eb5949af830c2bc6aef5ad1c?format=webp&width=800&height=1200', alt: 'Budget Setup' },
  { id: 35, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F9302c878cbaa4b5c929a296659158290?format=webp&width=800&height=1200', alt: 'Money Organization' },
  { id: 36, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc455b93c553b40a384752fa000208e62?format=webp&width=800&height=1200', alt: 'Financial Envelopes' },
  { id: 37, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F276c28591d59458fbb4629fab20ea874?format=webp&width=800&height=1200', alt: 'Budget Cards Kit' },
  { id: 38, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F17d7a41d776d423c9a719894f4a96977?format=webp&width=800&height=1200', alt: 'Planning Cards' },
  { id: 39, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F71307bb8ee6647d596f8c614ecd087a0?format=webp&width=800&height=1200', alt: 'Savings Challenge' },
  { id: 40, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F92b5289f27db4c4cbc0a704e7c1b9209?format=webp&width=800&height=1200', alt: 'Budget Showcase' },
  { id: 41, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Ffac27d7ec64c4622b4364ec382af41ff?format=webp&width=800&height=1200', alt: 'Planning System Kit' },
  { id: 42, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F38126ddf45394c94910993d4b67f1fc8?format=webp&width=800&height=1200', alt: 'Monthly Plan' },
  { id: 43, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F413b51a0d0d34184938eda53d68f97d9?format=webp&width=800&height=1200', alt: 'Financial Planning Set' },
  { id: 44, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8f4239940913414eb29f26f46e38d06b?format=webp&width=800&height=1200', alt: 'Budget Art Inserts' },
  { id: 45, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F7b22fccba1fa4914ae55f8b4ec4a26ae?format=webp&width=800&height=1200', alt: 'Artistic Budget' },
  { id: 46, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F6a55c74076a8418e83ad07f4800d4f70?format=webp&width=800&height=1200', alt: 'Design Collection' },
  { id: 47, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F60dc9be469d34b8ea8f6fdf021551872?format=webp&width=800&height=1200', alt: 'Financial Tools Kit' },
  { id: 48, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F4f73cc2f0e2b4ee0b5b324ef792465a4?format=webp&width=800&height=1200', alt: 'Budget Planning' },
  { id: 49, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc78be7ad3c4646fb87ea32904758b59f?format=webp&width=800&height=1200', alt: 'Money Manager' },
  { id: 50, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8e08ef747ac441fca570dfb4e167ccd0?format=webp&width=800&height=1200', alt: 'Savings System' },
  { id: 51, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fcbaae64e0af347f6ae237ccb5b4e2360?format=webp&width=800&height=1200', alt: 'Budget Design Pro' },
  { id: 52, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F5400618744fc403fb12e91029cb56a4f?format=webp&width=800&height=1200', alt: 'Complete Collection' },
]

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

interface SelectedProduct {
  id: number
  title: string
  description: string
  price: string
  category: string
  image: string
  tiles?: string[]
  features: string[]
  badge: string
  fullDescription: string
  colors: string[]
}

function ProductDetailModal({ product, isOpen, onClose }: { product: SelectedProduct | null; isOpen: boolean; onClose: () => void }) {
  const [quantity, setQuantity] = useState(1)
  const [orderNotes, setOrderNotes] = useState('')

  if (!product) return null

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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 right-0 flex justify-end p-4 bg-background border-b border-border/20 z-10">
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <h2 className="font-noto-sans text-3xl md:text-4xl text-foreground mb-2">
                {product.title}
              </h2>
              <p className="text-2xl text-primary font-semibold mb-4">
                {product.price}
              </p>

              <p className="text-muted-foreground mb-6 text-lg">
                {product.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      <Heart className="w-3 h-3 fill-primary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Available Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity and Notes */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-secondary transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 flex-1 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Order Notes (Optional)
                </label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Add any special requests or details..."
                  className="w-full rounded-lg border border-border p-3 text-foreground placeholder:text-muted-foreground resize-none"
                  rows={3}
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <Button
                  asChild
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg"
                >
                  <Link href="#contact">Place Order</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-primary/30 hover:bg-primary/10 rounded-full py-6 text-lg"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ProductsGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  const bestSellers = products.filter(p => p.badge === 'Best Seller')

  return (
    <section id="products" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gingham Background */}
      <div className="absolute inset-0 gingham-pattern opacity-30" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Bow className="w-20 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 text-primary/20"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Bow className="w-24 h-14" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <Bow className="w-12 h-8 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Shop Our Collection
            </span>
            <Bow className="w-12 h-8 text-primary transform scale-x-[-1]" />
          </div>
          <h1 className="font-noto-sans text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 text-balance">
            Our <span className="font-signature text-5xl md:text-6xl lg:text-7xl text-primary">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Affordable, aesthetic, and thoughtfully curated items for everyday use
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-foreground hover:bg-secondary/80 border border-primary/20'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Best Sellers Carousel */}
        {bestSellers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="font-noto-sans text-2xl md:text-3xl text-foreground mb-2">
                ⭐ <span className="text-primary">Best Sellers</span>
              </h2>
              <p className="text-muted-foreground">Customer favorites and most loved items</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellers.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product)
                    setIsModalOpen(true)
                  }}
                >
                  <div className="bg-card rounded-2xl border border-primary/20 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                            <Sparkles className="w-3 h-3" />
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-noto-sans text-lg text-foreground mb-1 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">
                          {product.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedProduct(product)
                  setIsModalOpen(true)
                }}
                className="cursor-pointer"
              >
                <div className="bg-card rounded-2xl border border-primary/10 overflow-hidden shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                          <Sparkles className="w-3 h-3" />
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-noto-sans text-lg text-foreground mb-1 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
                      {product.description}
                    </p>

                    {/* Features - only show for featured products */}
                    {filteredProducts.indexOf(product) < 3 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.features.slice(0, 2).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between gap-2">
                      <span className="text-lg font-semibold text-primary">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      >
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg mb-4">
              No products found in this category.
            </p>
            <Button
              onClick={() => setActiveCategory('all')}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              View All Products
            </Button>
          </motion.div>
        )}

        {/* Design Gallery Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="font-noto-sans text-2xl md:text-3xl text-foreground mb-2">
              Complete <span className="text-primary font-signature text-3xl md:text-4xl">Design Gallery</span>
            </h2>
            <p className="text-muted-foreground">
              Explore our full collection of beautiful designs and templates
            </p>
          </div>
          <DesignLibraryShowcase images={designImages} />
        </motion.div>

        {/* Binder Color Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-noto-sans text-2xl md:text-3xl text-foreground mb-2">
              Binder <span className="font-signature text-3xl md:text-4xl text-primary">Color Collection</span>
            </h3>
            <p className="text-muted-foreground">
              Beautiful colors and finishes to match your style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { id: 1, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fdfae96e0893746369ab28daedc2c8f8a?format=webp&width=800&height=1200', alt: 'Pink Binder' },
              { id: 2, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F1e1009599815405b984fd58247059757?format=webp&width=800&height=1200', alt: 'Purple Binder' },
              { id: 3, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F203d94a6b39744f7a1e9c9608885b3b8?format=webp&width=800&height=1200', alt: 'Beige Quilted Binder' },
              { id: 4, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F10cb06612e554f978152736d0bd9487c?format=webp&width=800&height=1200', alt: 'Beige Textured Binder' },
              { id: 5, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F6ff55fd22fa84dc9a5fab9b912343b67?format=webp&width=800&height=1200', alt: 'Brown Textured Binder' },
              { id: 6, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F708d58124c7c43bdb5320631c8964ec0?format=webp&width=800&height=1200', alt: 'Sage Green Binder' },
              { id: 7, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F75050672607d46a79d98d6610f1898ee?format=webp&width=800&height=1200', alt: 'Cream Textured Binder' },
              { id: 8, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc980857a33ab4f7ebae6d526c01d0fe4?format=webp&width=800&height=1200', alt: 'Binder Detail' },
              { id: 9, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fba0b545f3b1a459b9e061e95ba59a52d?format=webp&width=800&height=1200', alt: 'Binder Open View' },
              { id: 10, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F31d7c1acc72547d79e8d60323f560392?format=webp&width=800&height=1200', alt: 'Green Flat Binder' },
              { id: 11, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F33ae2ef4fee94d56a292a0785dfe628c?format=webp&width=800&height=1200', alt: 'Cream Flat Binder' },
              { id: 12, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F7be8b59edf3e42f7a357353860d61611?format=webp&width=800&height=1200', alt: 'Binder Set' },
              { id: 13, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F862fc695ec7644d58621a0e8efba82f7?format=webp&width=800&height=1200', alt: 'Gray Textured Binder' },
              { id: 14, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F63b4a5c016294ae9871229aa05c0d454?format=webp&width=800&height=1200', alt: 'Binder with Accessories' },
              { id: 15, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F25b70437e935496584b264fa5d2dcfc7?format=webp&width=800&height=1200', alt: 'Binder Collection Display' },
              { id: 16, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fd5ee15999e0243a38a822063c000d914?format=webp&width=800&height=1200', alt: 'Blue Binder Detail' },
              { id: 17, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F4535294a702a422bac409907c8d7f420?format=webp&width=800&height=1200', alt: 'Periwinkle Binder' },
              { id: 18, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Ffc0e7e32b2044a8c8c74828305a32e12?format=webp&width=800&height=1200', alt: 'Lavender Binder' },
              { id: 19, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F33d59c77f47445c8a4411180b57f8914?format=webp&width=800&height=1200', alt: 'Pink Wallet Binder' },
              { id: 20, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3c5faba6283f48b2af1cf8635e109e11?format=webp&width=800&height=1200', alt: 'Blush Pink Binder' },
              { id: 21, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F686c64d0b5bf4fe081156df176a8db28?format=webp&width=800&height=1200', alt: 'Lavender Wallet' },
              { id: 22, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F438d128ba67a4c82ad12ab3ce202769f?format=webp&width=800&height=1200', alt: 'Pink Flat Binder' },
              { id: 23, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F00f7de44e3dc4250bc4ae395a8c5d6ea?format=webp&width=800&height=1200', alt: 'Cream Flat Design' },
              { id: 24, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F019874c754e34bfba09fab73955e2279?format=webp&width=800&height=1200', alt: 'Binder Interior' },
              { id: 25, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fe03842bedb3f4e9e8367f042e6fc52fe?format=webp&width=800&height=1200', alt: 'Binder Full Setup' },
              { id: 26, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F705fe0e593d64692887378da4cd521bb?format=webp&width=800&height=1200', alt: 'Binder Closed' },
              { id: 27, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F1cea14c07f6d46e5b1c65d28ec157384?format=webp&width=800&height=1200', alt: 'Budget Planner Setup' },
              { id: 28, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fb494f985414240a48ccf0f2340744d43?format=webp&width=800&height=1200', alt: 'Binder with Inserts' },
              { id: 29, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fa715ea64de274830960d68eb32f014f0?format=webp&width=800&height=1200', alt: 'Premium Binder' },
              { id: 30, src: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F46491b0d1f6c4e53af96348e5f32937f?format=webp&width=800&height=1200', alt: 'Binder Collection' },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative group overflow-hidden rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: 'Designs Available', value: '50+' },
            { label: 'Happy Customers', value: '100+' },
            { label: 'Custom Orders', value: '200+' },
            { label: 'Binder Colors', value: '30+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 p-4 text-center"
            >
              <div className="font-serif text-2xl md:text-3xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20 p-8 md:p-12 text-center"
        >
          <h2 className="font-noto-sans text-2xl md:text-3xl text-foreground mb-4">
            Ready to Transform Your <span className="text-primary">Budget?</span>
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with us to order your favorite products or create a custom budget system tailored just for you.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
          >
            <Link href="#contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
