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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const faqs = [
  {
    question: 'Is Louise ExpenseDesk free?',
    answer: 'We\'re currently offering free access through our launch promotion.'
  },
  {
    question: 'Who can use the app?',
    answer: 'Individuals, families, small businesses, teams, organizations, and enterprises.'
  },
  {
    question: 'Do I need budgeting experience?',
    answer: 'No. The platform is designed to be beginner-friendly while still offering advanced functionality.'
  },
  {
    question: 'How do I get access?',
    answer: 'Simply message us on Facebook to request your free access link.'
  },
  {
    question: 'Can businesses and teams use the platform?',
    answer: 'Yes. Louise ExpenseDesk supports personal, team, and organizational budgeting workflows.'
  }
]

export function AppFAQ() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Find answers to common questions about Louise ExpenseDesk
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6 py-4 hover:border-primary/30 transition-colors data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
