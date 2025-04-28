'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Newspaper } from 'lucide-react'
import { NewsCard } from './NewsCard'

const news = [
  {
    id: 1,
    title: 'Открыт набор на 2024-2025 учебный год',
    description:
      'Филиал РГУ нефти и газа объявляет о начале приема документов на новый учебный год. Мы предлагаем широкий выбор специальностей и направлений подготовки.',
    date: '10 января 2024',
    category: 'Абитуриентам',
    department: 'Приемная комиссия',
    image: '/images/news/admission.jpg',
    link: '/news/1'
  },
  {
    id: 2,
    title: 'Международная научная конференция',
    description:
      'В филиале пройдет международная конференция по инновациям в нефтегазовой отрасли. Участие примут ведущие эксперты со всего мира.',
    date: '15 января 2024',
    category: 'Наука',
    department: 'Научный отдел',
    image: '/images/news/conference.jpg',
    link: '/news/2'
  },
  {
    id: 3,
    title: 'Встреча с представителями индустрии',
    description:
      'Ведущие специалисты нефтегазовой отрасли проведут мастер-классы для студентов. Уникальная возможность получить практические знания.',
    date: '20 января 2024',
    category: 'Карьера',
    department: 'Центр карьеры',
    image: '/images/news/industry.jpg',
    link: '/news/3'
  },
]

const containerAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
}

const titleAnimation: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const buttonAnimation: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function NewsSection() {
  return (
    <div className="relative py-16">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 bg-[url('/images/oil-pattern.png')] bg-repeat opacity-5" />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      
      <div className="relative container mx-auto px-4">
        {/* Заголовок секции */}
        <motion.div 
          className="mb-12 flex items-center justify-between"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={titleAnimation}>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Новости университета</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Будьте в курсе последних событий
            </p>
          </motion.div>
          <motion.div variants={buttonAnimation}>
            <Button 
              variant="outline" 
              size="sm" 
              className="group hover:bg-primary/10 transition-colors duration-300" 
              asChild
            >
              <Link href="/news" className="flex items-center gap-2">
                Все новости
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Список новостей */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {news.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              description={article.description}
              date={article.date}
              category={article.category}
              image={article.image}
              link={article.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
} 