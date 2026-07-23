'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'John Smith',
      vehicle: 'Tesla Model 3',
      text: 'The paint protection film has kept my Tesla looking brand new. Highly recommend!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Sarah Johnson',
      vehicle: 'Tesla Model Y',
      text: 'Professional installation and amazing results. The ceramic coating has made maintenance so easy.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Mike Davis',
      vehicle: 'Tesla Model S',
      text: 'Best investment I made for my car. The window tint looks incredible and keeps the interior cool.',
      rating: 5,
      image: '👨‍🔧',
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-container bg-charcoal text-white">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">What Tesla Owners Say</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Join thousands of satisfied customers who have protected their Tesla investment with us.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Cards */}
        <div className="relative h-64 md:h-56">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-500 ${
                idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="bg-gray-900 rounded-lg p-8 h-full flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-tesla-red text-tesla-red" size={16} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prev}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? 'bg-tesla-red w-8' : 'bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
