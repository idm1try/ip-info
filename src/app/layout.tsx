import './global.css'
import { AnalyticsProvider } from './analytics'
import { Inter } from '@next/font/google'

const fontSans = Inter({ variable: '--font-sans' })

export const metadata = {
  title: 'IP Info',
  themeColor: '#111010',
  description: 'View your ip information',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'IP Info',
    site: '@idm1try',
    creator: '@idm1try',
    card: 'summary_large_image',
    description: 'View your ip information',
    images:
      'https://idm1try.ru/api/og?heading=IP%20Info&desc=View%20your%20ip%20information',
  },
  openGraph: {
    title: {
      template: '%s | IP Info',
      default: 'IP Info',
    },
    description: 'View your ip information',
    siteName: 'Weather',
    locale: 'en-US',
    type: 'website',
    url: 'https://ip.idm1try.ru/',
    images:
      'https://idm1try.ru/api/og?heading=IP%20Info&desc=View%20your%20ip%20information',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  alternates: {
    canonical: 'https://ip.idm1try.ru/',
  },
  other: {
    'darkreader-lock': '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`bg-neutral-50 font-sans text-neutral-900 antialiased selection:bg-neutral-200 dark:bg-[#111010] dark:text-neutral-100 dark:selection:bg-neutral-700 ${fontSans.variable}`}
    >
      <head />
      <body>
        <div className='mx-auto max-w-3xl px-6 pb-20'>
          <main className='pt-6 sm:pt-16'>
            {children}
            <AnalyticsProvider />
          </main>
        </div>
      </body>
    </html>
  )
}