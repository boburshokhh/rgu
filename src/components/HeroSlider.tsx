'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

// Пути к изображениям слайдера
const slides = [
  {
    id: 1,
    src: '/images/slider/slide1.jpg',
    alt: 'Филиал РГУ нефти и газа'
  },
  {
    id: 2,
    src: '/images/slider/slide2.jpg',
    alt: 'Кампус университета'
  },
  {
    id: 3,
    src: '/images/slider/slide3.jpg',
    alt: 'Лаборатория нефтехимии'
  },
  {
    id: 4,
    src: '/images/slider/slide4.jpg',
    alt: 'Студенческая жизнь'
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Функция для переключения слайдов
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])
  
  // Автоматическое переключение слайдов
  useEffect(() => {
    setIsLoaded(true)
    const intervalId = setInterval(() => {
      nextSlide()
    }, 5000) // Переключение каждые 5 секунд
    
    return () => clearInterval(intervalId)
  }, [nextSlide])
  
  // Вручную переключить на определенный слайд
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Слайдер изображений */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            currentSlide === index && (
          <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
          </motion.div>
            )
          ))}
      </AnimatePresence>
      </div>

      {/* Градиентный оверлей с затемнением */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />

      {/* Анимированный паттерн */}
      <div 
        className="absolute inset-0 opacity-30 z-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Контент */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl"
        >
          {/* Декоративная линия */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-primary mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Филиал РГУ нефти и газа в Ташкенте
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8"
          >
            Качественное образование в сфере нефти и газа, современные технологии и международные стандарты обучения
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg"
              asChild
            >
              <a href="/admission" className="group">
                Поступить
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg"
            >
              Узнать больше
            </Button>
          </motion.div>
        </motion.div>

        {/* Индикаторы слайдов */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === index 
                  ? "bg-primary scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        {/* Скролл индикатор */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.p
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 text-xs sm:text-sm"
          >
            Прокрутите вниз
          </motion.p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 