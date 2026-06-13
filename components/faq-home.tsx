'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    question: 'What is cash stuffing?',
    answer: 'Cash stuffing is a hands-on budgeting technique where you allocate physical cash into labeled envelopes for different spending categories. This visual, tangible approach helps you see exactly where your money goes, control spending impulses, and build better money habits. It\'s especially effective for families managing household budgets and is the foundation of the envelope budgeting system.'
  },
  {
    question: 'How does cash stuffing work in the Philippines?',
    answer: 'In the Philippines, cash stuffing leverages our strong cash-based economy. You divide your monthly income into budget categories, withdraw cash, and organize it into labeled envelopes for each category. This approach aligns with Filipino money management traditions and helps families avoid debt while building emergency funds and achieving financial goals.'
  },
  {
    question: 'What is a budget binder and do I need one?',
    answer: 'A budget binder is a centralized organization system for managing household finances with templates for budgeting, expense tracking, and savings planning. While not strictly necessary, it makes cash stuffing significantly more effective by providing organization and helping you track progress. Our premium budget binders are designed specifically for Filipino families.'
  },
  {
    question: 'How do budget envelopes help with savings?',
    answer: 'Budget envelopes create physical boundaries for spending. By allocating specific amounts and seeing cash deplete visually, you become more conscious of expenses. This prevents overspending, eliminates impulse purchases, and ensures money allocated for savings stays protected. The envelope budgeting system is proven to help families save 30-40% more.'
  },
  {
    question: 'How do savings challenges work?',
    answer: 'Savings challenges are structured systems to build wealth gradually. Our 52-week challenge, 30-day sprints, and monthly challenges break large savings goals into manageable, achievable targets. With visual tracking and milestone celebrations, families maintain motivation and typically save ₱10,000-₱50,000+ in a single challenge period.'
  },
  {
    question: 'What budget categories should I create?',
    answer: 'Common categories for Filipino families: Groceries & Food (30-35%), Utilities & Bills (15-20%), Transportation (10-15%), Entertainment (5-10%), Personal Care (5-10%), Savings (10-20%), and Miscellaneous (5-10%). Customize based on your family\'s unique needs and priorities. Our templates provide flexible category options.'
  },
  {
    question: 'Can I use budget binders and cash stuffing together?',
    answer: 'Absolutely! They work perfectly together. Use cash envelopes for daily spending control and your budget binder for tracking, analysis, and planning. This combination creates a complete financial system: physical envelopes control immediate spending while the binder provides strategic oversight and goal tracking.'
  },
  {
    question: 'How quickly will I see results from cash stuffing?',
    answer: 'Most families notice spending awareness improvements within days and savings growth within one month. Within 2-3 months of consistent cash stuffing, you\'ll have built solid money habits. By month 6, many families report significantly increased savings, eliminated credit card debt, and improved financial confidence.'
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
