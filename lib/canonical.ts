/**
 * Canonical URL generation for SEO
 * 
 * Prevents duplicate content issues by ensuring each page
 * has a self-referencing canonical URL.
 */

const SITE_URL = 'https://mommylouisebudgetph.com'

/**
 * Generate a canonical URL for a given path
 * @param path - Route path (e.g., '/blog/post-slug', '/products')
 * @returns Full canonical URL
 */
export function getCanonicalUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Remove trailing slashes (except for root)
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '')
  
  return `${SITE_URL}${cleanPath}`
}

/**
 * Generate canonical metadata for Next.js
 * Use in page metadata exports
 * 
 * @param path - Route path
 * @returns Metadata object with canonical URL
 * 
 * @example
 * import { getCanonicalMetadata } from '@/lib/canonical'
 * 
 * export const metadata = {
 *   ...getCanonicalMetadata('/blog/my-post'),
 *   title: 'My Blog Post',
 * }
 */
export function getCanonicalMetadata(path: string) {
  const canonicalUrl = getCanonicalUrl(path)
  
  return {
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

/**
 * Get canonical URL for homepage
 */
export function getHomeCanonical(): string {
  return SITE_URL
}

/**
 * Validate that a URL is properly formatted canonical
 */
export function isValidCanonical(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname === 'mommylouisebudgetph.com'
  } catch {
    return false
  }
}
