import type { Metadata } from 'next'
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
      <main className="min-h-screen">
        <Header />
        <div className="pt-24 pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-noto-sans font-bold text-foreground mb-4">
                About Mommy Louise
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Discover the story, mission, and passion behind Mommy Louise Budget PH—and how it all started with a family's financial challenge.
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12 text-foreground">
              <h2>The Journey Begins</h2>
              <p>
                Like many Filipino families, I faced financial stress. Despite earning a decent income, month-end always brought anxiety. Where was the money going? Why couldn't we save? How could we provide better for our growing family? These questions haunted me, but they also ignited a spark—determination to find a solution.
              </p>

              <p>
                I tried everything: digital budgeting apps, financial courses, expense tracking spreadsheets. Nothing stuck. Then I discovered cash stuffing—and everything changed. The physical act of organizing cash into labeled envelopes transformed my relationship with money. It was simple, effective, and immediately rewarding.
              </p>

              <h2>The Breakthrough Moment</h2>
              <p>
                Within the first month of cash stuffing, I saved more money than the previous three months combined. Beyond the savings, something deeper shifted: our family's entire relationship with money improved. My children could see and understand budgeting. Conversations about financial goals became exciting rather than stressful. Financial responsibility became a family value, not a burden.
              </p>

              <p>
                By month three, we had built our first emergency fund. By month six, we were debt-free. By year's end, we were planning for investments and our children's education with confidence instead of fear. That confidence—I wanted every Filipino family to feel that.
              </p>

              <h2>Why Cash Stuffing Works for Philippine Families</h2>
              <p>
                As a Filipino managing finances in the Philippines, I understood the unique challenges: extended family obligations, seasonal income fluctuations, strong cash-based economy, and the Filipino value of community and family-first thinking. Standard Western budgeting advice didn't address these realities.
              </p>

              <p>
                Cash stuffing, however, aligned perfectly with Filipino culture. It respects the cash-based nature of our economy, allows flexibility for family obligations, and creates visual, tangible progress that resonates with Filipino values of hard work and perseverance. It's not a foreign system imposed on our culture—it's a method that works within our culture.
              </p>

              <h2>From Personal Success to Community Impact</h2>
              <p>
                I began sharing my system with friends and family. Requests poured in: "Can you help me set up envelopes?" "I want those beautiful binders you're using." "How do I explain this to my kids?" Rather than giving each person personal advice, I decided to create beautiful, comprehensive resources that could help hundreds, then thousands, of Filipino families.
              </p>

              <p>
                That's when Mommy Louise Budget PH was born. Not as a business, but as a mission—to democratize financial freedom for Filipino families through accessible, beautiful, effective tools.
              </p>

              <h2>Our Mission: Financial Freedom for Every Family</h2>
              <p>
                We believe every Filipino family deserves financial freedom. Not wealth measured by cars or mansion's, but the peace of mind that comes from financial stability: knowing bills will be paid, emergencies won't devastate you, and future goals are achievable. We believe financial literacy is a basic right, not a privilege. And we believe that budgeting should be beautiful, not boring.
              </p>

              <p>
                That's why every product we create, every guide we write, and every resource we share focuses on three principles: accessibility, effectiveness, and beauty. Anyone should be able to start, regardless of income level. The system should deliver real, measurable results. And if you're going to use something daily, it should bring you joy.
              </p>

              <h2>What I've Learned From 100+ Families</h2>
              <p>
                Over the years working with Filipino families, I've learned that financial transformation isn't about the method—it's about consistency, mindset, and community. The families who transform their finances aren't the smartest or the richest. They're the ones who:
              </p>
              <ul>
                <li>Started, even when imperfect</li>
                <li>Stayed consistent, even when motivation wavered</li>
                <li>Adjusted, when circumstances changed</li>
                <li>Celebrated small wins, keeping momentum</li>
                <li>Involved family, creating accountability</li>
              </ul>

              <p>
                The most successful families had two things: a system that worked for them (whether our budget binders or their own adapted version) and support from community who believed in their goals.
              </p>

              <h2>Why I Created Louise ExpenseDesk App</h2>
              <p>
                While physical cash stuffing remains powerful, I realized that families needed flexibility. Not everyone has time to manually track everything. Young professionals want digital convenience. Large families need to coordinate spending across multiple people. So I created Louise ExpenseDesk—a digital tool that complements physical cash stuffing rather than replaces it.
              </p>

              <p>
                The app lets families: track spending automatically, collaborate with family members, analyze spending patterns, set and monitor goals, and receive accountability alerts. It's the technology layer on top of the proven psychological power of cash stuffing.
              </p>

              <h2>My Core Beliefs About Money & Family</h2>
              <ul>
                <li><strong>Money is a tool, not the goal:</strong> The goal is peace of mind, family security, and freedom to pursue what matters.</li>
                <li><strong>Financial education is foundational:</strong> Every person, every family, should understand money. It's not taught in schools, but it should be.</li>
                <li><strong>Filipino families are capable:</strong> We're resourceful, resilient, and community-oriented. We don't need to become like Western families. We need systems that work for us.</li>
                <li><strong>Budgeting should be simple:</strong> If you can't explain your budget in one sentence, it's too complicated.</li>
                <li><strong>Small consistent progress beats heroic effort:</strong> Better to save ₱100 monthly for 12 months (₱1,200) than to try to save ₱10,000 once and fail.</li>
                <li><strong>Community accelerates transformation:</strong> Sharing journeys, celebrating wins, and supporting others makes financial transformation enjoyable.</li>
              </ul>

              <h2>Where I Am Now</h2>
              <p>
                My family is financially stable. My children understand money and budgeting better than most adults. My extended family has benefited from our systems. But the work isn't finished—it's just beginning. Every day, I receive messages from families who've transformed their finances using our tools, and that fuel my continued commitment.
              </p>

              <p>
                My goal: Before retiring, I want to help 10,000 Filipino families achieve financial freedom. That means creating better resources, building stronger community, and continuing to innovate ways to make financial management accessible and beautiful.
              </p>

              <h2>My Commitment to You</h2>
              <p>
                When you use Mommy Louise Budget PH products, you're not just buying a binder or using an app. You're joining a movement toward financial freedom for Filipino families. I commit to:
              </p>
              <ul>
                <li>Creating resources that actually work</li>
                <li>Continuously improving based on your feedback</li>
                <li>Being transparent about products and pricing</li>
                <li>Supporting you with guides, tips, and community</li>
                <li>Never promoting unsustainable or unethical financial products</li>
                <li>Treating every customer as someone I personally care about</li>
              </ul>

              <h2>Join the Movement</h2>
              <p>
                Whether you're just starting your budgeting journey or looking to optimize an existing system, you're not alone. Thousands of Filipino families are achieving financial freedom using cash stuffing, budget binders, and our digital tools. You can be next.
              </p>
            </div>

            {/* Key Stats */}
            <div className="bg-card rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Impact by the Numbers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">100+</p>
                  <p className="text-lg text-muted-foreground">Families Transformed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">₱50M+</p>
                  <p className="text-lg text-muted-foreground">Saved by Families</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">5 Years</p>
                  <p className="text-lg text-muted-foreground">Of Impact & Learning</p>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Connect With Me</h2>
              <p className="text-lg text-foreground mb-6">
                Follow my journey, get tips, and join our community on social media.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://www.facebook.com/profile.php?id=100087797289721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.tiktok.com/@mommylouiseee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  TikTok
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCHFl5W8x4mgy5LiEkiu0UCw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-primary/10 border-2 border-primary/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Transformation?</h2>
              <p className="text-lg text-foreground mb-6">
                Join hundreds of Filipino families who are achieving financial freedom.
              </p>
              <Link 
                href="/products"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
