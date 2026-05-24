'use client'

import { motion } from 'framer-motion'

interface FilterBarProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-card border border-primary/20 text-foreground hover:border-primary/50'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  )
}
