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

// Bow SVG component
function DecorativeBow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C30 25 25 35 27 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C30 25 35 35 33 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <circle cx="30" cy="25" r="3" fill="currentColor" />
    </svg>
  )
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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative bows */}
      <div className="absolute top-10 right-10 opacity-10">
        <DecorativeBow className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <DecorativeBow className="w-20 h-20 text-primary" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <DecorativeBow className="w-8 h-8 text-primary opacity-50" />
            <p className="text-primary font-medium">Questions</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-primary/10 rounded-lg px-6 py-4 hover:border-primary/30 transition-colors data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-base font-noto-sans text-foreground hover:text-primary transition-colors font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
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
