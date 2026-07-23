import Link from 'next/link'
import { ArrowRight, Shield, Zap, Award } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import CTASection from '@/components/CTASection'

export default function Home() {
  const services = [
    {
      title: 'Paint Protection Film',
      description: 'Protect your Tesla\'s paint from scratches, swirls, and environmental damage with premium protective film.',
      icon: Shield,
      href: '/services/paint-protection-film',
      benefits: ['Self-healing technology', 'UV protection', 'Easy to maintain'],
    },
    {
      title: 'Window Tint',
      description: 'Premium window tinting for UV protection, privacy, and enhanced aesthetics.',
      icon: Zap,
      href: '/services/window-tint',
      benefits: ['99% UV protection', 'Heat reduction', 'Privacy'],
    },
    {
      title: 'Vehicle Wraps',
      description: 'Custom vehicle wraps to protect your paint while adding unique style.',
      icon: Award,
      href: '/services/vehicle-wraps',
      benefits: ['Custom designs', 'Paint protection', 'Full coverage'],
    },
    {
      title: 'Ceramic Coating',
      description: 'Nanotechnology ceramic coating for ultimate paint protection and gloss.',
      icon: Shield,
      href: '/services/ceramic-coating',
      benefits: ['5-year protection', 'Water beading', 'Hydrophobic'],
    },
  ]

  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="section-container bg-light-gray">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Premium Protection Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional installation of the latest protection technologies to keep your Tesla looking showroom fresh for years to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services/paint-protection-film" className="btn-outline">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Why Choose Us */}
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-tesla-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-tesla-red" size={32} />
            </div>
            <h3 className="heading-sm mb-2">Expert Installation</h3>
            <p className="text-gray-600">Certified installers with years of experience protecting premium vehicles.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-tesla-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-tesla-red" size={32} />
            </div>
            <h3 className="heading-sm mb-2">Quality Materials</h3>
            <p className="text-gray-600">We use only the best protection films and coatings from industry leaders.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-tesla-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-tesla-red" size={32} />
            </div>
            <h3 className="heading-sm mb-2">Warranty Coverage</h3>
            <p className="text-gray-600">Full warranty on materials and installation for complete peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  )
}
