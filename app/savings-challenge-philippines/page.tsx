import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Savings Challenge Philippines | 52-Week & Monthly Challenges',
  description: 'Achieve your savings goals with our proven savings challenges for Filipino families. Build emergency funds, pay off debt, and reach financial goals faster.',
  keywords: ['savings challenge', 'savings challenge Philippines', '52 week challenge', 'emergency fund challenge', 'money saving challenge'],
  openGraph: {
    title: 'Savings Challenge Philippines | 52-Week & Monthly Challenges',
    description: 'Achieve your savings goals with proven savings challenges for Filipino families. Build emergency funds and reach financial goals.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/savings-challenge-philippines',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-savings-challenge.jpg',
        width: 1200,
        height: 630,
        alt: 'Savings Challenge Philippines - Mommy Louise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savings Challenge Philippines | 52-Week & Monthly Challenges',
    description: 'Achieve your savings goals with proven challenges for Filipino families.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is a savings challenge?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A savings challenge is a structured, motivating system to build savings gradually. Instead of trying to save a large amount at once, challenges break it into manageable, achievable goals. Tracking progress visually keeps you motivated.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How much can I save with a 52-week challenge?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'In a standard 52-week challenge, you save ₱1-₱52 weekly based on the week number, totaling ₱1,378. Many families customize this to ₱10-₱520, saving ₱13,780. Use our calculator to set your target.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can I do a savings challenge on a tight budget?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Absolutely! Modify challenges to fit your budget. Save ₱50-₱500/week instead of ₱1-₱52. Even small amounts compound—₱100 monthly becomes ₱1,200 yearly. Start where you are.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do I stay motivated during a savings challenge?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Track progress visually using our trackers, celebrate milestones, involve family members, set a specific goal for the savings, and join our community for accountability and encouragement.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What if I miss a week in the savings challenge?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Simply catch up when you can or move forward without it. The goal is building the savings habit, not perfection. Most challenges can be extended or modified to fit your circumstances.'
      }
    },
  ]
}

