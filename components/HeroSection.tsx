'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-charcoal text-white overflow-hidden flex items-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-tesla-red/20 to-charcoal/0" />

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,rgba(232,33,39,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4 px-3 py-1 bg-tesla-red/20 rounded-full border border-tesla-red/50">
            <span className="text-sm font-semibold text-tesla-red">Premium Protection for Tesla</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protect Your Tesla
            <span className="block text-tesla-red">Investment</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Professional paint protection film, ceramic coating, window tint, and custom wraps from certified installers across North America.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="btn-primary bg-tesla-red hover:bg-red-700">
              Book Now <ArrowRight size={16} />
            </Link>
            <Link href="/find-installer" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
              Find Installer
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-tesla-red font-bold text-2xl">5000+</p>
              <p className="text-sm text-gray-400">Teslas Protected</p>
            </div>
            <div>
              <p className="text-tesla-red font-bold text-2xl">50+</p>
              <p className="text-sm text-gray-400">Certified Installers</p>
            </div>
            <div>
              <p className="text-tesla-red font-bold text-2xl">4.8★</p>
              <p className="text-sm text-gray-400">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 md:h-screen flex items-center justify-center">
          {/* Animated Tesla shape */}
          <div className="absolute w-72 h-64 bg-gradient-to-br from-tesla-red to-tesla-red/30 rounded-3xl opacity-20 blur-3xl animate-pulse" />

          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-600">
              <p className="text-lg">Professional Tesla Protection</p>
              <p className="text-sm mt-2">High-quality imagery coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-tesla-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
