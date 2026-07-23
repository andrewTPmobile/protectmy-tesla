import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Droplets } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function WindowTintPage() {
  const benefits = [
    {
      icon: Zap,
      title: '99% UV Protection',
      description: 'Blocks up to 99% of harmful UV rays, protecting your interior and skin.',
    },
    {
      icon: Shield,
      title: 'Heat Reduction',
      description: 'Keep your Tesla cooler in summer, reducing air conditioning load and battery drain.',
    },
    {
      icon: Droplets,
      title: 'Privacy & Security',
      description: 'Protects your interior from view while maintaining visibility for safe driving.',
    },
    {
      icon: Shield,
      title: 'Glare Reduction',
      description: 'Reduces sun glare for safer, more comfortable driving experience.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-lg mb-6">Premium Window Tint</h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional window tinting for UV protection, privacy, and enhanced comfort. Keep your Tesla cool and stylish.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">99% UV Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Professional Installation</span>
                </div>
              </div>
              <Link href="/book" className="btn-primary bg-tesla-red hover:bg-red-700">
                Book Window Tint <ArrowRight size={16} />
              </Link>
            </div>
            <div className="h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Professional Window Tint Installation Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container bg-light-gray">
        <h2 className="heading-lg text-center mb-12">Window Tint Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Icon className="text-tesla-red mb-4" size={32} />
                <h3 className="heading-sm mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tint Levels */}
      <section className="section-container">
        <h2 className="heading-lg text-center mb-12">Tint Darkness Levels</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="h-32 bg-gray-300 opacity-100" />
            <div className="p-4">
              <h3 className="font-bold mb-1">No Tint</h3>
              <p className="text-sm text-gray-600">100% light transmission</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="h-32 bg-gray-600 opacity-70" />
            <div className="p-4">
              <h3 className="font-bold mb-1">Light - 50%</h3>
              <p className="text-sm text-gray-600">Standard option</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="h-32 bg-gray-800 opacity-40" />
            <div className="p-4">
              <h3 className="font-bold mb-1">Medium - 35%</h3>
              <p className="text-sm text-gray-600">Popular choice</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="h-32 bg-black opacity-30" />
            <div className="p-4">
              <h3 className="font-bold mb-1">Dark - 20%</h3>
              <p className="text-sm text-gray-600">Maximum privacy</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
