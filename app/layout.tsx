import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Protect My Tesla - Premium Tesla Protection Services',
  description: 'Professional paint protection film, window tint, vehicle wraps, and ceramic coating for Tesla vehicles. Find an installer near you.',
  keywords: ['Tesla protection', 'paint protection film', 'window tint', 'vehicle wraps', 'ceramic coating'],
  openGraph: {
    title: 'Protect My Tesla',
    description: 'Premium Tesla Protection Services',
    url: 'https://protectmytesla.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
