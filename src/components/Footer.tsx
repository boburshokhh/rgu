'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      color: 'hsl(var(--primary))',
      transition: { duration: 0.2 }
    }
  }

  return (
    <footer className="bg-background border-t">
      <motion.div 
        className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">О нас</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  История филиала
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Миссия и цели
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Контакты
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Студентам</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Расписание занятий
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Электронная библиотека
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Студенческая жизнь
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 flex-shrink-0" />
                <span>100125, Ташкент, ул. Дурмон йули, 34</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <FaPhone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+998712621607" className="hover:text-foreground transition-colors duration-200">
                  +998 71 262-16-07
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <FaEnvelope className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@gubkin.uz" className="hover:text-foreground transition-colors duration-200">
                  info@gubkin.uz
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Мы в соцсетях</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaFacebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaInstagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://t.me/gubkinuz"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaTelegram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaYoutube className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-border/40"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2024 Филиал РГУ нефти и газа (НИУ) имени И.М. Губкина в г. Ташкенте. Все права защищены.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Условия использования
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
} 