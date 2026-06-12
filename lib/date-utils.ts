/**
 * Format a date string consistently to avoid hydration mismatches
 * This function parses the date as UTC to ensure server/client consistency
 */
export function formatBlogDate(
  dateString: string,
  format: 'short' | 'long' = 'short'
): string {
  // Parse as UTC by adding Z if not present
  const dateStr = dateString.includes('T') ? dateString : dateString + 'T00:00:00Z'
  const date = new Date(dateStr)

  if (format === 'short') {
    // Returns "Jan 15, 2024"
    const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })
    const day = date.toLocaleString('en-US', { day: 'numeric', timeZone: 'UTC' })
    const year = date.toLocaleString('en-US', { year: 'numeric', timeZone: 'UTC' })
    return `${month} ${day}, ${year}`
  } else {
    // Returns "January 15, 2024"
    const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })
    const day = date.toLocaleString('en-US', { day: 'numeric', timeZone: 'UTC' })
    const year = date.toLocaleString('en-US', { year: 'numeric', timeZone: 'UTC' })
    return `${month} ${day}, ${year}`
  }
}
