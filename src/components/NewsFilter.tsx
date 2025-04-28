'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NewsFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  onSearch: (query: string) => void
}

export function NewsFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearch,
}: NewsFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-6"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <motion.div 
          className="relative flex-1 sm:max-w-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ 
              scale: isSearchFocused ? 1.1 : 1,
              color: isSearchFocused ? 'var(--primary)' : 'var(--muted-foreground)'
            }}
            transition={{ duration: 0.2 }}
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          </motion.div>
          <Input
            type="search"
            placeholder="Поиск новостей..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
          />
        </motion.div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            <AnimatePresence mode="wait">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Button
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => onCategoryChange(category)}
                    className="min-w-[100px] relative overflow-hidden group"
                  >
                    <span className="relative z-10">{category}</span>
                    {selectedCategory === category && (
                      <motion.div
                        className="absolute inset-0 bg-primary"
                        layoutId="activeCategory"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%]"
                      initial={false}
                    />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 