'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, Car } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    service: 'paint-protection-film',
    vehicleModel: 'model-3',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const services = [
    { id: 'paint-protection-film', name: 'Paint Protection Film' },
    { id: 'window-tint', name: 'Window Tint' },
    { id: 'vehicle-wraps', name: 'Vehicle Wraps' },
    { id: 'ceramic-coating', name: 'Ceramic Coating' },
  ]

  const vehicles = [
    { id: 'model-3', name: 'Tesla Model 3' },
    { id: 'model-y', name: 'Tesla Model Y' },
    { id: 'model-s', name: 'Tesla Model S' },
    { id: 'model-x', name: 'Tesla Model X' },
    { id: 'roadster', name: 'Tesla Roadster' },
    { id: 'cybertruck', name: 'Tesla Cybertruck' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to your backend/database
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">Book Your Service</h1>
          <p className="text-gray-600 text-lg">
            Schedule your professional Tesla protection installation with our certified installers.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <p className="font-semibold">Thank you!</p>
              <p className="text-sm">We've received your booking request. Our team will contact you shortly to confirm.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
              >
                {services.map(service => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">Vehicle Model</label>
              <select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
              >
                {vehicles.map(vehicle => (
                  <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Smith"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">Additional Details (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us anything else about your vehicle or service preferences..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tesla-red focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary bg-tesla-red hover:bg-red-700 justify-center text-lg"
            >
              Submit Booking Request
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg p-6 text-center">
            <Calendar className="text-tesla-red mx-auto mb-3" size={32} />
            <h3 className="font-semibold mb-2">Fast Scheduling</h3>
            <p className="text-sm text-gray-600">Get confirmation within 24 hours</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <Clock className="text-tesla-red mx-auto mb-3" size={32} />
            <h3 className="font-semibold mb-2">Flexible Times</h3>
            <p className="text-sm text-gray-600">Weekend and evening appointments available</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <Phone className="text-tesla-red mx-auto mb-3" size={32} />
            <h3 className="font-semibold mb-2">Direct Support</h3>
            <p className="text-sm text-gray-600">Call us at (612) 229-5691 anytime</p>
          </div>
        </div>
      </div>
    </div>
  )
}
