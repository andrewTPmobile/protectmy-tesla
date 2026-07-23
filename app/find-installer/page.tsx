'use client'

import { useState } from 'react'
import { MapPin, Star, Phone, Globe } from 'lucide-react'

export default function FindInstallerPage() {
  const [searchState, setSearchState] = useState('')

  // Mock installer data
  const installers = [
    {
      id: 1,
      name: 'Tesla Protection Minneapolis',
      location: 'Minneapolis, MN',
      rating: 4.9,
      reviews: 128,
      services: ['PPF', 'Tint', 'Wraps', 'Ceramic'],
      phone: '(612) 555-0101',
      website: 'www.tpm.com',
      image: '🏢',
    },
    {
      id: 2,
      name: 'Premier Tesla Care',
      location: 'St. Paul, MN',
      rating: 4.8,
      reviews: 95,
      services: ['PPF', 'Ceramic'],
      phone: '(612) 555-0102',
      website: 'www.ptc.com',
      image: '🏢',
    },
    {
      id: 3,
      name: 'Tesla Shield Solutions',
      location: 'Edina, MN',
      rating: 5.0,
      reviews: 156,
      services: ['PPF', 'Tint', 'Wraps', 'Ceramic'],
      phone: '(952) 555-0103',
      website: 'www.tss.com',
      image: '🏢',
    },
    {
      id: 4,
      name: 'Elite Auto Protection',
      location: 'Bloomington, MN',
      rating: 4.7,
      reviews: 82,
      services: ['Wraps', 'Ceramic'],
      phone: '(952) 555-0104',
      website: 'www.eap.com',
      image: '🏢',
    },
  ]

  const filteredInstallers = installers.filter(installer =>
    installer.name.toLowerCase().includes(searchState.toLowerCase()) ||
    installer.location.toLowerCase().includes(searchState.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">Find an Installer</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with certified Protect My Tesla installers near you. All installers offer professional installation and warranty coverage.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent text-lg"
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredInstallers.map(installer => (
            <div key={installer.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="heading-md mb-2">{installer.name}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin size={16} />
                          {installer.location}
                        </div>
                      </div>
                      {/* Rating */}
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="fill-tesla-red text-tesla-red" size={16} />
                          <span className="font-bold text-lg">{installer.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">{installer.reviews} reviews</p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {installer.services.map(service => (
                        <span key={service} className="px-3 py-1 bg-light-gray text-charcoal text-xs font-semibold rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <a href={`tel:${installer.phone}`} className="flex items-center gap-2 hover:text-tesla-red transition-colors">
                        <Phone size={16} />
                        {installer.phone}
                      </a>
                      <a href={`https://${installer.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-tesla-red transition-colors">
                        <Globe size={16} />
                        {installer.website}
                      </a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center md:justify-end">
                    <button className="btn-primary bg-tesla-red hover:bg-red-700 whitespace-nowrap">
                      Book with This Installer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredInstallers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 text-lg">No installers found matching your search.</p>
            <p className="text-gray-500 text-sm mt-2">Try a different location or service name.</p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg p-8 border-l-4 border-tesla-red">
          <h3 className="heading-md mb-4">Why Choose Our Network?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-tesla-red font-bold">✓</span>
              <span>All installers are certified and vetted</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tesla-red font-bold">✓</span>
              <span>Full warranty on materials and installation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tesla-red font-bold">✓</span>
              <span>Professional, experienced technicians</span>
            </li>
            <li className="flex gap-3">
              <span className="text-tesla-red font-bold">✓</span>
              <span>Quality guaranteed protection for your Tesla</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
