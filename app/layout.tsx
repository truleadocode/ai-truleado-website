import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.truleado.com'),
  title: {
    default: 'Truleado — AI Influencer Marketing for Micro & Nano Creators',
    template: '%s | Truleado',
  },
  description: 'AI influencer marketing platform. Post one brief, get a campaign-ready shortlist of micro and nano creators who already said yes. No cold outreach, no spreadsheets.',
  keywords: ['influencer marketing platform', 'micro influencer', 'nano influencer', 'AI influencer matching', 'UGC creators', 'influencer campaign management'],
  authors: [{ name: 'Truleado', url: 'https://www.truleado.com' }],
  creator: 'Truleado',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.truleado.com',
    siteName: 'Truleado',
    title: 'Truleado — AI Influencer Marketing',
    description: 'Post one brief. Get a campaign-ready shortlist of micro and nano creators who already said yes.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@truleado',
    creator: '@truleado',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: '/favicon-t.png',
    shortcut: '/favicon-t.png',
    apple: '/logo-mark-t-tile.png',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.truleado.com/#organization',
      name: 'Truleado',
      url: 'https://www.truleado.com',
      logo: 'https://www.truleado.com/logo-mark-t-tile.png',
      description: 'AI influencer marketing platform that matches brands with micro and nano creators using AI-powered campaign matching and automated outreach.',
      foundingDate: '2024',
      founder: { '@type': 'Person', '@id': 'https://www.truleado.com/#founder', name: 'Peter Hall', url: 'https://www.linkedin.com/in/hall-peter/' },
      sameAs: [
        'https://www.instagram.com/truleado/',
        'https://x.com/truleado',
        'https://www.linkedin.com/company/truleado',
        'https://www.tiktok.com/@truleado',
      ],
      contactPoint: { '@type': 'ContactPoint', email: 'support@truleado.com', contactType: 'customer support' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.truleado.com/#website',
      url: 'https://www.truleado.com',
      name: 'Truleado',
      publisher: { '@id': 'https://www.truleado.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.truleado.com/compare?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M53L68M3');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans bg-bg text-fg overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M53L68M3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
