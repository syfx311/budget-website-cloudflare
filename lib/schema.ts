export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mommy Louise Budget PH',
  url: 'https://mommylouisebudgetph.com',
  logo: 'https://mommylouisebudgetph.com/images/logo.png',
  description: 'Premium cash stuffing budgeting system, budget binders, and envelope templates for Filipino families',
  image: 'https://mommylouisebudgetph.com/images/logo.png',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100087797289721',
    'https://www.tiktok.com/@mommylouiseee',
    'https://www.youtube.com/channel/UCHFl5W8x4mgy5LiEkiu0UCw',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+63-XXX-XXXX-XXX',
    email: 'tramiecha@gmail.com',
    url: 'https://mommylouisebudgetph.com',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'PH',
    },
  ],
  knowsAbout: [
    'Cash Stuffing',
    'Budget Planning',
    'Budget Binders',
    'Budget Envelopes',
    'Savings Challenges',
    'Personal Finance',
    'Money Management',
    'Family Budget',
    'Envelope Budgeting System',
  ],
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://mommylouisebudgetph.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'App',
      item: 'https://mommylouisebudgetph.com/app',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Products',
      item: 'https://mommylouisebudgetph.com/products',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Gallery',
      item: 'https://mommylouisebudgetph.com/gallery',
    },
  ],
}

export const appSchema = {
  '@context': 'https://schema.org/',
  '@type': 'SoftwareApplication',
  name: 'Louise ExpenseDesk',
  description: 'Budgeting and expense management platform for families, teams, and businesses',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'PHP',
  },
  operatingSystem: 'Web',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '3',
  },
}

export const websiteSearchSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://mommylouisebudgetph.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mommylouisebudgetph.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const productSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Cash Stuffing Budget Binder',
  description: 'Premium aesthetic budget binder with cash stuffing templates, envelope planning, and savings challenge trackers',
  image: 'https://mommylouisebudgetph.com/images/budget-binder.jpg',
  brand: {
    '@type': 'Brand',
    name: 'Mommy Louise',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Mommy Louise Budget PH',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://mommylouisebudgetph.com/products',
    priceCurrency: 'PHP',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '100',
  },
}

export const faqSchema = [
  {
    '@type': 'Question',
    name: 'What is cash stuffing?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Cash stuffing is a hands-on budgeting technique where you allocate physical cash into labeled envelopes for different spending categories. This visual, tangible approach helps you see exactly where your money goes, control spending impulses, and build better money habits.',
    },
  },
  {
    '@type': 'Question',
    name: 'How does cash stuffing work in the Philippines?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'In the Philippines, cash stuffing works by dividing your monthly income into budget categories (groceries, utilities, transportation, savings, etc.), getting physical cash, and organizing it into labeled envelopes. This method is particularly effective in the Philippines due to the strong cash-based culture and helps families control spending while building emergency funds.',
    },
  },
  {
    '@type': 'Question',
    name: 'What budget binder should beginners use?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Beginners should start with a simple budget binder that includes basic templates for income, expenses, and savings. Our Starter Collection includes monthly budget pages, envelope planning sheets, and expense trackers. Choose a design that motivates you—aesthetic binders make the process enjoyable and sustainable.',
    },
  },
  {
    '@type': 'Question',
    name: 'Are savings challenges effective?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Yes, savings challenges are highly effective. They turn saving money into an achievable, motivating goal. Our 52-week challenge, 30-day sprints, and monthly challenges help families build emergency funds gradually. Tracking progress visually makes the goal feel attainable and keeps you motivated.',
    },
  },
  {
    '@type': 'Question',
    name: 'How do budget envelopes help save money?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Budget envelopes create physical boundaries for spending. By allocating specific amounts to each category and seeing the cash deplete, you become more conscious of spending. This prevents overspending, eliminates impulse purchases, and ensures that money allocated for essential expenses stays available for their intended purpose.',
    },
  },
]
