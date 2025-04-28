import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { HeaderNew } from '@/components/HeaderNew'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Филиал РГУ нефти и газа (НИУ) имени И.М. Губкина в г. Ташкенте',
  description: 'Официальный сайт филиала РГУ нефти и газа (НИУ) имени И.М. Губкина в городе Ташкенте',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className={inter.className}>
        <Providers>
          <HeaderNew />
          <main className="min-h-screen pt-32">
            {children}
          </main>
          <Footer />
          <ContactForm />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
