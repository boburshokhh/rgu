'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail, Phone, Calendar, Clock, ExternalLink, FileText, MapPin, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

// Типы данных для руководителей
type LeaderPosition = 'rector' | 'vice-rector' | 'director' | 'dean' | 'head'

type LeaderCardProps = {
  id: number
  name: string
  position: string
  photo: string
  category: LeaderPosition
  receptionDays: string
  receptionHours: string
  phone: string
  fax?: string
  email: string
  education?: string
  experience?: string
  achievements?: string
  address?: string
  cabinet?: string
  publications?: number
  scienceDegree?: string
}

// Моковые данные руководителей
const leadershipData: LeaderCardProps[] = [
  {
    id: 1,
    name: 'Магрупов Абдулла Махмудович',
    position: 'Исполнительный директор',
    photo: '/images/leadership/magrupo.jpg',
    category: 'director',
    receptionDays: 'понедельник-суббота',
    receptionHours: '09:00 - 11:00',
    phone: '(+99871) 262-70-91',
    fax: '(+99871) 262-70-90',
    email: 'priemnaya@gubkin.uz',
    education: 'Доктор технических наук, профессор',
    experience: '25 лет опыта в нефтегазовой отрасли',
    cabinet: '215',
    address: 'г. Ташкент, Дурмон йули, 34'
  },
  {
    id: 2,
    name: 'Абдуллаев Сардор Хабибуллаевич',
    position: 'Заместитель директора по учебной и воспитательной работе',
    photo: '/images/leadership/abdullaev.jpg',
    category: 'vice-rector',
    receptionDays: 'вторник-пятница',
    receptionHours: '14:00 - 16:00',
    phone: '(+99871) 262-71-40',
    email: 's.abdullaev@gubkin.uz',
    education: 'Кандидат технических наук, доцент',
    experience: '15 лет научно-педагогического стажа',
    achievements: 'Автор более 40 научных работ',
    cabinet: '205',
    scienceDegree: 'Кандидат технических наук'
  },
  {
    id: 3,
    name: 'Каримов Акрам Камилович',
    position: 'Заместитель директора по научной работе и инновациям',
    photo: '/images/leadership/karimov.jpg',
    category: 'vice-rector',
    receptionDays: 'вторник, четверг',
    receptionHours: '10:00 - 12:00',
    phone: '(+99871) 262-71-45',
    email: 'a.karimov@gubkin.uz',
    education: 'Доктор технических наук, профессор',
    publications: 78,
    cabinet: '207',
    scienceDegree: 'Доктор технических наук'
  },
  {
    id: 4,
    name: 'Тураева Нилуфар Тулкиновна',
    position: 'Декан факультета нефтегазового дела',
    photo: '/images/leadership/turaeva.jpg',
    category: 'dean',
    receptionDays: 'понедельник, среда, пятница',
    receptionHours: '13:00 - 15:00',
    phone: '(+99871) 262-72-50',
    email: 'n.turaeva@gubkin.uz',
    education: 'Кандидат химических наук, доцент',
    publications: 45,
    cabinet: '310',
    scienceDegree: 'Кандидат химических наук'
  }
]

// Категории руководителей для фильтрации
const categories = [
  { value: 'all', label: 'Все руководители' },
  { value: 'director', label: 'Дирекция' },
  { value: 'vice-rector', label: 'Заместители директора' },
  { value: 'dean', label: 'Деканы факультетов' },
  { value: 'head', label: 'Заведующие кафедрами' }
]

