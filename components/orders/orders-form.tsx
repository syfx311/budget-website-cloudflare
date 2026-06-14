'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const DEFAULT_IFRAME_HEIGHT = 5000
const MIN_IFRAME_HEIGHT = 3000

export function OrdersForm() {
  const [iframeError, setIframeError] = useState(false)
  const [iframeHeight, setIframeHeight] = useState(DEFAULT_IFRAME_HEIGHT)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security: validate origin for production
      if (event.data?.type === 'resize-iframe' && typeof event.data.height === 'number') {
        const newHeight = Math.max(event.data.height, MIN_IFRAME_HEIGHT)
        setIframeHeight(newHeight)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleOpenInNewTab = () => {
    window.open('https://order.mommylouisebudgetph.com/', '_blank')
  }

  return (
    <section id="order-form" className="orders-form py-20 md:py-28 bg-background scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-noto-sans font-bold text-foreground mb-4 text-center">
            Order Form
          </h2>
          <p className="text-muted-foreground text-lg text-center">
            Complete the form below to submit your order.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeInUp}
          className="order-form-container"
        >
          {/* Error message if iframe fails to load */}
          {iframeError && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-semibold">Order Form Unavailable</p>
                <p className="text-muted-foreground text-sm mt-1">
                  The order form couldn't load in this view. Please use the button below to access the ordering system.
                </p>
              </div>
            </div>
          )}

          {/* Iframe container */}
          <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm mb-6">
            <div className="iframe-wrapper">
              <iframe
                ref={iframeRef}
                id="order-form-iframe"
                src="https://order.mommylouisebudgetph.com/"
                width="100%"
                height={iframeHeight}
                style={{
                  border: 'none',
                  borderRadius: '16px',
                  background: 'white',
                  display: 'block',
                  overflow: 'hidden'
                }}
                loading="lazy"
                title="Mommy Louise Budget PH Order Form"
                onError={() => setIframeError(true)}
              />
            </div>
          </div>

          {/* Open in new tab button */}
          <div className="flex justify-center">
            <Button
              onClick={handleOpenInNewTab}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 h-12 text-base font-semibold"
            >
              Open Order Form in New Tab
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
