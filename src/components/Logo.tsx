'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-4"
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image
          src="https://gubkin.uz/images/img/new-logo.png"
          alt="Логотип РГУ нефти и газа"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden text-sm font-medium leading-tight lg:block">
        <p className="text-gray-900 dark:text-white">
          ФИЛИАЛ РГУ НЕФТИ И ГАЗА (НИУ)
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          ИМЕНИ И.М.ГУБКИНА В ГОРОДЕ ТАШКЕНТЕ
        </p>
      </div>
    </motion.div>
  )
} 