export function LeadershipCards() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null)

  // Фильтрация руководителей по категории и поиску
  const filteredLeaders = leadershipData
    .filter(leader => selectedCategory === 'all' || leader.category === selectedCategory)
    .filter(leader => 
      searchQuery === '' || 
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.position.toLowerCase().includes(searchQuery.toLowerCase())
    )

  // Переключение подробной информации карточки
  const toggleCardDetails = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  // Сбросить выделение при изменении поиска или категории
  useEffect(() => {
    setHighlightedCard(null)
  }, [searchQuery, selectedCategory])

  return (
    <section className="py-16 relative bg-background">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 bg-[url('/images/oil-pattern.png')] bg-repeat opacity-5" />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      
      <div className="container mx-auto px-4 relative">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Руководство университета
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Опытные профессионалы, определяющие стратегию развития и обеспечивающие
            высокое качество образования в РГУ нефти и газа
          </p>
          
          {/* Поиск и фильтры */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по имени или должности"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
          
          {/* Фильтры категорий */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="rounded-full transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
          
          {/* Результаты поиска */}
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              {filteredLeaders.length ? 
                `Найдено: ${filteredLeaders.length} ${filteredLeaders.length === 1 ? 'руководитель' : 
                filteredLeaders.length >= 2 && filteredLeaders.length <= 4 ? 'руководителя' : 'руководителей'}` : 
                'Руководителей не найдено'
              }
            </motion.p>
          )}
        </motion.div>
        
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                whileHover={{ y: -5 }}
                className={cn(
                  highlightedCard === leader.id ? "ring-2 ring-primary ring-offset-2 rounded-xl" : ""
                )}
                onMouseEnter={() => setHighlightedCard(leader.id)}
                onMouseLeave={() => setHighlightedCard(null)}
              >
                <div 
                  className={cn(
                    "bg-card border border-border/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group h-full",
                    expandedCard === leader.id ? "shadow-lg border-primary/30" : ""
                  )}
                >
                  <div className="relative">
                    {/* Фото руководителя */}
                    <div className="relative h-[270px] overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full"
                      >
                        <Image
                          src={leader.photo}
                          alt={leader.name}
                          fill
                          className="object-cover object-center transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      
                      {/* Оверлей с градиентом */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Должность */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white/90 text-sm font-medium mb-1 line-clamp-2">
                          {leader.position}
                        </p>
                        <h3 className="text-white text-xl font-bold line-clamp-2">
                          {leader.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Основная информация */}
                  <div className="p-4 space-y-3 border-b border-border/50">
                    {/* Приемные дни */}
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Дни приёма:</p>
                        <p className="text-sm font-medium">{leader.receptionDays}</p>
                      </div>
                    </div>
                    
                    {/* Время приема */}
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Время приёма:</p>
                        <p className="text-sm font-medium">{leader.receptionHours}</p>
                      </div>
                    </div>
                    
                    {/* Телефон */}
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон:</p>
                        <p className="text-sm font-medium">{leader.phone}</p>
                        {leader.fax && (
                          <>
                            <p className="text-sm text-muted-foreground mt-1">Факс:</p>
                            <p className="text-sm font-medium">{leader.fax}</p>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email:</p>
                        <a 
                          href={`mailto:${leader.email}`} 
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          {leader.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Кнопка для показа дополнительной информации */}
                  {(leader.education || leader.experience || leader.achievements || leader.publications) && (
                    <div className="p-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-between"
                        onClick={() => toggleCardDetails(leader.id)}
                      >
                        <span>Подробная информация</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            expandedCard === leader.id ? "rotate-180" : ""
                          )} 
                        />
                      </Button>
                      
                      {/* Расширенная информация */}
                      <AnimatePresence>
                        {expandedCard === leader.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4 space-y-3 pt-4 border-t border-border/30"
                          >
                            {leader.education && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Образование:</p>
                                  <p className="text-sm">{leader.education}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            {leader.scienceDegree && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                              >
                                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Ученая степень:</p>
                                  <p className="text-sm">{leader.scienceDegree}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            {leader.experience && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                              >
                                <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Опыт работы:</p>
                                  <p className="text-sm">{leader.experience}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            {leader.publications && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                              >
                                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Научные публикации:</p>
                                  <p className="text-sm">{leader.publications}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            {leader.achievements && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                              >
                                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Достижения:</p>
                                  <p className="text-sm">{leader.achievements}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            {leader.cabinet && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                              >
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Кабинет:</p>
                                  <p className="text-sm">{leader.cabinet}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            {leader.address && (
                              <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                              >
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Адрес:</p>
                                  <p className="text-sm">{leader.address}</p>
                                </div>
                              </motion.div>
                            )}
                            
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.8 }}
                            >
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="w-full mt-3"
                                asChild
                              >
                                <Link href={`/leadership/${leader.id}`} className="flex items-center justify-center gap-2">
                                  <span>Подробный профиль</span>
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </Link>
                              </Button>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Сообщение если ничего не найдено */}
        {filteredLeaders.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">По вашему запросу ничего не найдено</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
            >
              Сбросить фильтры
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
} 