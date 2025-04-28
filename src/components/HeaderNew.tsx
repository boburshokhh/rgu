'use client'

import { useState, useEffect, useRef, RefObject } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, ChevronDown, Sun, Moon, Globe, Bell, LayoutGrid } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const navigation = [
  { 
    name: 'О Филиале',
    href: '/about',
    description: 'История, миссия и структура филиала РГУ нефти и газа',
    icon: <Globe className="h-4 w-4" />,
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
    icon: <LayoutGrid className="h-4 w-4" />,
    items: [
      { name: 'Новости', href: '/news' },
      { name: 'Мероприятия', href: '/events' },
      { name: 'Галерея', href: '/gallery' },
    ]
  },
  { 
    name: 'Научный журнал', 
    href: '/journal',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
  },
  { 
    name: 'Абитуриенту',
    href: '/admission',
    description: 'Информация о поступлении и образовательных программах',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>,
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    items: [
      { name: 'Расписание', href: '/schedule' },
      { name: 'Библиотека', href: '/library' },
      { name: 'Личный кабинет', href: '/profile' },
    ]
  },
  { 
    name: 'Интерактивные услуги', 
    href: '/services',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
  },
  { 
    name: 'Нормативно-правовая база', 
    href: '/documents',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
  },
]

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'O`zbekcha', flag: '🇺🇿' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export function HeaderNew() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)
  const [notificationCount, setNotificationCount] = useState(3)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  
  const langMenuRef = useRef<HTMLDivElement | null>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const headerRef = useRef<HTMLElement | null>(null)
  
  // Обработка скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Закрытие языкового меню по клику вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  
  // Функция для переключения мобильного подменю
  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded(prev => prev === name ? null : name)
  }

  return (
    <header 
      ref={headerRef}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 bg-background transition-all duration-300",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      {/* Верхняя декоративная полоса */}
      <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Верхний ряд с логотипом и утилитами */}
        <div className="flex h-16 items-center justify-between border-b border-border/50">
          {/* Логотип */}
          <Link 
            href="/" 
            className="relative flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Logo />
            </motion.div>
          </Link>
          
          {/* Правая часть с утилитами */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Поиск */}
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", maxWidth: "280px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative hidden md:block"
                >
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Поиск..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-9 border-primary/30 pl-9 pr-9 rounded-lg focus-visible:ring-primary/30"
                      autoFocus
                    />
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-md"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                    className="h-9 w-9 rounded-lg"
                  >
                    <Search className="h-[18px] w-[18px]" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Уведомления */}
            <div className="hidden sm:block relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg"
                  onClick={() => setHasNotifications(prev => !prev)}
                >
                  <Bell className="h-[18px] w-[18px]" />
                </Button>
              </motion.div>
              
              <div className="absolute -top-3 -right-3 z-50" style={{ pointerEvents: 'none', transform: 'translate(2px, -2px)' }}>
                <AnimatePresence>
                  {hasNotifications && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 15 
                        } 
                      }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(var(--destructive-rgb), 0.7)',
                            '0 0 0 4px rgba(var(--destructive-rgb), 0)',
                            '0 0 0 0 rgba(var(--destructive-rgb), 0)'
                          ]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatDelay: 2,
                          duration: 1.5
                        }}
                        className="flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive p-0"
                        style={{ padding: '0px 4px', minWidth: '18px' }}
                      >
                        <span className="text-xs font-medium text-destructive-foreground">
                          {notificationCount > 9 ? '9+' : notificationCount}
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Переключатель темы */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9 rounded-lg"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.div
                      key="dark-icon"
                      initial={{ y: 10, opacity: 0, rotate: 90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: -10, opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-[18px] w-[18px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="light-icon"
                      initial={{ y: -10, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 10, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-[18px] w-[18px]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Выбор языка */}
            <div className="hidden sm:block relative" ref={langMenuRef}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="h-9 gap-2 px-3 rounded-lg border-border/80 font-medium text-sm"
                  onClick={() => setLanguageMenuOpen(prev => !prev)}
                >
                  <span className="text-sm">🇷🇺</span>
                  <span>RU</span>
                  <motion.span
                    animate={{ rotate: languageMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </motion.span>
                </Button>
              </motion.div>
              
              {/* Выпадающее меню языков */}
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-1 w-40 rounded-lg bg-popover border border-border shadow-lg p-1 z-50"
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                        className={cn(
                          "flex w-full items-center gap-2 px-3 py-2 text-left text-sm rounded-md",
                          lang.code === 'ru' ? 'bg-primary/10 text-primary font-medium' : ''
                        )}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Мобильное меню */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
            >
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-9 w-9 rounded-lg border-border/80"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                
                <SheetContent 
                  side="right" 
                  className="p-0 border-border w-[290px] sm:w-[350px]"
                >
                  <div className="flex flex-col h-full">
                    {/* Шапка мобильного меню */}
                    <div className="border-b border-border/50 p-4 flex items-center justify-between">
                      <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Logo />
                      </Link>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                          className="h-9 w-9 rounded-lg"
                        >
                          {theme === 'dark' ? (
                            <Moon className="h-[18px] w-[18px]" />
                          ) : (
                            <Sun className="h-[18px] w-[18px]" />
                          )}
                        </Button>
                        
                        <Button
                          variant="outline"
                          className="h-9 gap-2 px-3 rounded-lg"
                        >
                          <span className="text-sm">🇷🇺</span>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Навигационное меню в мобильной версии */}
                    <div className="flex-1 overflow-auto py-3">
                      <nav className="px-3 space-y-1">
                        {navigation.map((item) => (
                          <div key={item.name} className="mb-1">
                            <div className={cn(
                              "rounded-lg overflow-hidden",
                              pathname === item.href ? "bg-primary/10" : ""
                            )}>
                              <div
                                className={cn(
                                  "flex items-center justify-between p-3 cursor-pointer"
                                )}
                                onClick={() => {
                                  if (item.items) {
                                    toggleMobileSubmenu(item.name);
                                  } else {
                                    setMobileMenuOpen(false);
                                  }
                                }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-3 flex-1"
                                  onClick={(e) => {
                                    if (item.items) e.preventDefault();
                                  }}
                                >
                                  {/* Иконка */}
                                  <span className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-md",
                                    pathname === item.href
                                      ? 'bg-primary/20 text-primary'
                                      : 'bg-secondary text-muted-foreground'
                                  )}>
                                    {item.icon}
                                  </span>
                                  
                                  {/* Название */}
                                  <span className={cn(
                                    "text-base font-medium",
                                    pathname === item.href
                                      ? 'text-primary'
                                      : 'text-foreground/90'
                                  )}>
                                    {item.name}
                                  </span>
                                </Link>
                                
                                {/* Стрелка для подменю */}
                                {item.items && (
                                  <motion.div
                                    animate={{ rotate: mobileExpanded === item.name ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronDown className="h-4 w-4 text-muted-foreground mr-1" />
                                  </motion.div>
                                )}
                              </div>
                              
                              {/* Подпункты меню */}
                              {item.items && (
                                <AnimatePresence initial={false}>
                                  {mobileExpanded === item.name && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ 
                                        height: 'auto', 
                                        opacity: 1,
                                        transition: {
                                          height: { duration: 0.3 },
                                          opacity: { duration: 0.2, delay: 0.1 }
                                        }
                                      }}
                                      exit={{ 
                                        height: 0, 
                                        opacity: 0,
                                        transition: {
                                          height: { duration: 0.3 },
                                          opacity: { duration: 0.15 }
                                        }
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="pl-11 pb-2 space-y-1 border-l-2 border-primary/20 ml-7 mt-1">
                                        {item.items.map((subItem) => (
                                          <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className={cn(
                                              "flex items-center gap-2 px-3 py-2 text-sm rounded-md",
                                              pathname === subItem.href
                                                ? 'text-primary bg-primary/10 font-medium'
                                                : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-80" />
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              )}
                            </div>
                          </div>
                        ))}
                      </nav>
                    </div>
                    
                    {/* Поиск в мобильном меню */}
                    <div className="border-t border-border/50 p-4">
                      <div className="relative">
                        <Input
                          type="search"
                          placeholder="Поиск..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9 pr-4 rounded-lg"
                        />
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </div>
        
        {/* Основное навигационное меню (десктоп) */}
        <div className="hidden md:block border-b border-border/50">
          <div className="relative">
            <nav className="flex items-center h-12 gap-2">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-12 items-center gap-1.5 px-3 font-medium text-sm border-b-2 whitespace-nowrap",
                      pathname === item.href
                        ? 'text-primary border-primary'
                        : 'text-foreground/80 border-transparent hover:border-primary/50 group-hover:text-primary group-hover:border-primary/80'
                    )}
                    onClick={(e) => {
                      if (item.items && activeDropdown === item.name) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span className="text-current opacity-80">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.items && (
                      <ChevronDown className="h-3.5 w-3.5 ml-0.5 opacity-60 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                  
                  {item.items && (
                    <div
                      className={cn(
                        "absolute left-0 top-full w-[280px] rounded-b-lg border border-border/60 bg-popover/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-200 z-50",
                        activeDropdown === item.name 
                          ? 'opacity-100 translate-y-0 visible' 
                          : 'opacity-0 translate-y-2 invisible'
                      )}
                    >
                      <div className="p-3">
                        {item.description && (
                          <div className="mb-3 pb-2 border-b border-border/50">
                            <h3 className="text-base font-semibold text-primary mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        )}
                        
                        <div className="grid gap-1.5">
                          {item.items.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                                pathname === subItem.href
                                  ? 'bg-primary/15 text-primary font-medium'
                                  : 'hover:bg-primary/10 hover:text-primary'
                              )}
                            >
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-medium">
                                {index + 1}
                              </span>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-2 pt-2 border-t border-border/50">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between px-3 py-1.5 text-xs text-primary rounded-md hover:bg-primary/10"
                          >
                            <span>Все разделы</span>
                            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      {/* CSS переменные для динамических стилей */}
      <style jsx global>{`
        :root {
          --primary-rgb: ${theme === 'dark' ? '67, 122, 247' : '59, 130, 246'};
          --destructive-rgb: ${theme === 'dark' ? '246, 96, 96' : '239, 68, 68'};
        }
      `}</style>
    </header>
  )
}
