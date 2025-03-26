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
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">О нас</h3>
            <ul className="mt-4 space-y-2">
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

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Обучение</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Программы обучения
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Расписание
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Библиотека
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Студентам</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/student/life" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Студенческая жизнь
                </Link>
              </li>
              <li>
                <Link href="/student/career" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Карьера
                </Link>
              </li>
              <li>
                <Link href="/student/support" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Поддержка
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>100125, Узбекистан, Ташкент, ул. Дурмон йули, 34</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+998 71 262-99-55</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>info@gubkin.uz</span>
              </li>
            </ul>
            
            <div className="mt-4">
              <div className="flex space-x-4 mt-3">
                <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                  whileHover="hover" variants={iconVariants}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <FaFacebook size={24} />
                </motion.a>
                <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                  whileHover="hover" variants={iconVariants}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                  whileHover="hover" variants={iconVariants}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a href="https://t.me/gubkinuz" target="_blank" rel="noopener noreferrer" 
                  whileHover="hover" variants={iconVariants}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <FaTelegram size={24} />
                </motion.a>
                <motion.a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                  whileHover="hover" variants={iconVariants}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <FaYoutube size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.991683916268!2d69.26918291744384!3d41.32518210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c845f83c01ed720!2sGubkin%20University%20in%20Tashkent!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            
            <div className="flex flex-col justify-center">
              <motion.h3 
                className="text-xl font-semibold text-foreground mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                Филиал РГУ нефти и газа (НИУ) имени И.М. Губкина в г. Ташкенте
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                Мы стремимся предоставить высококачественное образование в сфере нефтегазовой промышленности, 
                сочетая традиции российской инженерной школы с инновационными подходами к обучению.
              </motion.p>
            </div>
          </div>

          <motion.p 
            className="text-center text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            © {new Date().getFullYear()} Филиал РГУ нефти и газа (НИУ) имени И.М. Губкина в г. Ташкенте. Все права защищены.
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
} 