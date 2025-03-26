'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { 
    name: 'О Филиале',
    href: '/about',
    description: 'История, миссия и структура филиала РГУ нефти и газа',
    items: [
      { name: 'История', href: '/about/history' },
      { name: 'Руководство', href: '/about/leadership' },
      { name: 'Структура', href: '/about/structure' },
    ]
  },
  { 
    name: 'Жизнь филиала',
    href: '/campus-life',
    description: 'Студенческая жизнь, мероприятия и достижения',
    items: [
      { name: 'Новости', href: '/news' },
      { name: 'Мероприятия', href: '/events' },
      { name: 'Галерея', href: '/gallery' },
    ]
  },
  { name: 'Научный журнал', href: '/journal' },
  { 
    name: 'Абитуриенту',
    href: '/admission',
    description: 'Информация о поступлении и образовательных программах',
    items: [
      { name: 'Правила приема', href: '/admission/rules' },
      { name: 'Направления подготовки', href: '/admission/programs' },
      { name: 'Документы', href: '/admission/documents' },
    ]
  },
  { 
    name: 'Студенту',
    href: '/student',
    description: 'Расписание, электронная библиотека и сервисы',
    items: [
      { name: 'Расписание', href: '/schedule' },
      { name: 'Библиотека', href: '/library' },
      { name: 'Личный кабинет', href: '/profile' },
    ]
  },
  { name: 'Интерактивные услуги', href: '/services' },
  { name: 'Нормативно-правовая база', href: '/documents' },
]

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'O`zbekcha', flag: '🇺🇿' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export function Header() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background'
    }`}>
      {/* Верхняя панель с логотипом */}
      <div className="border-b border-border/40">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Логотип"
                width={60}
                height={60}
                className="h-[60px] w-[60px] transition-transform duration-300 hover:scale-105"
              />
              <div>
                <h1 className="text-xl font-semibold text-foreground">
                  РГУ нефти и газа
                </h1>
                <p className="text-sm text-muted-foreground">
                  Филиал в г. Ташкенте
                </p>
              </div>
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            {/* Поиск */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <Input
                type="search"
                placeholder="Поиск по сайту..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[300px] pl-10 pr-4 transition-all duration-300 focus:w-[350px]"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </motion.div>

            {/* Переключатели */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center"
            >
              {/* Переключатель темы */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9"
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </motion.svg>
              </Button>

              {/* Разделитель */}
              <div className="mx-2 h-4 w-px bg-border" />

              {/* Переключатель языка */}
              <div className="flex items-center gap-2 text-sm font-medium">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/90"
                >
                  RU
                </Button>
                <span className="text-border">|</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  UZ
                </Button>
              </div>

              {/* Мобильное меню */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2 md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="space-y-3">
                        <Link
                          href={item.href}
                          className={`text-lg font-medium ${
                            pathname === item.href
                              ? 'text-primary'
                              : 'text-foreground/80'
                          }`}
                        >
                          {item.name}
                        </Link>
                        {item.items && (
                          <div className="ml-4 flex flex-col gap-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Главное меню */}
      <nav className={`border-b border-border/40 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur' : 'bg-background'
      }`}>
        <div className="mx-auto hidden max-w-7xl px-4 md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger
                        className={pathname === item.href ? 'text-primary' : ''}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                    pathname === subItem.href ? 'text-primary' : ''
                                  }`}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.name}
                                  </div>
                                  {item.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${navigationMenuTriggerStyle()} ${
                        pathname === item.href ? 'text-primary' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
} 