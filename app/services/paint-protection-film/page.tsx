import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Zap, Award } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function PPFServicePage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Self-Healing Technology',
      description: 'Minor scratches and swirls disappear with heat exposure, maintaining your paint\'s pristine appearance.',
    },
    {
      icon: Zap,
      title: 'UV Protection',
      description: 'Advanced UV blockers prevent paint fading and oxidation from sun exposure over time.',
    },
    {
      icon: Award,
      title: 'Long-Lasting Protection',
      description: '7-10 years of protection with proper maintenance. One-time investment for years of peace of mind.',
    },
    {
      icon: Shield,
      title: 'Maintains Appearance',
      description: 'Clear, unnoticeable application preserves your Tesla\'s original color and shine perfectly.',
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Discuss your vehicle\'s needs and protection goals with our expert team.',
    },
    {
      step: 2,
      title: 'Paint Preparation',
      description: 'Thorough cleaning and inspection of your vehicle\'s paint surface.',
    },
    {
      step: 3,
      title: 'Film Application',
      description: 'Precise installation of premium protective film by certified technicians.',
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'Quality check and care instructions for optimal protection and longevity.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-lg mb-6">Paint Protection Film</h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional paint protection film installation to keep your Tesla\'s finish flawless for years. Invisible protection against the elements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">7-10 years of protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Invisible, crystal clear</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-tesla-red flex-shrink-0" size={24} />
                  <span className="text-lg">Self-healing technology</span>
                </div>
              </div>
              <Link href="/book" className="btn-primary bg-tesla-red hover:bg-red-700">
                Book Paint Protection Film <ArrowRight size={16} />
              </Link>
            </div>
            <div className="h-96 bg-gradient-to-br from-tesla-red/20 to-transparent rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Premium PPF Installation Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PPF Section */}
      <section className="section-container bg-light-gray">
        <h2 className="heading-lg text-center mb-12">Why Paint Protection Film?</h2>
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

      {/* Installation Process */}
      <section className="section-container">
        <h2 className="heading-lg text-center mb-12">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < process.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+2rem)] right-[calc(-100%)] h-0.5 bg-tesla-red/30" />
              )}

              {/* Step card */}
              <div className="bg-white rounded-lg p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-tesla-red text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-container bg-light-gray">
        <h2 className="heading-lg text-center mb-8">Standard PPF Coverage</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We offer comprehensive coverage options to protect your investment:
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6">
            <h3 className="heading-sm mb-3">Partial Coverage</h3>
            <p className="text-gray-600 text-sm mb-4">
              Hood, fenders, bumper, and headlights - high-impact zones only.
            </p>
            <p className="font-bold text-tesla-red">Starting at $800</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-tesla-red">
            <h3 className="heading-sm mb-3">Full Body</h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete vehicle coverage for maximum protection and peace of mind.
            </p>
            <p className="font-bold text-tesla-red">Starting at $2,500</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="heading-sm mb-3">Custom</h3>
            <p className="text-gray-600 text-sm mb-4">
              Tailored coverage based on your specific needs and budget.
            </p>
            <p className="font-bold text-tesla-red">Contact for Quote</p>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="section-container">
        <h2 className="heading-lg text-center mb-12">Easy Maintenance</h2>
        <div className="max-w-3xl mx-auto bg-light-gray rounded-lg p-8">
          <h3 className="heading-md mb-6">Keep Your PPF Looking Perfect</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-tesla-red font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">Wash regularly</p>
                <p className="text-gray-600">Gentle hand wash or contactless car wash recommended</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-tesla-red font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">Use quality products</p>
                <p className="text-gray-600">Recommended ceramic car wash soaps and wax</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-tesla-red font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">Avoid harsh chemicals</p>
                <p className="text-gray-600">Stay away from harsh detergents and abrasive cleaners</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-tesla-red font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">Professional detailing</p>
                <p className="text-gray-600">Annual professional detailing for optimal protection</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
