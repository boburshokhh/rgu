'use client'

import { motion } from 'framer-motion'
import { LeadershipCards } from '@/components/LeadershipCards'

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-12 bg-muted/30 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Руководство университета
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                Знакомьтесь с профессионалами, которые определяют стратегию развития
                и обеспечивают высокий стандарт образования в нашем университете
              </motion.p>
            </div>
          </div>
        </section>
        
        <LeadershipCards />
      </motion.div>
    </main>
  )
} 