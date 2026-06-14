export interface Product {
  id: string
  title: string
  slug?: string
  features: string[]
  badge?: string
  isPopular?: boolean
  createdAt: string
  updatedAt: string
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Mystic Package',
    slug: 'mystic-package',
    features: [
      'A7 transparent looseleaf binder',
      '10 envelopes',
      '10 inserts',
      '2 dashboards',
      'Effortless elegance for your budget journey'
    ],
    createdAt: '2024-01-01',
    updatedAt: '2024-06-13',
  },
  {
    id: '2',
    title: 'Premium Package',
    slug: 'premium-package',
    badge: 'Most Popular',
    features: [
      'A6 or A7 premium tri-fold binder',
      '10 self-zipping envelopes',
      '10 bespoke inserts',
      '1 customized frontis piece',
      'Matching dividers',
      'Acrylic pen',
      'Bling charm'
    ],
    isPopular: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-06-13',
  },
  {
    id: '3',
    title: 'Sophie Package',
    slug: 'sophie-package',
    features: [
      'A6 soft leather binder',
      '10 envelopes',
      '10 inserts',
      '1 signature dashboard',
      '2 dividers',
      'Thoughtful surprises'
    ],
    createdAt: '2024-01-01',
    updatedAt: '2024-06-13',
  },
  {
    id: '4',
    title: 'Elegance Package',
    slug: 'elegance-package',
    features: [
      'A6 looseleaf binder',
      '12 custom laminated envelopes',
      '12 inserts',
      'Choice of challenge (12-Month / Weekly / Theme-Based)',
      'Hand-matched to your order'
    ],
    createdAt: '2024-01-01',
    updatedAt: '2024-06-13',
  },
  {
    id: '5',
    title: 'Ultimate Package',
    slug: 'ultimate-package',
    badge: 'Complete Collection',
    features: [
      'A premium, dreamy, handy caddy bag - perfect to organize your cash stuff essentials',
      'A premium tri-fold A6 binder - perfect to organize and track your spending',
      'A sophie pretty A6 binder - perfect for budget binder or savings binder',
      '100 envelope A5 size savings challenge - perfect for thrilled savings journey',
      'Premium SSC A7 binder - perfect for daily spending',
      'Loose leaf binder for savings challenge',
      'Aesthetic themed calculator - because your calculator must be pretty too',
      'Acrylic cash dividers - to make it more organized and clean',
      '100 pcs pad budget planner - high end cover to list all your spendings',
      '4 beautiful themed charms for extra bling '
    ],
    isPopular: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-06-13',
  }
]

export function getLatestProductUpdate(): string {
  const latest = products.reduce((max, product) => {
    const date = new Date(product.updatedAt)
    return date > new Date(max) ? product.updatedAt : max
  }, products[0].updatedAt)
  
  return latest.split('T')[0]
}
