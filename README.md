# Protect My Tesla - Website Rebuild

A modern, responsive website for Tesla protection services with booking, gallery, and installer directory.

## Featuresddddddd

✅ **Modern Design** - Clean, professional aesthetic with Tesla-inspired colors
✅ **Responsive** - Mobile-first design works on all devices  
✅ **Online Booking** - Customers can schedule services directly
✅ **Before/After Gallery** - Interactive image comparison slider
✅ **Testimonials** - Customer review carousel
✅ **Installer Directory** - Searchable list of certified installers
✅ **Service Pages** - Detailed information for each service
✅ **Performance** - Built with Next.js for optimal speed
✅ **SEO Ready** - Meta tags and structured data included

## Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form with Zod validation
- **Database:** Supabase (for bookings and testimonials)
- **Deployment:** Vercel (recommended for Next.js)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Project Structure

```
protectmytesla/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── book/
│   │   └── page.tsx            # Booking form
│   ├── find-installer/
│   │   └── page.tsx            # Installer directory
│   └── services/
│       ├── paint-protection-film/
│       ├── window-tint/
│       ├── vehicle-wraps/
│       └── ceramic-coating/
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCarousel.tsx
│   ├── BeforeAfterGallery.tsx
│   └── CTASection.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Hosting Options

- **Netlify:** Works great with Next.js
- **AWS Amplify:** Full-stack deployment
- **DigitalOcean:** Self-hosted option

## Key Features to Complete

1. **Database Setup**
   - Create Supabase project
   - Set up tables for bookings and testimonials
   - Connect to app

2. **Email Notifications**
   - Add SendGrid or Resend for booking confirmations
   - Set up automated emails

3. **Image Optimization**
   - Upload before/after photos to CDN
   - Update image URLs in components

4. **Analytics**
   - Add Google Analytics
   - Track conversions and user behavior

5. **Admin Dashboard**
   - Build admin panel to manage bookings
   - Add testimonial moderation

## Customization

### Colors
Edit `tailwind.config.js` to change brand colors:
```js
'tesla-red': '#E82127',
'charcoal': '#1A1A1A',
```

### Contact Info
Update in `components/Footer.tsx` and `components/Navigation.tsx`

### Services
Duplicate service pages and customize content for each

## Performance

- Image optimization with Next.js Image component
- Lazy loading for components
- CSS minification via Tailwind
- Production build optimization

## SEO

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data ready
- Mobile-friendly design

## Support

For questions about the rebuild, refer to the design system document or contact the development team.

## License

© 2024 Protect My Tesla. All rights reserved.
# CSS Fix
