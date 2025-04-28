'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NewsSection } from '@/components/NewsSection'
import { NewsFilter } from '@/components/NewsFilter'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { HeroSlider } from '@/components/HeroSlider'
import { NewsAndEvents } from '@/components/NewsAndEvents'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { BookOpen, Trophy, Heart, CalendarDays, GraduationCap, ExternalLink, Users, Star } from 'lucide-react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="relative">
      {/* Hero section */}
      <HeroSlider />

      {/* Why Choose Us section */}
      <WhyChooseUs />

      {/* News and Events section */}
      <NewsAndEvents />

      {/* Leadership Promo section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Познакомьтесь с руководством университета
            </h2>
            <p className="text-muted-foreground mb-6">
              Узнайте больше о наших руководителях, их опыте, достижениях и вкладе в развитие университета
            </p>
            <Button asChild>
              <Link href="/leadership" className="flex items-center gap-2">
                Перейти к руководству
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
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

      {/* Студенческая жизнь - общий заголовок */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4 bg-primary/10 p-2 px-4 rounded-full">
              <span className="text-primary font-medium">Возможности для развития</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
              Студенческая жизнь
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"
              ></motion.span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Познакомьтесь с многогранной студенческой жизнью в нашем университете, 
              которая предлагает возможности для всестороннего развития
            </p>
          </motion.div>
          
          {/* Навигация по карточкам */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { icon: <BookOpen className="h-8 w-8" />, title: "Наука", color: "from-blue-500 to-cyan-400", href: "#science" },
              { icon: <Trophy className="h-8 w-8" />, title: "Спорт", color: "from-orange-500 to-amber-400", href: "#sport" },
              { icon: <Heart className="h-8 w-8" />, title: "Культура", color: "from-pink-500 to-rose-400", href: "#culture" }
            ].map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border/40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all p-6 h-full flex flex-col items-center justify-center text-center"
                >
                  <div className={`p-4 rounded-full bg-gradient-to-r ${item.color} mb-4 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="w-10 h-0.5 bg-primary/50 rounded-full my-2 group-hover:w-16 transition-all"></div>
                  <p className="text-muted-foreground text-sm">Узнать больше</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Научная жизнь */}
      <section id="science" className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-science.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="inline-block bg-blue-500/10 p-2 px-4 rounded-full mb-4">
                <span className="text-blue-600 font-medium">Научные достижения</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Научная жизнь
                <motion.span 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full"
                ></motion.span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Университет создает все условия для развития научного потенциала студентов. 
                Научно-исследовательская работа ведется на кафедрах, в лабораториях и научных центрах 
                под руководством опытных ученых.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { 
                    icon: <GraduationCap className="h-6 w-6 text-blue-600" />, 
                    title: "Научные общества", 
                    desc: "15+ студенческих научных обществ по различным направлениям" 
                  },
                  { 
                    icon: <CalendarDays className="h-6 w-6 text-blue-600" />, 
                    title: "Конференции", 
                    desc: "Ежегодно проводится более 10 международных научных конференций" 
                  },
                  { 
                    icon: <Star className="h-6 w-6 text-blue-600" />, 
                    title: "Публикации", 
                    desc: "Более 100 студенческих научных публикаций ежегодно" 
                  },
                  { 
                    icon: <ExternalLink className="h-6 w-6 text-blue-600" />, 
                    title: "Стажировки", 
                    desc: "Возможность стажировок в ведущих научных центрах" 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg" asChild>
                  <Link href="/science" className="flex items-center gap-2">
                    <span>Подробнее о научной деятельности</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 group-hover:from-black/80 transition-all duration-500"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    className="h-full w-full"
                  >
                    <Image 
                      src="/images/science-life.jpg" 
                      alt="Научная жизнь студентов"
                      fill
                      className="object-cover object-center transition-transform duration-4000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  
                  <div className="absolute left-0 right-0 bottom-0 z-20 p-8 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-blue-600 p-1 px-3 rounded-full text-xs font-medium text-white">Наука</div>
                      <div className="bg-white/90 p-1 px-3 rounded-full text-xs font-medium">Исследования</div>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Победители научного конкурса 2023</h3>
                    <p className="text-white/90 mb-4">
                      Наши студенты заняли призовые места на международной научной конференции, 
                      представив инновационные решения в области нефтегазовой промышленности.
                    </p>
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Читать историю
                    </Button>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 rounded-xl bg-card border border-border p-4 shadow-lg hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Научный потенциал</p>
                      <p className="text-sm text-muted-foreground">25+ исследовательских лабораторий</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Спортивная жизнь */}
      <section id="sport" className="py-24 bg-gradient-to-b from-background to-amber-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-sport.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="inline-block bg-orange-500/10 p-2 px-4 rounded-full mb-4">
                <span className="text-orange-600 font-medium">Спортивные достижения</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Спортивная жизнь
                <motion.span 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-300 to-orange-600 rounded-full"
                ></motion.span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Спорт является важной частью жизни наших студентов. Университет предлагает 
                отличные условия для занятий различными видами спорта, а наши команды регулярно 
                участвуют в межвузовских и международных соревнованиях.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { 
                    icon: <Users className="h-6 w-6 text-orange-600" />, 
                    title: "Спортивные секции", 
                    desc: "Более 20 спортивных секций от футбола до шахмат" 
                  },
                  { 
                    icon: <Star className="h-6 w-6 text-orange-600" />, 
                    title: "Достижения", 
                    desc: "Более 50 медалей на различных соревнованиях в прошлом году" 
                  },
                  { 
                    icon: <Trophy className="h-6 w-6 text-orange-600" />, 
                    title: "Соревнования", 
                    desc: "Регулярные внутренние и внешние спортивные турниры" 
                  },
                  { 
                    icon: <CalendarDays className="h-6 w-6 text-orange-600" />, 
                    title: "Спортивная база", 
                    desc: "Современные спортивные залы и площадки для тренировок" 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/10 p-3 rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-md hover:shadow-lg" asChild>
                  <Link href="/sports" className="flex items-center gap-2">
                    <span>Подробнее о спортивной жизни</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 group-hover:from-black/80 transition-all duration-500"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    className="h-full w-full"
                  >
                    <Image 
                      src="/images/sport-life.jpg" 
                      alt="Спортивная жизнь студентов"
                      fill
                      className="object-cover object-center transition-transform duration-4000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  
                  <div className="absolute left-0 right-0 bottom-0 z-20 p-8 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-orange-600 p-1 px-3 rounded-full text-xs font-medium text-white">Спорт</div>
                      <div className="bg-white/90 p-1 px-3 rounded-full text-xs font-medium">Соревнования</div>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Чемпионы студенческой лиги 2023</h3>
                    <p className="text-white/90 mb-4">
                      Сборная университета по волейболу стала чемпионом студенческой лиги, 
                      показав высочайший уровень мастерства и командной игры.
                    </p>
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Читать историю
                    </Button>
                  </div>
                </div>
                
                <div className="absolute top-1/3 -left-8 transform -translate-y-1/2 rounded-xl bg-card border border-border p-4 shadow-lg hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/10 p-2 rounded-full">
                      <Trophy className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Наши чемпионы</p>
                      <p className="text-sm text-muted-foreground">10+ национальных титулов</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Духовная жизнь */}
      <section id="culture" className="py-24 bg-gradient-to-b from-amber-50/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-cultural.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-50/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="inline-block bg-pink-500/10 p-2 px-4 rounded-full mb-4">
                <span className="text-pink-600 font-medium">Творческое развитие</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Духовная жизнь
                <motion.span 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-300 to-pink-600 rounded-full"
                ></motion.span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Духовно-нравственное развитие студентов является одним из приоритетов нашего университета. 
                Мы создаем условия для раскрытия творческого потенциала и культурного развития студентов
                через различные культурные и волонтерские мероприятия.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { 
                    icon: <Users className="h-6 w-6 text-pink-600" />, 
                    title: "Творческие студии", 
                    desc: "12 творческих студий для самовыражения и развития талантов" 
                  },
                  { 
                    icon: <CalendarDays className="h-6 w-6 text-pink-600" />, 
                    title: "Культурные события", 
                    desc: "Более 30 культурных мероприятий проводится ежегодно" 
                  },
                  { 
                    icon: <Heart className="h-6 w-6 text-pink-600" />, 
                    title: "Волонтерство", 
                    desc: "Активное участие студентов в социальных и благотворительных проектах" 
                  },
                  { 
                    icon: <Star className="h-6 w-6 text-pink-600" />, 
                    title: "Творческие конкурсы", 
                    desc: "Регулярные конкурсы талантов и творческие фестивали" 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-500/10 p-3 rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 shadow-md hover:shadow-lg" asChild>
                  <Link href="/cultural" className="flex items-center gap-2">
                    <span>Подробнее о культурной жизни</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 group-hover:from-black/80 transition-all duration-500"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    className="h-full w-full"
                  >
                    <Image 
                      src="/images/cultural-life.jpg" 
                      alt="Духовная и культурная жизнь студентов"
                      fill
                      className="object-cover object-center transition-transform duration-4000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  
                  <div className="absolute left-0 right-0 bottom-0 z-20 p-8 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-pink-600 p-1 px-3 rounded-full text-xs font-medium text-white">Культура</div>
                      <div className="bg-white/90 p-1 px-3 rounded-full text-xs font-medium">Творчество</div>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Фестиваль "Студенческая весна 2023"</h3>
                    <p className="text-white/90 mb-4">
                      Ежегодный фестиваль студенческого творчества собрал более 500 участников,
                      продемонстрировавших свои таланты в различных жанрах.
                    </p>
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Читать историю
                    </Button>
                  </div>
                </div>
                
                <div className="absolute top-2/3 -right-8 transform -translate-y-1/2 rounded-xl bg-card border border-border p-4 shadow-lg hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-500/10 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Творческий потенциал</p>
                      <p className="text-sm text-muted-foreground">15+ активных творческих коллективов</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Призыв к действию */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-24 text-center"
          >
            <div className="mx-auto max-w-3xl bg-gradient-to-r from-primary/5 via-card to-primary/5 border border-border/40 rounded-2xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-primary/10 p-2 px-4 rounded-full mb-4">
                  <span className="text-primary font-medium">Присоединяйтесь к нам</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Стань частью студенческой жизни!</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Присоединяйтесь к нашему дружному сообществу и раскройте свой потенциал 
                  в науке, спорте и творчестве!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="shadow-md hover:shadow-lg" asChild>
                    <Link href="/student-life" className="flex items-center gap-2">
                      <span>Узнать больше</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-background/80 backdrop-blur-sm" asChild>
                    <Link href="/join-club">
                      Присоединиться к клубу
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
