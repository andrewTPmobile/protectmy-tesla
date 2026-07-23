'use client'

import { useState } from 'react'

export default function BeforeAfterGallery() {
  const [activeGallery, setActiveGallery] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const galleries = [
    {
      title: 'Paint Protection Film',
      before: 'https://images.unsplash.com/photo-1609010856879-2fb620ca4cba?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1606611013016-969c19d4018c?w=400&h=300&fit=crop',
    },
    {
      title: 'Ceramic Coating',
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
    },
    {
      title: 'Window Tint',
      before: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1609010856879-2fb620ca4cba?w=400&h=300&fit=crop',
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const current = galleries[activeGallery]

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">See the Transformation</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Before and after results from our professional installations. Drag the slider to see the difference.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Before/After Slider */}
        <div
          className="relative h-96 rounded-lg overflow-hidden cursor-col-resize bg-gray-200"
          onMouseMove={handleMouseMove}
          onTouchMove={(e) => {
            const touch = e.touches[0]
            const rect = e.currentTarget.getBoundingClientRect()
            const newPosition = ((touch.clientX - rect.left) / rect.width) * 100
            setSliderPosition(Math.max(0, Math.min(100, newPosition)))
          }}
        >
          {/* Before Image */}
          <div className="absolute inset-0 bg-gray-300">
            <div className="w-full h-full bg-center bg-cover opacity-70">
              Before
            </div>
          </div>

          {/* After Image */}
          <div
            className="absolute inset-0 overflow-hidden transition-all duration-100"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="w-full h-full bg-center bg-cover">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-tesla-red cursor-col-resize transition-all duration-100"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tesla-red text-white rounded-full p-2 shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal text-white text-sm rounded font-semibold">
            Before
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-tesla-red text-white text-sm rounded font-semibold">
            After
          </div>
        </div>

        {/* Gallery Selector */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {galleries.map((gallery, idx) => (
            <button
              key={idx}
              onClick={() => setActiveGallery(idx)}
              className={`p-4 rounded-lg font-semibold transition-all ${
                idx === activeGallery
                  ? 'bg-tesla-red text-white shadow-lg'
                  : 'bg-light-gray text-charcoal hover:bg-gray-300'
              }`}
            >
              {gallery.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
