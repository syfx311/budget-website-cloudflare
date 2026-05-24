/**
 * Utility function to assign random masonry tile sizes
 * Returns a distribution of tile sizes:
 * - 70% standard size (1 col span, 1 row span)
 * - 20% wider tiles (2 col span, 1 row span)
 * - 10% taller tiles (1 col span, 2 row span)
 */
export function getRandomTileSize(index: number): string {
  // Use index for consistent sizing (same tile always gets same size)
  const random = (index * 7) % 100;

  if (random < 70) {
    return 'col-span-1 row-span-1';
  } else if (random < 90) {
    return 'col-span-2 row-span-1';
  } else {
    return 'col-span-1 row-span-2';
  }
}
