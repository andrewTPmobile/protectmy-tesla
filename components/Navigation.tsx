'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const services = [
    { name: 'Paint Protection Film', href: '/services/paint-protection-film' },
    { name: 'Window Tint', href: '/services/window-tint' },
    { name: 'Vehicle Wraps', href: '/services/vehicle-wraps' },
    { name: 'Ceramic Coating', href: '/services/ceramic-coating' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-tesla-red rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl text-charcoal hidden sm:inline">Protect My Tesla</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="text-charcoal hover:text-tesla-red transition-colors font-medium">
              Services
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              {services.map(service => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 text-charcoal hover:bg-light-gray hover:text-tesla-red transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/find-installer" className="text-charcoal hover:text-tesla-red transition-colors font-medium">
            Find Installer
          </Link>

          <Link href="/book" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-light-gray rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <div>
              <p className="font-semibold text-charcoal mb-2">Services</p>
              <div className="space-y-2 ml-4">
                {services.map(service => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-charcoal hover:text-tesla-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/find-installer"
              className="block text-charcoal hover:text-tesla-red transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Find Installer
            </Link>

            <Link href="/book" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
