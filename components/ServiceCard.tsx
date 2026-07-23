import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: LucideIcon
    href: string
    benefits: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div className="card-elevated group overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-tesla-red to-transparent" />

      <div className="p-6">
        {/* Icon */}
        <div className="w-12 h-12 bg-tesla-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tesla-red/20 transition-colors">
          <Icon className="text-tesla-red" size={24} />
        </div>

        {/* Title & Description */}
        <h3 className="heading-sm mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>

        {/* Benefits */}
        <ul className="space-y-2 mb-6">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 bg-tesla-red rounded-full" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-tesla-red font-semibold hover:gap-3 transition-all group"
        >
          Learn More
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
