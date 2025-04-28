'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export function Logo() {
  return (
    <Link href="/" className="group relative flex items-center gap-4">
      {/* Анимированный контейнер для логотипа */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1
        }}
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Основной логотип */}
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-xl">
          <Image
            src="/images/logo.png"
            alt="Логотип РГУ"
            width={60}
            height={60}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Градиентная подсветка */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-primary/20 opacity-0 group-hover:opacity-100"
            initial={false}
            transition={{ duration: 0.3 }}
          />

          {/* Анимированный огонь */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Flame className="h-6 w-6 text-primary/80" />
          </motion.div>
        </div>

        {/* Эффект свечения */}
        <motion.div
          className="absolute inset-0 -z-10 blur-xl"
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="h-full w-full rounded-full bg-primary/30" />
        </motion.div>
      </motion.div>

      {/* Текст */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col"
      >
        <motion.h1 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          РГУ нефти и газа
        </motion.h1>
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Филиал в г. Ташкенте
        </motion.p>
      </motion.div>
    </Link>
  )
} 