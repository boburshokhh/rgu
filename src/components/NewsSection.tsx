'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'Открыт набор на 2024-2025 учебный год',
    excerpt:
      'Филиал РГУ нефти и газа объявляет о начале приема документов на новый учебный год.',
    date: '2024-01-10',
    category: 'Абитуриентам',
    department: 'Приемная комиссия',
  },
  {
    id: 2,
    title: 'Международная научная конференция',
    excerpt:
      'В филиале пройдет международная конференция по инновациям в нефтегазовой отрасли.',
    date: '2024-01-15',
    category: 'Наука',
    department: 'Научный отдел',
  },
  {
    id: 3,
    title: 'Встреча с представителями индустрии',
    excerpt:
      'Ведущие специалисты нефтегазовой отрасли проведут мастер-классы для студентов.',
    date: '2024-01-20',
    category: 'Карьера',
    department: 'Центр карьеры',
  },
]

const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function NewsSection() {
  return (
    <div className="relative">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 bg-[url('/images/oil-pattern.png')] bg-repeat opacity-5" />
      
      <div className="relative">
        {/* Заголовок секции */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Новости университета</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Будьте в курсе последних событий
            </p>
          </div>
          <Button variant="outline" size="sm" className="button-hover" asChild>
            <Link href="/news">
              Все новости
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Список новостей */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {news.map((article) => (
            <motion.div key={article.id} variants={itemAnimation}>
              <Link href={`/news/${article.id}`}>
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Декоративный элемент */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary/10 transition-all duration-300 group-hover:bg-primary" />
                  
                  <div className="flex flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {article.category}
                      </span>
                      <time className="text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                        })}
                      </time>
                    </div>
                    
                    <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <span className="text-xs text-muted-foreground">
                        {article.department}
                      </span>
                      <span className="text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Подробнее
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 