export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mommy Louise Budget PH',
  url: 'https://mommylouisebudgetph.com',
  logo: 'https://mommylouisebudgetph.com/images/logo.png',
  description: 'Cash stuffing budgeting system and budget templates for Filipino families',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100087797289721',
    'https://www.tiktok.com/@mommylouiseee',
    'https://www.youtube.com/channel/UCHFl5W8x4mgy5LiEkiu0UCw',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    url: 'https://www.facebook.com/profile.php?id=100087797289721',
  },
  areaServed: 'PH',
  knowsAbout: [
    'Cash Stuffing',
    'Budget Planning',
    'Personal Finance',
    'Money Management',
    'Family Budget',
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
