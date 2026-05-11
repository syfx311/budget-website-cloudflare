'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, Package, Heart } from 'lucide-react'

interface Order {
  id: number
  package_name: string
  customer_name: string
  customer_email: string
  customer_phone: string | null
  binder_type: string | null
  colors: string | null
  inserts: string[] | null
  challenges: string | null
  special_requests: string | null
  created_at: string
}

interface OrderDetailModalProps {
  isOpen: boolean
  onClose: () => void
  order: Order
}

export function OrderDetailModal({ isOpen, onClose, order }: OrderDetailModalProps) {
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
            className="bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary/20"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary/10 to-rose-100/10 border-b border-primary/20 px-8 py-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Order Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-8">
              {/* Order ID & Date */}
              <div className="flex justify-between items-start pb-6 border-b border-primary/10">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                  <p className="text-lg font-semibold text-foreground">#{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                  <p className="text-lg font-semibold text-foreground">
                    {new Date(order.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>

              {/* Package */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Package</h3>
                </div>
                <div className="px-4 py-3 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="font-semibold text-foreground">{order.package_name}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Customer Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-primary/10">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                      <p className="font-semibold text-foreground">{order.customer_name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-primary/10">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${order.customer_email}`} className="font-semibold text-primary hover:underline">
                        {order.customer_email}
                      </a>
                    </div>
                  </div>
                  {order.customer_phone && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-primary/10">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <a href={`tel:${order.customer_phone}`} className="font-semibold text-primary hover:underline">
                          {order.customer_phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Customization Details */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Customization</h3>
                </div>
                <div className="space-y-3">
                  {order.binder_type && (
                    <div className="p-3 rounded-xl bg-background/50 border border-primary/10">
                      <p className="text-sm text-muted-foreground">Binder Type</p>
                      <p className="font-semibold text-foreground">{order.binder_type}</p>
                    </div>
                  )}
                  {order.colors && (
                    <div className="p-3 rounded-xl bg-background/50 border border-primary/10">
                      <p className="text-sm text-muted-foreground">Colors</p>
                      <p className="font-semibold text-foreground">{order.colors}</p>
                    </div>
                  )}
                  {order.inserts && Array.isArray(order.inserts) && order.inserts.length > 0 && (
                    <div className="p-3 rounded-xl bg-background/50 border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-2">Inserts</p>
                      <div className="flex flex-wrap gap-2">
                        {order.inserts.map(insert => (
                          <span key={insert} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {insert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {order.challenges && (
                    <div className="p-3 rounded-xl bg-background/50 border border-primary/10">
                      <p className="text-sm text-muted-foreground">Challenge Type</p>
                      <p className="font-semibold text-foreground">{order.challenges}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              {order.special_requests && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Special Requests</h3>
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/10">
                    <p className="text-foreground whitespace-pre-wrap">{order.special_requests}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
