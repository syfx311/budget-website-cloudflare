/**
 * Sitemap Utilities
 * 
 * Helper functions for managing dynamic sitemap generation.
 * The sitemap automatically updates when content (products, blog posts) changes.
 */

/**
 * Format a date string to ISO date format (YYYY-MM-DD)
 * @param dateString - Date string in any format (2024-01-15, 2024-01-15T10:00:00Z, etc.)
 * @returns ISO date string (YYYY-MM-DD)
 */
export function formatToISODate(dateString: string): string {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}

/**
 * Get today's date in ISO format
 * @returns ISO date string (YYYY-MM-DD)
 */
export function getTodayISO(): string {
  return new Date().toISOString().split('T')[0]
}

/**
 * Update content modification date
 * Call this when you modify blog posts, products, or other content
 * The sitemap will automatically reflect the new date
 * 
 * @example
 * // When updating a blog post:
 * const updatedPost = {
 *   ...post,
 *   updatedAt: getTodayISO()
 * }
 * 
 * // When updating a product:
 * const updatedProduct = {
 *   ...product,
 *   updatedAt: getTodayISO()
 * }
 */
export function getContentLastModDate(dateString?: string): string {
  if (!dateString) return getTodayISO()
  return formatToISODate(dateString)
}

/**
 * Verify sitemap entry has valid date format
 * @param dateString - Date string to validate
 * @returns true if valid ISO date format
 */
export function isValidISODate(dateString: string): boolean {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/
  return isoDateRegex.test(dateString)
}
