import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logos/logo-light.png"
              alt="Protect My Tesla"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">Premium protection services for your Tesla vehicle.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/paint-protection-film" className="hover:text-tesla-red transition">Paint Protection Film</Link></li>
              <li><Link href="/services/window-tint" className="hover:text-tesla-red transition">Window Tint</Link></li>
              <li><Link href="/services/vehicle-wraps" className="hover:text-tesla-red transition">Vehicle Wraps</Link></li>
              <li><Link href="/services/ceramic-coating" className="hover:text-tesla-red transition">Ceramic Coating</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/find-installer" className="hover:text-tesla-red transition">Find Installer</Link></li>
              <li><Link href="/book" className="hover:text-tesla-red transition">Book Now</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-tesla-red transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-tesla-red transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-tesla-red flex-shrink-0" />
                <a href="tel:(612) 229-5691" className="hover:text-tesla-red transition">(612) 229-5691</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-tesla-red flex-shrink-0" />
                <a href="mailto:info@protectmytesla.com" className="hover:text-tesla-red transition">info@protectmytesla.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-tesla-red flex-shrink-0" />
                <div>
                  <p>7703 Central Avenue NE</p>
                  <p>Minneapolis, MN 55432</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-1 text-tesla-red flex-shrink-0" />
                <div className="text-xs">
                  <p>Mon-Fri: 8am - 5pm</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-gray-400 text-sm">© 2024 Protect My Tesla. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://facebook.com/protectmyteslausa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tesla-red transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/protectmyteslausa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tesla-red transition">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@protectmytesla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tesla-red transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
