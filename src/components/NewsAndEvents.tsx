'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronRight, 
  Eye, 
  Calendar, 
  Newspaper, 
  FileText, 
  ArrowUpRight, 
  ArrowRight 
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Моковые данные для Пресса о нас
const pressReleases = [
  {
    id: 1,
    title: 'ERIELL: Готовим из студентов квалифицированных специалистов',
    excerpt: 'Узбекистан, Ташкент – АН Podrobno.uz. На объектах ERIELL Group до 26 июля текущего года успешно прошли учебно-производственную практику студенты 3-го курса Филиала Российского государственного университета нефти и газа имени И.М. Губкина в г. Ташкенте.',
    date: '26 июля',
    month: 'июль',
    source: 'podrobno.uz',
    views: 3559,
    link: '/press/1'
  },
  {
    id: 2,
    title: 'ERIELL: Вклад в подготовку молодых специалистов',
    excerpt: 'ERIELL Group и ряд других компаний нефтегазового сектора 10 июня 2022 года провели встречу в формате открытого диалога в Филиале Российского государственного университета нефти и газа (НИУ) имени И.М. Губкина в г. Ташкенте.',
    date: '10 июня',
    month: 'июнь',
    source: 'ERIELL',
    views: 2671,
    link: '/press/2'
  },
  {
    id: 3,
    title: 'Сотрудничество с ведущими компаниями отрасли',
    excerpt: 'Филиал РГУ нефти и газа им. И.М. Губкина в г. Ташкенте расширяет сотрудничество с ведущими нефтегазовыми компаниями региона для обеспечения высокого качества подготовки специалистов.',
    date: '5 мая',
    month: 'май',
    source: 'neftegaz.uz',
    views: 1845,
    link: '/press/3'
  }
]

// Моковые данные для Конференции и семинары
const conferences = [
  {
    id: 1,
    title: 'Ежегодная студенческая научная конференция «Нефть и газ - 2022»',
    excerpt: '17 февраля 2022 года в Филиале РГУ нефти и газа (НИУ) имени И.М. Губкина в г. Ташкенте была проведена ежегодная студенческая научная конференция «Нефть и газ - 2022». На конференции приняли участие представители АО«Узбекнефтегаз», АО«Худудгазтаъминот», АО«Узтрансгаз», АО«Узкимёсаноат», ИП ООО«Sanoat energetika guruhi», ООО«Uzbekistan GTL».',
    date: '17 фев',
    month: 'фев',
    views: 3400,
    link: '/events/1'
  },
  {
    id: 2,
    title: '9-я ежегодная Международная конференция по вопросам преподавания иностранных языков и прикладной лингвистики «FLTAL-2019»',
    excerpt: '2-3 мая 2019 года и впервые в Узбекистане состоится девятая ежегодная Международная конференция по вопросам преподавания иностранных языков и прикладной лингвистики «FLTAL-2019». Форум специалистов впервые пройдет в Ташкенте под названием: «Творческий потенциал полиязычной личности: к вопросу о влиянии фактора полиязычия на процесс изучения иностранного языка».',
    date: '02 май',
    month: 'май',
    views: 20632,
    link: '/events/2'
  },
  {
    id: 3,
    title: 'Научно-практический семинар «Современные технологии в нефтегазовой отрасли»',
    excerpt: 'В Филиале РГУ нефти и газа им. И.М. Губкина в г. Ташкенте пройдет научно-практический семинар, посвященный инновационным технологиям и современным методам работы в нефтегазовой отрасли.',
    date: '15 мар',
    month: 'мар',
    views: 4250,
    link: '/events/3'
  }
]

export function NewsAndEvents() {
  const [activeTab, setActiveTab] = useState<'press' | 'conferences'>('press')
  
  return (
    <section className="py-12 bg-background relative">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 bg-[url('/images/oil-pattern.png')] bg-repeat opacity-5" />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Колонка Пресса о нас */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Пресса о нас</h2>
              </div>
              <div className="h-1 w-20 bg-primary/70 rounded-full"></div>
            </motion.div>
            
            <div className="space-y-6">
              {pressReleases.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card hover:bg-card/80 border border-border/60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-primary/30">
                    <div className="flex items-start p-4">
                      {/* Дата */}
                      <div className="shrink-0 mr-4">
                        <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-primary text-white font-medium text-center group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                          <span className="text-lg font-bold">{item.date.split(' ')[0]}</span>
                          <span className="text-xs">{item.month}</span>
                        </div>
                      </div>
                      
                      {/* Содержимое */}
                      <div className="flex-1">
                        <Link 
                          href={item.link}
                          className="text-lg font-medium text-primary hover:text-primary/80 transition-colors duration-300 line-clamp-2 mb-2"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Eye className="inline-block mr-1 h-3 w-3" /> {item.views}
                          </span>
                          <Link
                            href={item.link}
                            className="text-xs text-primary flex items-center group-hover:underline"
                          >
                            подробнее
                            <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-right"
            >
              <Button
                variant="ghost"
                className="text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/press" className="flex items-center gap-1">
                  Все публикации
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Колонка Конференции и семинары */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Конференции и семинары</h2>
              </div>
              <div className="h-1 w-20 bg-primary/70 rounded-full"></div>
            </motion.div>
            
            <div className="space-y-6">
              {conferences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card hover:bg-card/80 border border-border/60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-primary/30">
                    <div className="flex items-start p-4">
                      {/* Дата */}
                      <div className="shrink-0 mr-4">
                        <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-destructive text-white font-medium text-center group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                          <span className="text-lg font-bold">{item.date.split(' ')[0]}</span>
                          <span className="text-xs">{item.month}</span>
                        </div>
                      </div>
                      
                      {/* Содержимое */}
                      <div className="flex-1">
                        <Link 
                          href={item.link}
                          className="text-lg font-medium text-primary hover:text-primary/80 transition-colors duration-300 line-clamp-2 mb-2"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Eye className="inline-block mr-1 h-3 w-3" /> {item.views}
                          </span>
                          <Link
                            href={item.link}
                            className="text-xs text-primary flex items-center group-hover:underline"
                          >
                            подробнее
                            <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-right"
            >
              <Button
                variant="ghost"
                className="text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/events" className="flex items-center gap-1">
                  Все публикации
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 