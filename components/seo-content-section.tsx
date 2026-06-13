'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export function SeoContentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-noto-sans font-bold text-foreground mb-8 text-center"
          >
            Master Cash Stuffing & Budget Binders for Filipino Families
          </motion.h2>

          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg dark:prose-invert max-w-none mb-12 text-foreground"
          >
            <p className="text-lg leading-relaxed mb-6">
              Cash stuffing has revolutionized how Filipino families manage their finances. This proven budgeting method combines the simplicity of physical envelopes with strategic financial planning, helping families in the Philippines take control of their money and build lasting wealth. At Mommy Louise Budget PH, we've dedicated ourselves to making cash stuffing accessible, beautiful, and effective for every family.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What is Cash Stuffing in the Philippines?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Cash stuffing is a hands-on budgeting technique where you allocate physical cash into labeled envelopes for different spending categories. Unlike digital banking, cash stuffing provides immediate visual feedback and psychological satisfaction. When you see money leaving your envelope, spending becomes real—not just a number on a screen. This tangible approach helps Filipino families reduce impulse spending, control their budgets, and achieve their financial goals faster.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Budget Binders: Your Complete Financial System</h3>
            <p className="text-lg leading-relaxed mb-4">
              A budget binder is your central hub for financial planning. Our premium budget binders for Filipino families include customizable budget templates, expense tracking sheets, savings challenge trackers, and envelope planning pages. Whether you're just starting or refining your existing system, our aesthetic binders make financial management enjoyable. Each design is created with busy moms in mind—practical, beautiful, and easy to maintain.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Budget Envelopes: The Cash Stuffing Foundation</h3>
            <p className="text-lg leading-relaxed mb-4">
              Budget envelopes are the cornerstone of the cash stuffing method. Our beautifully designed envelope system covers essential categories: groceries, utilities, transportation, entertainment, savings, and emergency funds. By organizing cash into labeled envelopes, you create clear boundaries for each spending category. This prevents overspending and ensures that money allocated for bills stays for bills, and grocery money stays for groceries. Our envelope designs are not just functional—they're aesthetically pleasing and motivating.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Savings Challenges: Build Wealth While Having Fun</h3>
            <p className="text-lg leading-relaxed mb-4">
              Savings challenges make building an emergency fund exciting and achievable. Our 52-week savings challenge, 30-day sprint, and monthly savings challenges are designed for Filipino families to gradually build significant savings without feeling the pinch. Challenge trackers in your budget binder help you stay motivated, celebrate milestones, and visualize your growing wealth. Many families report saving 100,000+ pesos in a single year using our challenge system.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Envelope Budgeting System: Complete Control</h3>
            <p className="text-lg leading-relaxed mb-4">
              Our envelope budgeting system teaches you to allocate income strategically. Instead of spending what's in your account, you divide your monthly income into categories, stuff them into envelopes, and spend only what's allocated. This simple system prevents debt, eliminates overspending, and builds financial discipline. Combined with our budget binders and digital app (Louise ExpenseDesk), you have complete visibility and control over every peso.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Family Budget Planning Philippines: Designed for Your Needs</h3>
            <p className="text-lg leading-relaxed mb-4">
              Family budget planning looks different in every household. Our templates accommodate single-income families, dual-income families, families with children, and multi-generational households. We understand Philippine pricing, common expense categories, and family financial priorities. Our comprehensive budget planning resources include templates for various family sizes, income levels, and financial goals. Whether you're planning a family vacation, saving for a home, or managing a tight budget—we have templates and strategies that work.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Choose Mommy Louise Budget PH?</h3>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><strong>Trusted by 100+ Filipino families:</strong> Our budgeting system has helped families save thousands of pesos.</li>
              <li><strong>Beautiful designs:</strong> Aesthetic binders and envelopes make budgeting something you'll look forward to.</li>
              <li><strong>Comprehensive templates:</strong> From cash stuffing guides to savings challenges, we cover everything.</li>
              <li><strong>Digital & physical:</strong> Combine our printable templates with Louise ExpenseDesk app for complete budget control.</li>
              <li><strong>Philippines-focused:</strong> Our strategies and recommendations are tailored for Filipino families.</li>
              <li><strong>Expert support:</strong> Get tips, strategies, and guidance from our community and resources.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Getting Started with Cash Stuffing</h3>
            <p className="text-lg leading-relaxed mb-4">
              Begin your cash stuffing journey in four simple steps: (1) Choose your budget categories based on your spending patterns, (2) Allocate your monthly income to each category, (3) Get physical cash and stuff it into labeled envelopes, and (4) Spend only from the allocated envelope for each category. Our budget binders and templates simplify this process and keep you organized throughout the month.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Transform Your Family Finances Today</h3>
            <p className="text-lg leading-relaxed mb-6">
              Whether you're struggling with overspending, trying to build an emergency fund, or simply want better financial control, cash stuffing offers a proven solution. Our premium budget binders, beautiful envelopes, and comprehensive system make managing your family finances simpler, more satisfying, and more effective. Join hundreds of Filipino families who've transformed their finances with Mommy Louise Budget PH.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-card border-2 border-primary/20 rounded-xl p-8 text-center"
          >
            <p className="text-lg text-foreground mb-6">
              Ready to master cash stuffing and transform your family finances?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Shop Budget Binders & Envelopes
              </Link>
              <Link 
                href="/app" 
                className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                Try Louise ExpenseDesk App
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
