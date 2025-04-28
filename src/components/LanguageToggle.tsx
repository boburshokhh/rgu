'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Globe } from 'lucide-react'

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'Oʻzbek', flag: '🇺🇿' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 relative overflow-hidden"
      >
        {/* Фоновый градиент */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Иконка глобуса */}
        <Globe className="h-4 w-4 text-primary" />

        {/* Флаг и название */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ x: 2 }}
        >
          <span className="text-xl">{selectedLang.flag}</span>
          <span className="text-sm font-medium">{selectedLang.name}</span>
        </motion.div>

        {/* Стрелка */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg dark:bg-gray-800 overflow-hidden"
          >
            {/* Фоновый паттерн */}
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4, backgroundColor: 'var(--primary-10)' }}
                onClick={() => {
                  setSelectedLang(lang)
                  setIsOpen(false)
                }}
                className={`group relative flex w-full items-center space-x-2 px-4 py-2 text-sm overflow-hidden ${
                  selectedLang.code === lang.code
                    ? 'text-primary dark:text-primary'
                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {/* Эффект наведения */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Флаг */}
                <motion.span 
                  className="text-xl"
                  whileHover={{ scale: 1.1 }}
                >
                  {lang.flag}
                </motion.span>

                {/* Название */}
                <span>{lang.name}</span>

                {/* Иконка выбора */}
                {selectedLang.code === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto"
                  >
                    <Check className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 