export default function SavingsChallengePagePage() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Magazine Hero Section */}
        <section className="pt-24 pb-12 md:pb-20 bg-white dark:bg-slate-950 border-b border-border">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            {/* Hero Breadcrumb */}
            <div className="flex justify-center mb-8">
              <span className="text-sm font-medium text-primary/70 tracking-widest uppercase">Guide</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground text-center mb-6 leading-tight">
              Savings Challenge Philippines
            </h1>

            {/* Hero Subtitle */}
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Build wealth faster. Transform your savings habits with our proven challenges and achieve your financial goals.
            </p>

            {/* Reading Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground border-t border-border/50 pt-8">
              <span>~7 min read</span>
              <span className="hidden sm:block">•</span>
              <span>Complete Guide for Filipino Families</span>
            </div>
          </div>
        </section>

        {/* Editorial Content */}
        <div className="bg-background">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20">
            {/* Main Content */}
            <article className="editorial-guide-content mb-20">
              <h2>Why Savings Challenges Work</h2>
              <p>
                Savings challenges make saving money exciting and achievable. Instead of vague goals like "save more," challenges provide specific, time-bound targets. They transform saving from a chore into a game with milestones and victories. The combination of clear goals, visual tracking, and community support increases success rates significantly.
              </p>

              <h2>Popular Savings Challenges for Filipino Families</h2>
              
              <h3>52-Week Savings Challenge</h3>
              <p>
                Save a different amount each week for 52 weeks. Traditional version: ₱1 week 1, ₱2 week 2... ₱52 week 52 = ₱1,378 total. Reverse version: Start at ₱52, decrease by ₱1 weekly. Modified versions allow customization (₱10-₱520 = ₱13,780) to fit your budget. Most popular challenge because it's flexible and achievable.
              </p>

              <h3>30-Day Money Saving Challenge</h3>
              <p>
                Save a specific amount daily for 30 days. Example: Save ₱100 daily = ₱3,000 monthly. Can be adjusted (₱50-₱150 daily) based on your budget. Quick wins and fast results keep motivation high.
              </p>

              <h3>Monthly Savings Challenge</h3>
              <p>
                Save a target amount in a single month. Example: ₱5,000 in one month. Break it into weekly goals (₱1,250/week) to make it manageable. Ideal for families with irregular income.
              </p>

              <h3>No-Spend Challenge</h3>
              <p>
                Spend nothing on non-essential items for a set period (week, month). Track how much you save. Reveals unnecessary spending and builds financial discipline. Many families save ₱2,000-₱5,000 in a single month.
              </p>

              <h3>Penny Challenge</h3>
              <p>
                Save every ₱1 coin you receive. Sounds small, but coins add up. Many families save ₱2,000-₱3,000 annually without feeling the impact. Perfect for involving children.
              </p>

              <h3>Percentage-Based Challenge</h3>
              <p>
                Save a percentage of your income monthly. Save 10% = financial security. Save 20% = financial freedom path. Build emergency funds while maintaining spending flexibility.
              </p>

              <h2>How to Create Your Custom Savings Challenge</h2>
              
              <h3>Step 1: Choose Your Goal</h3>
              <p>
                Do you want to save for emergency fund, vacation, car, home, or just build habits? Specific goals increase motivation and help you choose the right challenge.
              </p>

              <h3>Step 2: Calculate Your Target</h3>
              <p>
                How much do you want to save? By when? Work backward to determine weekly or daily savings needed. If saving ₱50,000 in 12 months, you need ₱4,167 monthly or ₱960 weekly.
              </p>

              <h3>Step 3: Choose Your Challenge Structure</h3>
              <p>
                Will you save daily, weekly, or monthly? Do you prefer fixed amounts or increasing amounts? Will you involve family members?
              </p>

              <h3>Step 4: Track Progress Visually</h3>
              <p>
                Use our printable tracker, digital spreadsheet, or our budget binder. Visual progress keeps motivation high. Color in boxes, move counters, or see the savings grow in a chart.
              </p>

              <h3>Step 5: Celebrate Milestones</h3>
              <p>
                At 25%, 50%, 75%, and 100% milestones, celebrate! Share progress with family. Reward yourself (within budget) for staying consistent.
              </p>

              <h2>Savings Challenge Tips for Success</h2>
              <ul>
                <li><strong>Automate if possible:</strong> If using bank account, set up automatic transfers weekly/monthly.</li>
                <li><strong>Start small:</strong> Better to complete a small challenge than abandon a large one.</li>
                <li><strong>Make it visual:</strong> Print trackers, create charts, or use our budget binder system.</li>
                <li><strong>Involve family:</strong> Children and partners are more supportive when included in goals.</li>
                <li><strong>Keep savings separate:</strong> Use a separate account or envelope to avoid temptation.</li>
                <li><strong>Track everything:</strong> Know exactly how much you've saved and how much remains.</li>
                <li><strong>Combine challenges:</strong> Do a 52-week challenge AND a no-spend challenge for faster growth.</li>
                <li><strong>Stay flexible:</strong> If life happens and you miss a week, adjust and continue.</li>
              </ul>

              <h2>Real Results from Filipino Families</h2>
              <p>
                Here are actual savings achieved by families using our challenges:
              </p>
              <ul>
                <li><strong>52-week challenge:</strong> ₱13,780-₱50,000+ (depending on modification)</li>
                <li><strong>30-day challenge:</strong> ₱3,000-₱5,000</li>
                <li><strong>No-spend challenge:</strong> ₱2,000-₱5,000 monthly</li>
                <li><strong>Annual savings challenges:</strong> Emergency funds of ₱50,000-₱100,000+</li>
              </ul>

              <h2>Challenges for Different Financial Situations</h2>
              
              <h3>Tight Budget Family</h3>
              <p>
                Start with modified 52-week (₱10-₱100 weekly) or 30-day challenge (₱50 daily). Use no-spend challenge to find money. Every peso counts—even small consistent savings build emergency funds.
              </p>

              <h3>Mid-Range Budget Family</h3>
              <p>
                Standard 52-week or modified version (₱50-₱500 weekly). Combine with percentage-based challenge (save 10% of income). Target: ₱30,000-₱50,000 annual emergency fund.
              </p>

              <h3>Higher Income Family</h3>
              <p>
                Use modified challenges (₱100-₱1,000 weekly) or percentage-based (save 20%+). Stack multiple challenges. Target: ₱100,000+ annual savings for investments or major purchases.
              </p>

              <h2>Combining Cash Stuffing with Savings Challenges</h2>
              <p>
                Create a "savings envelope" for your cash stuffing system and dedicate it to your challenge. Visual cash envelope makes savings tangible and prevents spending the savings. This combination is powerful for building wealth fast.
              </p>

              <h2>Digital Tracking with Louise ExpenseDesk</h2>
              <p>
                Use our <Link href="/app" className="text-primary hover:underline">Louise ExpenseDesk app</Link> to automatically categorize savings and track challenge progress. Digital tracking adds convenience and provides detailed savings analytics.
              </p>
            </article>

            {/* FAQ Section */}
            <section className="py-16 md:py-20 border-t border-border mt-16 md:mt-24">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: 'What is a savings challenge?',
                    a: 'A savings challenge is a structured system to build savings gradually with specific targets, visual tracking, and milestones. Challenges make saving fun and achievable through consistent, manageable amounts.'
                  },
                  {
                    q: 'How much can I save with a 52-week challenge?',
                    a: 'Standard: ₱1,378. Modified 10x: ₱13,780. Modified 20x: ₱27,560. Modified 50x: ₱68,900. Customize the amounts to your budget and goals.'
                  },
                  {
                    q: 'Can I do a savings challenge on a tight budget?',
                    a: 'Absolutely! Modify challenges to fit your budget. Save ₱50-₱500/week or ₱50/day. Even small amounts compound—₱1,200 annually. Start where you are.'
                  },
                  {
                    q: 'How do I stay motivated?',
                    a: 'Track progress visually using our trackers, celebrate milestones, set a specific goal for the savings, involve family members, and share your journey with our community.'
                  },
                  {
                    q: 'What if I miss a week?',
                    a: 'No problem! Catch up when you can or move forward. The goal is building the savings habit, not perfection. Most challenges can be adjusted to fit your circumstances.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-6 last:border-0">
                    <h3 className="font-semibold text-lg text-foreground mb-3">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center mt-16 md:mt-24">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Ready to Start Your Savings Challenge?</h2>
              <p className="text-lg text-foreground/85 mb-8 leading-relaxed">
                Get our budget binders with built-in savings challenge trackers and start building wealth today.
              </p>
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Shop Budget Binders with Challenge Trackers
              </Link>
            </section>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
