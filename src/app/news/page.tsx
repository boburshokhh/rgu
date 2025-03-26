'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const allNews = [
  {
    id: 1,
    title: 'Открыт набор на 2024-2025 учебный год',
    excerpt:
      'Филиал РГУ нефти и газа объявляет о начале приема документов на новый учебный год.',
    date: '2024-01-10',
    category: 'Абитуриентам',
    author: 'Приемная комиссия',
  },
  {
    id: 2,
    title: 'Международная научная конференция',
    excerpt:
      'В филиале пройдет международная конференция по инновациям в нефтегазовой отрасли.',
    date: '2024-01-15',
    category: 'Наука',
    author: 'Научный отдел',
  },
  {
    id: 3,
    title: 'Встреча с представителями индустрии',
    excerpt:
      'Ведущие специалисты нефтегазовой отрасли проведут мастер-классы для студентов.',
    date: '2024-01-20',
    category: 'Карьера',
    author: 'Центр карьеры',
  },
  {
    id: 4,
    title: 'Студенческая научная конференция',
    excerpt: 'Приглашаем студентов принять участие в ежегодной научной конференции.',
    date: '2024-01-25',
    category: 'Наука',
    author: 'Научный отдел',
  },
  {
    id: 5,
    title: 'Спортивные достижения наших студентов',
    excerpt: 'Команда университета заняла призовые места на городских соревнованиях.',
    date: '2024-01-30',
    category: 'Спорт',
    author: 'Спортивный клуб',
  },
]

const categories = ['Все', 'Абитуриентам', 'Наука', 'Карьера', 'Спорт']

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNews = allNews.filter((news) => {
    const matchesCategory =
      selectedCategory === 'Все' || news.category === selectedCategory
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Новости университета
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Будьте в курсе последних событий и мероприятий нашего университета
          </p>
        </motion.div>

        <div className="mt-12">
          {/* Filters */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск новостей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400 sm:w-64"
              />
            </div>
          </div>

          {/* News grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {news.category}
                    </p>
                    <Link href={`/news/${news.id}`} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {news.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                        {news.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{news.author}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={news.date}>
                        {new Date(news.date).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="mx-1">•</span>
                      <span>{news.author}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Новости не найдены
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 