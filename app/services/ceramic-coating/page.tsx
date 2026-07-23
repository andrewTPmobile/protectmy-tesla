import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Droplets, Zap } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function CeramicCoatingPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-lg mb-6">Ceramic Pro Coating</h1>
              <p className="text-xl text-gray-300 mb-8">
                Nanotechnology ceramic coating for ultimate paint protection and hydrophobic properties. Keep your Tesla showroom-ready year-round.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">5-Year Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Water Beading</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Enhanced Gloss</span>
                </div>
              </div>
              <Link href="/book" className="btn-primary bg-tesla-red hover:bg-red-700">
                Book Ceramic Coating <ArrowRight size={16} />
              </Link>
            </div>
            <div className="h-96 bg-gradient-to-br from-amber-600/20 to-transparent rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Ceramic Coating Application Image</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-light-gray">
        <h2 className="heading-lg text-center mb-12">Ceramic Pro Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Droplets className="text-tesla-red mb-4" size={32} />
            <h3 className="heading-sm mb-2">Hydrophobic</h3>
            <p className="text-gray-600 text-sm">Water beads and rolls off, keeping your paint dry and spotless.</p>
          </div>
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Zap className="text-tesla-red mb-4" size={32} />
            <h3 className="heading-sm mb-2">Enhanced Gloss</h3>
            <p className="text-gray-600 text-sm">Deeper, more reflective shine that enhances paint color.</p>
          </div>
          <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Shield className="text-tesla-red mb-4" size={32} />
            <h3 className="heading-sm mb-2">Chemical Resistant</h3>
            <p className="text-gray-600 text-sm">Protects against bird droppings, tree sap, and salt spray.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
