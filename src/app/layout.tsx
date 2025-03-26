import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

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
          <Header />
          <main className="min-h-screen pt-32">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
