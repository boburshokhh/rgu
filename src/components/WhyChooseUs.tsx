'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Globe2, Laptop, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const features = [
  {
    name: 'Качественное образование',
    description: 'Современные программы обучения, разработанные совместно с ведущими компаниями отрасли',
    icon: GraduationCap,
    benefits: ['Практико-ориентированное обучение', 'Опытные преподаватели', 'Современные методики']
  },
  {
    name: 'Международное сотрудничество',
    description: 'Партнерство с ведущими университетами и компаниями по всему миру',
    icon: Globe2,
    benefits: ['Программы обмена', 'Международные стажировки', 'Двойные дипломы']
  },
  {
    name: 'Современная инфраструктура',
    description: 'Оснащенные лаборатории, компьютерные классы и научные центры',
    icon: Laptop,
    benefits: ['Новейшее оборудование', 'Исследовательские центры', 'Комфортная среда']
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export function WhyChooseUs() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Анимированный фоновый паттерн */}
      <motion.div 
        className="absolute inset-0 bg-[url('/images/oil-pattern.png')] bg-repeat opacity-5"
        style={{ y, opacity }}
      />
      
      {/* Градиентный оверлей с анимацией */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-primary/10 text-primary rounded-full px-6 py-2 text-sm font-medium">
              Ваше будущее начинается здесь
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Почему выбирают нас
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Мы предоставляем качественное образование и создаем все условия для успешного развития наших студентов
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Градиентная подсветка */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Анимированная иконка */}
              <motion.div
                initial={false}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="relative mb-6 inline-block"
              >
                <div className="p-4 bg-primary/10 rounded-xl">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Эффект свечения */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>

              <motion.h3 
                className="text-2xl font-semibold mb-3 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.name}
              </motion.h3>

              <p className="text-muted-foreground relative z-10 mb-6">
                {feature.description}
              </p>

              {/* Список преимуществ */}
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    custom={i}
                    variants={textVariants}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Кнопка "Узнать больше" */}
              <motion.div
                whileHover={{ x: 5 }}
                className="relative z-10"
              >
                <Button
                  variant="ghost"
                  className="group/button text-primary hover:text-primary/80"
                >
                  Узнать больше
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </motion.div>

              {/* Декоративная линия */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 