'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NewsSection } from '@/components/NewsSection'
import { NewsFilter } from '@/components/NewsFilter'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    title: 'Качественное образование',
    description: 'Современные программы обучения, разработанные совместно с ведущими компаниями отрасли',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
  },
  {
    title: 'Международное сотрудничество',
    description: 'Партнерство с ведущими университетами и компаниями по всему миру',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    title: 'Современная инфраструктура',
    description: 'Оснащенные лаборатории, компьютерные классы и научные центры',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main>
      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Филиал РГУ нефти и газа в Ташкенте
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Качественное образование в сфере нефти и газа, современные технологии и международные стандарты обучения
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href="/admission">
                  Поступить
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Почему выбирают нас
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Мы предоставляем качественное образование и создаем все условия для успешного развития наших студентов
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Новости университета
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Будьте в курсе последних событий и мероприятий нашего университета
            </p>
          </motion.div>

          <NewsFilter
            categories={['Все', 'Абитуриентам', 'Наука', 'Карьера', 'Спорт']}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSearch={setSearchQuery}
          />

          <NewsSection />
        </div>
      </section>
    </main>
  )
}
