import Link from 'next/link'
import { ArrowRight, CheckCircle, Palette, Shield, Sparkles } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function VehicleWrapsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-900 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-lg mb-6">Custom Vehicle Wraps</h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your Tesla with a custom vinyl wrap. Choose from sleek matte finishes to vibrant colors while protecting your original paint.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Custom Designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Paint Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Removable & Reversible</span>
                </div>
              </div>
              <Link href="/book" className="btn-primary bg-tesla-red hover:bg-red-700">
                Book Custom Wrap <ArrowRight size={16} />
              </Link>
            </div>
            <div className="h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Custom Wrap Application Image</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-light-gray">
        <h2 className="heading-lg text-center mb-12">Wrap Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Palette className="text-tesla-red mb-4" size={32} />
            <h3 className="heading-sm mb-2">Gloss Finishes</h3>
            <p className="text-gray-600 text-sm">High-shine, vibrant colors with maximum visual impact.</p>
          </div>
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Sparkles className="text-tesla-red mb-4" size={32} />
            <h3 className="heading-sm mb-2">Matte Finishes</h3>
            <p className="text-gray-600 text-sm">Subtle, modern look with sophisticated appearance.</p>
          </div>
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Shield className="text-tesla-red mb-4" size={32} />
            <h3 className="heading-sm mb-2">Specialty Wraps</h3>
            <p className="text-gray-600 text-sm">Carbon fiber, chrome, and textured finishes.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
