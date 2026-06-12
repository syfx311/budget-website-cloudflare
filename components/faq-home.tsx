'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    question: 'What is the cash stuffing method?',
    answer: 'Cash stuffing is a hands-on budgeting technique where you allocate physical cash into labeled envelopes for different spending categories. This visual, tangible approach helps you see exactly where your money goes, control spending impulses, and build better money habits. It\'s especially effective for families managing household budgets.'
  },
  {
    question: 'How do I get started with cash stuffing?',
    answer: 'Getting started is simple: Choose your budget categories (groceries, utilities, savings, etc.), get your budget templates or envelopes, divide your monthly income according to your plan, and stuff the cash into labeled envelopes. Our personalized templates make this process easy and organized. Check out our products page for ready-made envelope sets.'
  },
  {
    question: 'Is cash stuffing better than digital budgeting apps?',
    answer: 'Both have benefits! Cash stuffing gives you immediate visual feedback and makes you more intentional with spending since you physically handle cash. Digital apps offer convenience and detailed tracking. Many people use a combination of both approaches. The cash stuffing method is particularly effective for families wanting to change their spending behavior.'
  },
  {
    question: 'How can I customize my budget categories?',
    answer: 'Every family\'s budget is unique. You can create categories based on your specific needs: groceries, utilities, LPG, internet, school allowance, savings, self-care, transportation, and more. Our customizable templates let you choose which categories matter most to your household. Browse our design gallery to find templates that match your lifestyle.'
  },
  {
    question: 'Can I use cash stuffing for multiple income sources?',
    answer: 'Absolutely! Cash stuffing works great for irregular income, side hustles, and multiple income earners. Simply allocate your total income across your categories each period, then track and adjust as needed. The visual nature of the envelopes helps you see exactly how much flexibility you have when income varies.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most families notice results within the first month of consistent cash stuffing. You\'ll immediately see better spending awareness, and within 2-3 months, you\'ll have built solid money habits. By month 6, many families report significantly increased savings and improved financial confidence.'
  },
]

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            Cash Stuffing FAQs
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about getting started with the cash stuffing budgeting method.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-2 border-primary/10 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-foreground hover:text-primary transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-primary/10 bg-card/50 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Have more questions? Check out our design gallery or shop our ready-made templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
            >
              Browse Gallery
            </Link>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-medium"
            >
              Shop Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
