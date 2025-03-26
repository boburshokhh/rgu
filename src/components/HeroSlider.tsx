'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function HeroSlider() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Автоматически запускаем видео при монтировании компонента
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Видео */}
      <video
        ref={videoRef}
        className="absolute h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео
      </video>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Текст */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <h1 className="font-serif text-4xl font-medium tracking-wide sm:text-5xl lg:text-6xl">
              Филиал РГУ нефти и газа в Ташкенте
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Мы готовим достойные кадры для достойного будущего нашей страны!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/admission"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Поступить
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Узнать больше <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 