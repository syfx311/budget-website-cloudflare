# Canonical Tags - Quick Reference

## What Are They?

Self-referencing canonical tags tell Google which URL is the official version of a page.

```html
<link rel="canonical" href="https://mommylouisebudgetph.com/products" />
```

## Current Status

✅ **Implemented on all major pages**

- Homepage: `https://mommylouisebudgetph.com/`
- Products: `https://mommylouisebudgetph.com/products`
- Blog: `https://mommylouisebudgetph.com/blog`
- App: `https://mommylouisebudgetph.com/app`
- Gallery: `https://mommylouisebudgetph.com/gallery`
- About: `https://mommylouisebudgetph.com/about-mommy-louise`
- All blog posts: `/blog/{post-slug}`
- All SEO landing pages: `/cash-stuffing-philippines`, etc.

## How They Work

### Pattern
Every page uses this same pattern:

```typescript
import { getCanonicalMetadata } from '@/lib/canonical'

export const metadata: Metadata = {
  ...getCanonicalMetadata('/page-path'),
  title: 'Your Title',
  // ...
}
```

### Result
Next.js renders:
```html
<link rel="canonical" href="https://mommylouisebudgetph.com/page-path" />
```

## Adding to New Pages

Copy-paste this into any new page file:

```typescript
import { getCanonicalMetadata } from '@/lib/canonical'

export const metadata: Metadata = {
  ...getCanonicalMetadata('/your-new-route'),
  title: 'Page Title',
  description: 'Your description',
  // ... rest of metadata
}
```

## Verify It Works

### In Browser
1. Visit page
2. Right-click → View Page Source
3. Ctrl+F / Cmd+F search: `canonical`
4. Should see: `<link rel="canonical" href="..."/>`

### In Terminal
```bash
curl https://mommylouisebudgetph.com/products | grep canonical
```

Expected output:
```
<link rel="canonical" href="https://mommylouisebudgetph.com/products"/>
```

## Key Points

✅ **Self-referencing**: Each page points to itself
✅ **No duplicates**: One canonical per page
✅ **Automatic**: Centralized utility handles it
✅ **Scalable**: New pages inherit automatically
✅ **No manual HTML**: Use utility function only

## SEO Benefits

1. **Prevents duplicate content penalties**
2. **Consolidates ranking signals to one URL**
3. **Saves crawl budget**
4. **Faster indexation**
5. **Clearer search results**

## Files to Know

| File | Purpose |
|------|---------|
| `lib/canonical.ts` | Utility functions for canonical URLs |
| `app/page.tsx` | Any page with metadata |
| `app/layout.tsx` | Root layout (homepage canonical) |

## Common Tasks

### Check if page has canonical
```bash
curl http://localhost:3000/products | grep canonical
```

### Add canonical to existing page
```typescript
// Add import
import { getCanonicalMetadata } from '@/lib/canonical'

// Add to metadata spread
export const metadata: Metadata = {
  ...getCanonicalMetadata('/your-path'),
  // ... rest of metadata
}
```

### Create new page with canonical
```typescript
import { getCanonicalMetadata } from '@/lib/canonical'

export const metadata: Metadata = {
  ...getCanonicalMetadata('/new-page'),
  title: 'New Page',
}

export default function NewPage() {
  return <div>Page content</div>
}
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Canonical not showing | Restart dev server, check import and spread operator |
| Wrong URL | Verify path parameter is correct |
| Multiple canonicals | Remove duplicate `getCanonicalMetadata()` calls |

## Links

- **Full Guide**: `CANONICAL_TAGS_GUIDE.md`
- **Summary**: `CANONICAL_TAGS_SUMMARY.md`
- **Source**: `lib/canonical.ts`

## Remember

- 🚫 Don't manually write `<link rel="canonical"...>`
- ✅ Always use `getCanonicalMetadata('/path')`
- ✅ Always spread it with `...` operator
- ✅ One per page only

## Questions?

Check:
1. `lib/canonical.ts` for utility code
2. `app/*/page.tsx` files for usage examples
3. `CANONICAL_TAGS_GUIDE.md` for detailed docs
