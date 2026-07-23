import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-container bg-gradient-to-r from-tesla-red to-red-700 text-white">
      <div className="text-center">
        <h2 className="heading-lg mb-4">Ready to Protect Your Tesla?</h2>
        <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
          Schedule your professional installation today and keep your Tesla looking showroom fresh for years to come.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="px-8 py-4 bg-white text-tesla-red font-bold rounded-lg hover:bg-red-50 transition-colors inline-flex items-center justify-center gap-2"
          >
            Book Now <ArrowRight size={20} />
          </Link>
          <Link
            href="/find-installer"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
          >
            Find an Installer
          </Link>
        </div>

        <p className="mt-6 text-red-100 text-sm">
          Have questions? Call us at <a href="tel:(612) 229-5691" className="font-bold hover:underline">(612) 229-5691</a>
        </p>
      </div>
    </section>
  )
}
