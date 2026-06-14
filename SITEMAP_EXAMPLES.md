# Dynamic Sitemap - Content Update Examples

Quick reference for updating content and watching the sitemap reflect changes.

---

## Scenario 1: Publish a New Blog Post

### Steps

1. **Add post to `lib/blog-posts.ts`**:

```typescript
{
  id: '5',
  slug: 'emergency-fund-guide-philippines',
  title: 'Build Your Emergency Fund: Complete Guide for Filipino Families',
  description: 'Learn how to build a 3-6 month emergency fund using the cash stuffing method. This guide walks you through setting goals, calculating needs, and maintaining discipline.',
  publishedAt: '2024-06-15',  // Today's date
  updatedAt: '2024-06-15',     // Today's date
  category: 'Savings',
  tags: ['emergency fund', 'savings', 'financial planning', 'family finances'],
  author: 'Mommy Louise',
  authorImage: '/images/mommy-louise.jpg',
  featuredImage: '...',
  readingTime: 12,
  wordCount: 2500,
  primaryKeyword: 'emergency fund Philippines',
  content: '', // Load from blog-content.ts
}
```

2. **Verify in sitemap**:
   - New entry: `https://mommylouisebudgetph.com/blog/emergency-fund-guide-philippines`
   - `<lastmod>`: `2024-06-15`
   - `/blog` hub page `<lastmod>` updates to `2024-06-15` (newest post date)

---

## Scenario 2: Update Existing Blog Post

### Example: Fix content in cash stuffing guide

1. **Update the post in `lib/blog-posts.ts`**:

```typescript
{
  id: '1',
  slug: 'cash-stuffing-for-beginners-guide',
  title: 'Cash Stuffing for Beginners: Complete Step-by-Step Guide',
  description: '...updated description...',
  publishedAt: '2024-01-15',
  updatedAt: '2024-06-15',  // ← Change from 2024-01-15 to today
  // ... rest of post
}
```

2. **Before change in sitemap**:
```xml
<url>
  <loc>https://mommylouisebudgetph.com/blog/cash-stuffing-for-beginners-guide</loc>
  <lastmod>2024-01-15T00:00:00.000Z</lastmod>
</url>
```

3. **After change in sitemap** (on next request):
```xml
<url>
  <loc>https://mommylouisebudgetph.com/blog/cash-stuffing-for-beginners-guide</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
</url>
```

**Impact on Google**: Google crawls this page sooner because it sees a recent modification.

---

## Scenario 3: Update Product Offerings

### Example: Update Premium Package features

1. **Modify product in `lib/products.ts`**:

```typescript
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
    'Bling charm',
    'FREE shipping',  // ← New feature added
  ],
  isPopular: true,
  createdAt: '2024-01-01',
  updatedAt: '2024-06-15',  // ← Update date when features change
}
```

2. **Sitemap auto-updates**:

```xml
<!-- /products page -->
<url>
  <loc>https://mommylouisebudgetph.com/products</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>

<!-- Homepage also updates (features products) -->
<url>
  <loc>https://mommylouisebudgetph.com</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

**Impact on Google**: Products page shows as recently updated, gets crawled sooner.

---

## Scenario 4: Update Static Page

### Example: Update About page

1. **Open `app/sitemap.ts` and update**:

```typescript
// Before
{
  url: `${baseUrl}/about-mommy-louise`,
  lastModified: new Date('2024-06-13'),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
},

// After
{
  url: `${baseUrl}/about-mommy-louise`,
  lastModified: new Date('2024-06-15'),  // ← Update date
  changeFrequency: 'monthly' as const,
  priority: 0.7,
},
```

2. **After deployment, sitemap shows**:

```xml
<url>
  <loc>https://mommylouisebudgetph.com/about-mommy-louise</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## Scenario 5: Multiple Content Updates in One Day

### Update blog post AND product

**Step 1**: Update blog post date in `lib/blog-posts.ts`
```typescript
updatedAt: '2024-06-15'  // ← Publish new content
```

**Step 2**: Update product in `lib/products.ts`
```typescript
updatedAt: '2024-06-15'  // ← Launch new features
```

**Result in sitemap**:

