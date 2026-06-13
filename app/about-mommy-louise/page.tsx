import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Contact, Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'About Mommy Louise | Budget Expert & Financial Coach',
  description: 'Meet Mommy Louise. Learn about her budgeting journey, mission to help Filipino families achieve financial freedom, and the story behind Mommy Louise Budget PH.',
  keywords: ['about Mommy Louise', 'financial coach Philippines', 'budgeting expert', 'personal story'],
  openGraph: {
    title: 'About Mommy Louise | Budget Expert & Financial Coach',
    description: 'Meet Mommy Louise. Learn about her budgeting journey and mission to help Filipino families.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/about-mommy-louise',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Mommy Louise - Budget Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mommy Louise | Budget Expert & Financial Coach',
    description: 'Meet Mommy Louise and learn about her mission to help Filipino families.',
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mommy Louise',
  url: 'https://mommylouisebudgetph.com',
  description: 'Financial expert and budgeting coach dedicated to helping Filipino families achieve financial freedom through cash stuffing and strategic money management.',
  jobTitle: 'Financial Coach & Budget Expert',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100087797289721',
    'https://www.tiktok.com/@mommylouiseee',
    'https://www.youtube.com/channel/UCHFl5W8x4mgy5LiEkiu0UCw',
  ],
}

export default function AboutPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="min-h-screen bg-background">
        <Header />

        {/* Magazine Hero Section */}
        <section className="pt-24 pb-12 md:pb-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Hero Breadcrumb */}
            <div className="flex justify-center mb-8">
              <span className="text-sm font-medium text-primary/70 tracking-widest uppercase">About</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground text-center mb-6 leading-tight">
              The Story of Mommy Louise
            </h1>

            {/* Hero Subtitle */}
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              How one mother's financial challenge became a movement to help thousands of Filipino families achieve peace of mind and financial freedom.
            </p>

            {/* Hero Image */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-12">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Fc004f790a7d541e78e49855898a5d267?format=webp&width=800&height=1200"
                alt="Mommy Louise - Budget Expert & Financial Coach"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Reading Time & Author Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground border-t border-border pt-8">
              <span>~8 min read</span>
              <span className="hidden sm:block">•</span>
              <span>By Mommy Louise</span>
            </div>
          </div>
        </section>

        {/* Editorial Content Container */}
        <div className="relative">
          {/* Intro Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                  Like many Filipino families, I faced financial stress. Despite earning a decent income, month-end always brought anxiety. Where was the money going? Why couldn't we save? How could we provide better for our growing family?
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  These questions haunted me, but they also ignited a spark—determination to find a solution. That journey led me to discover cash stuffing, and it changed everything.
                </p>
              </div>
            </div>
          </section>

          {/* The Beginning Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-slate-950/50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">The Beginning</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  I tried everything: digital budgeting apps, financial courses, expense tracking spreadsheets. Nothing stuck. The apps felt impersonal. The courses were designed for Western economies, not the Philippines. The spreadsheets became overwhelming.
                </p>

                <p className="text-lg leading-relaxed text-foreground/85">
                  Then I discovered cash stuffing—and everything changed. The physical act of organizing cash into labeled envelopes transformed my relationship with money. It was simple, effective, and immediately rewarding.
                </p>
              </div>
            </div>
          </section>

          {/* Pull Quote */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/2">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <blockquote className="text-3xl md:text-4xl font-serif italic text-center text-foreground leading-tight">
                "The physical act of organizing cash into labeled envelopes transformed my relationship with money."
              </blockquote>
            </div>
          </section>

          {/* The Breakthrough Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">The Breakthrough Moment</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  Within the first month of cash stuffing, I saved more money than the previous three months combined. But the financial wins were just the beginning. Something deeper shifted: our family's entire relationship with money improved.
                </p>

                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  My children could see and understand budgeting. Conversations about financial goals became exciting rather than stressful. Financial responsibility became a family value, not a burden.
                </p>

                <p className="text-lg leading-relaxed text-foreground/85">
                  By month three, we had built our first emergency fund. By month six, we were debt-free. By year's end, we were planning for investments and our children's education with confidence instead of fear. That confidence—I wanted every Filipino family to feel that.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-slate-950/50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center">The Journey Timeline</h2>

              <div className="relative">
                {/* Timeline */}
                <div className="space-y-8">
                  {/* Timeline Item 1 */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                      <div className="w-1 h-24 bg-border my-2"></div>
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-semibold text-primary/70 uppercase tracking-widest">Month 1</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">First Month Success</h3>
                      <p className="text-base text-foreground/75">Saved more than previous three months combined. Visible progress transformed mindset.</p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                      <div className="w-1 h-24 bg-border my-2"></div>
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-semibold text-primary/70 uppercase tracking-widest">Month 3</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">Emergency Fund Built</h3>
                      <p className="text-base text-foreground/75">Created first safety net. Family sense of security increased significantly.</p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                      <div className="w-1 h-24 bg-border my-2"></div>
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-semibold text-primary/70 uppercase tracking-widest">Month 6</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">Debt Free</h3>
                      <p className="text-base text-foreground/75">Eliminated outstanding debts. Financial stress nearly disappeared.</p>
                    </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary/70 uppercase tracking-widest">Year 1</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">Future Planning</h3>
                      <p className="text-base text-foreground/75">Confidently planning investments and children's education. New vision for family.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why It Works Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Why Cash Stuffing Works for Filipino Families</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  As a Filipino managing finances in the Philippines, I understood the unique challenges: extended family obligations, seasonal income fluctuations, strong cash-based economy, and the Filipino value of community and family-first thinking. Standard Western budgeting advice didn't address these realities.
                </p>

                <p className="text-lg leading-relaxed text-foreground/85">
                  Cash stuffing, however, aligned perfectly with Filipino culture. It respects the cash-based nature of our economy, allows flexibility for family obligations, and creates visual, tangible progress that resonates with Filipino values of hard work and perseverance.
                </p>
              </div>

              {/* Lesson Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="p-8 border border-border rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Culturally Aligned</h3>
                  <p className="text-foreground/75">Respects our cash-based economy and family-centered values.</p>
                </div>
                <div className="p-8 border border-border rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Visually Tangible</h3>
                  <p className="text-foreground/75">Physical cash creates immediate, satisfying visual feedback.</p>
                </div>
                <div className="p-8 border border-border rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Flexible & Practical</h3>
                  <p className="text-foreground/75">Adapts to seasonal income and family obligation patterns.</p>
                </div>
                <div className="p-8 border border-border rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Values Resonance</h3>
                  <p className="text-foreground/75">Embodies hard work and perseverance Filipinos admire.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Second Pull Quote */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/2">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <blockquote className="text-3xl md:text-4xl font-serif italic text-center text-foreground leading-tight">
                "It's not a foreign system imposed on our culture—it's a method that works within our culture."
              </blockquote>
            </div>
          </section>

          {/* Community Impact Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">From Personal Success to Community Impact</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  I began sharing my system with friends and family. Requests poured in: "Can you help me set up envelopes?" "I want those beautiful binders you're using." "How do I explain this to my kids?"
                </p>

                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  Rather than giving each person personal advice, I decided to create beautiful, comprehensive resources that could help hundreds, then thousands, of Filipino families.
                </p>

                <p className="text-lg leading-relaxed text-foreground/85">
                  That's when Mommy Louise Budget PH was born. Not as a business, but as a mission—to democratize financial freedom for Filipino families through accessible, beautiful, effective tools.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-slate-950/50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">My Mission Today</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                  We believe every Filipino family deserves financial freedom. Not wealth measured by cars or mansions, but the peace of mind that comes from financial stability: knowing bills will be paid, emergencies won't devastate you, and future goals are achievable.
                </p>

                <p className="text-lg leading-relaxed text-foreground/85">
                  We believe financial literacy is a basic right, not a privilege. And we believe that budgeting should be beautiful, not boring.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Three Core Principles</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground/85"><strong className="text-foreground">Accessibility</strong> — Anyone can start, regardless of income level.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground/85"><strong className="text-foreground">Effectiveness</strong> — The system delivers real, measurable results.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground/85"><strong className="text-foreground">Beauty</strong> — If you use something daily, it should bring you joy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lessons Learned Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">Lessons from 100+ Families</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                  Working with Filipino families over the years has taught me that financial transformation isn't about the method—it's about consistency, mindset, and community. The families who transform their finances aren't the smartest or the richest.
                </p>
              </div>

              {/* Core Beliefs Cards */}
              <div className="space-y-4">
                <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">They Started, Even When Imperfect</h3>
                  <p className="text-foreground/75">Perfect is the enemy of progress. Beginning matters more than waiting for ideal conditions.</p>
                </div>
                <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">They Stayed Consistent</h3>
                  <p className="text-foreground/75">Even when motivation wavered, they maintained their system. Consistency builds momentum.</p>
                </div>
                <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">They Adjusted When Needed</h3>
                  <p className="text-foreground/75">Life changes. Successful families adapted their systems rather than abandoning them.</p>
                </div>
                <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">They Celebrated Small Wins</h3>
                  <p className="text-foreground/75">Acknowledging progress, no matter how small, kept momentum and motivation alive.</p>
                </div>
                <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">They Involved Family</h3>
                  <p className="text-foreground/75">Shared goals create accountability and transform finances from individual burden to family mission.</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                The most successful families had two things: a system that worked for them and support from community who believed in their goals.
              </p>
            </div>
          </section>

          {/* Third Pull Quote */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/2">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <blockquote className="text-3xl md:text-4xl font-serif italic text-center text-foreground leading-tight">
                "Financial transformation isn't about the method—it's about consistency, mindset, and community."
              </blockquote>
            </div>
          </section>

          {/* Core Beliefs Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-slate-950/50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">My Core Beliefs About Money & Family</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Money is a tool, not the goal</h3>
                  <p className="text-lg text-foreground/85">The goal is peace of mind, family security, and freedom to pursue what matters.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Financial education is foundational</h3>
                  <p className="text-lg text-foreground/85">Every person, every family, should understand money. It's not taught in schools, but it should be.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Filipino families are capable</h3>
                  <p className="text-lg text-foreground/85">We're resourceful, resilient, and community-oriented. We need systems that work for us.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Budgeting should be simple</h3>
                  <p className="text-lg text-foreground/85">If you can't explain your budget in one sentence, it's too complicated.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Small progress beats heroic effort</h3>
                  <p className="text-lg text-foreground/85">Better to save ₱100 monthly for 12 months than try to save ₱10,000 once and fail.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community accelerates transformation</h3>
                  <p className="text-lg text-foreground/85">Sharing journeys, celebrating wins, and supporting others makes financial transformation enjoyable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center">The Impact So Far</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-4">100+</p>
                  <p className="text-lg text-foreground/85">Families Transformed</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-4">₱50M+</p>
                  <p className="text-lg text-foreground/85">Saved by Families</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-4">5+</p>
                  <p className="text-lg text-foreground/85">Years of Impact</p>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Message */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5 border-t-2 border-primary/20">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">A Message for You</h2>

              <p className="text-xl text-foreground/85 leading-relaxed mb-8">
                My family is financially stable. My children understand money better than most adults. But the work isn't finished—it's just beginning. Every day, I receive messages from families who've transformed their finances using our tools.
              </p>

              <p className="text-xl text-foreground/85 leading-relaxed mb-12">
                My goal: Help 10,000 Filipino families achieve financial freedom before I retire. That means creating better resources, building stronger community, and innovating ways to make financial management accessible and beautiful.
              </p>

              <div className="font-signature text-5xl text-primary mb-4">Mommy Louise</div>
              <p className="text-foreground/70 italic">Founder & Creator</p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Ready to Transform Your Finances?</h2>

              <p className="text-xl text-foreground/85 mb-12 max-w-xl mx-auto">
                Join thousands of Filipino families achieving financial freedom through cash stuffing and our beautiful tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/gallery"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Explore Resources
                </a>
                <a
                  href="/blog"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Read the Blog
                </a>
              </div>
            </div>
          </section>

          {/* Social Connect Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-slate-950/50">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Connect With Me</h2>
              <p className="text-lg text-foreground/85 mb-8">
                Follow my journey, get daily tips, and join our budgeting community.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100087797289721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@mommylouiseee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHFl5W8x4mgy5LiEkiu0UCw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </section>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
