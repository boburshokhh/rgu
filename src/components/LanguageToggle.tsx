'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
        className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <span className="text-xl">{selectedLang.flag}</span>
        <span className="text-sm font-medium">{selectedLang.name}</span>
        <svg
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg dark:bg-gray-800"
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              whileHover={{ x: 4 }}
              onClick={() => {
                setSelectedLang(lang)
                setIsOpen(false)
              }}
              className={`flex w-full items-center space-x-2 px-4 py-2 text-sm ${
                selectedLang.code === lang.code
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.name}</span>
              {selectedLang.code === lang.code && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  )
} 