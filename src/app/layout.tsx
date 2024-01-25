import './global.css'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const fontSans = Inter({ variable: '--font-sans', subsets: ['latin'] })

export const viewport = {
  themeColor: '#161616',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}

export const metadata = {
  metadataBase: new URL('https://idm1tryip.vercel.app'),
  title: 'IP Info',
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
    images: 'https://idm1try.ru/api/og?heading=IP%20Info&desc=View%20your%20ip%20information',
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
    url: 'https://idm1tryip.vercel.app/',
    images: 'https://idm1try.ru/api/og?heading=IP%20Info&desc=View%20your%20ip%20information',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://idm1tryip.vercel.app/',
  },
  manifest: '/site.webmanifest',
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
      className={cn(
        'scroll-smooth font-sans text-text bg-base',
        'antialiased selection:bg-surface1',
        fontSans.variable,
      )}
    >
      <body>
        <div className='mx-auto max-w-3xl px-6 pb-20'>
          <main className='pt-6 sm:pt-16'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