```xml
<!-- /blog hub reflects newest blog post -->
<url>
  <loc>https://mommylouisebudgetph.com/blog</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
</url>

<!-- /products reflects latest product update -->
<url>
  <loc>https://mommylouisebudgetph.com/products</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
</url>

<!-- Individual blog post entry -->
<url>
  <loc>https://mommylouisebudgetph.com/blog/new-post-slug</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
</url>

<!-- Individual product pages (if implemented) -->
<url>
  <loc>https://mommylouisebudgetph.com/blog/old-post-slug</loc>
  <lastmod>2024-06-15T00:00:00.000Z</lastmod>
</url>
```

**Search engine impact**: Both content types signal active site maintenance.

---

## Verification Steps

### Method 1: Check Local Sitemap
```bash
# Terminal
curl http://localhost:3000/sitemap.xml | grep -A2 "cash-stuffing"
```

**Output example**:
```xml
<url>
<loc>https://mommylouisebudgetph.com/blog/cash-stuffing-for-beginners-guide</loc>
<lastmod>2024-06-15T00:00:00.000Z</lastmod>
```

### Method 2: Check in Browser
1. Open `http://localhost:3000/sitemap.xml`
2. Search page for your content (Ctrl+F / Cmd+F)
3. Look for the URL and `<lastmod>` date

### Method 3: Deploy & Check Production
1. Deploy changes to production
2. Visit `https://mommylouisebudgetph.com/sitemap.xml`
3. Verify your content shows the new date

### Method 4: Google Search Console
1. Go to Google Search Console
2. Select your property
3. Go to **Sitemaps** section
4. Look for "Last read" timestamp
5. Verify number of URLs matches

---

## Common Patterns

### When to Update `updatedAt`

✅ **Always update when**:
- Publishing new content (blog post)
- Editing content significantly (grammar, structure, facts)
- Changing product features or pricing
- Updating page text or design
- Adding new images or media

❌ **Don't need to update when**:
- Minor formatting changes only
- Fixing typos (optional, but can help SEO)
- Changing CSS/styling without content change

### Date Format Checklist

```typescript
// ✅ Correct (ISO format)
updatedAt: '2024-06-15'

// ❌ Wrong - will break
updatedAt: '06-15-2024'
updatedAt: 'June 15, 2024'
updatedAt: '2024/06/15'
```

---

## Using Utility Functions

### In Your Code

```typescript
// Import the utility
import { getTodayISO, formatToISODate } from '@/lib/sitemap-utils'

// When creating new content
const newPost = {
  id: '5',
  slug: 'new-post',
  publishedAt: getTodayISO(),  // '2024-06-15'
  updatedAt: getTodayISO(),    // '2024-06-15'
  // ...
}

// When updating content
const updatedPost = {
  ...existingPost,
  updatedAt: getTodayISO(),    // Always today's date
}

// Converting various date formats
const normalizedDate = formatToISODate('2024-01-15T10:30:00Z')
// Returns: '2024-01-15'
```

---

## Monitoring & Validation

### Weekly Check
1. Review Google Search Console for crawl stats
2. Check that recent changes are in sitemap
3. Verify no errors reported

### Monthly Review
1. Compare blog post dates with actual edit dates
2. Ensure product dates match when features changed
3. Check Google Search Console indexation report

### After Each Update
1. Update the `updatedAt` field
2. Deploy changes
3. Check `sitemap.xml` reflects the change
4. If not visible: restart dev server or wait for cache clear

---

## Questions & Answers

**Q: Why aren't my changes showing in the sitemap?**
A: 
1. Verify the date is in `YYYY-MM-DD` format
2. Restart the dev server
3. Check you updated the right file (`lib/blog-posts.ts` or `lib/products.ts`)

**Q: How often does Google crawl the sitemap?**
A: Google checks sitemaps weekly by default, but more frequently if you have active content updates.

**Q: Do I need to resubmit the sitemap to Google?**
A: No. Google automatically recrawls the sitemap regularly. The `robots.txt` file already points to it.

**Q: Can I have multiple dates for one URL?**
A: No. Each URL has one `<lastmod>` date. Blog posts show their `updatedAt`, static pages show the date you set in `app/sitemap.ts`.

**Q: What if I accidentally set a future date?**
A: Google will treat it as a valid update. If it's far in the future, it might cause crawl scheduling issues. Always use today's date or past dates.

---

## Need Help?

Refer to:
- `DYNAMIC_SITEMAP_GUIDE.md` - Full documentation
- `SITEMAP_IMPLEMENTATION_SUMMARY.md` - Overview and specs
- `app/sitemap.ts` - Source code
- `lib/blog-posts.ts` - Blog data structure
- `lib/products.ts` - Product data structure
