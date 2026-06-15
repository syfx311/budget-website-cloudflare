'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const faqs = [
  {
    question: 'How do I know if my order was received?',
    answer: 'You will see a confirmation after successfully submitting the form.'
  },
  {
    question: 'Can I edit my order after submission?',
    answer: 'Please contact our team as soon as possible if changes are needed.'
  },
  {
    question: 'How long does order processing take?',
    answer: 'Processing times may vary depending on product availability and order volume.'
  },
  {
    question: 'What should I do if the form is not loading?',
    answer: 'Use the "Open Order Form in New Tab" button to access the ordering system directly.'
  },
]

export function OrdersFAQ() {
  return (
    <section className="orders-faq py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-noto-sans font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our ordering process
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/50 rounded-xl overflow-hidden data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <span className="text-left font-noto-sans font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
