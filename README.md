# Eagles Wings World Changers Outreach - Next.js Website

## Project Overview

A modern, responsive website for **Eagles Wings World Changers Outreach**, a faith-based international non-profit committed to Gospel-centered spiritual and economic empowerment.

**Organization Details:**
- **Name:** Eagles Wings World Changers Outreach
- **Motto:** Soaring on Eagles Wings
- **Vision:** Changing the World through the Gospel of Empowerment (Spiritual and Economic Empowerment)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Colors:**
  - Primary: Forest Green (#1B4332)
  - Secondary: Earth Brown (#7F5539)
  - Accent: Cream (#F1E9DA)
  - Highlight: Mustard (#E09F3E)

## Project Structure

```
eagle-wing/
├── app/
│   ├── layout.js              # Root layout with Navigation & Footer
│   ├── page.js                # Home page
│   ├── globals.css            # Global styles
│   ├── about/
│   │   └── page.js            # About Us page
│   ├── trustees/
│   │   └── page.js            # Trustees/Leadership page
│   ├── support/
│   │   └── page.js            # Support & Donations page
│   └── contact/
│       └── page.js            # Contact form page
├── components/
│   ├── Navigation.js          # Header with navigation links
│   ├── Footer.js              # Footer component
│   ├── HeroSection.js         # Reusable hero banner
│   └── Card.js                # Reusable card component
├── data/
│   ├── trustees.js            # Mock trustee data
│   ├── missionAreas.js        # Mission areas data
│   └── navigation.js          # Navigation links & org info
├── public/                    # Static assets (images, etc.)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Pages

### 1. **Home Page** (`/`)
- Hero section with organization name, motto, and CTA buttons
- Vision and mission overview
- 5 mission areas highlighted in cards
- Call-to-action section

### 2. **About Us Page** (`/about`)
- Organization overview
- Vision and mission sections
- 6 core values displayed in cards
- Brief history
- Community engagement CTA

### 3. **Trustees Page** (`/trustees`)
- Grid of 5 trustees with:
  - Name
  - Role/Title
  - Short biography
  - Placeholder avatar
- Leadership philosophy section

### 4. **Support Page** (`/support`)
- Explanation of why support matters
- 4 ways to support (donations, volunteering, partnerships, prayer)
- Placeholder for payment processor integration
- Transparency & stewardship information

### 5. **Contact Page** (`/contact`)
- Functional contact form with fields:
  - Name
  - Email
  - Subject
  - Message
- Contact information displayed
- Social media links
- Inquiry type categories

## Features

✓ **Responsive Design** - Mobile-first, fully responsive layout
✓ **Semantic HTML** - Proper use of semantic elements for accessibility
✓ **Reusable Components** - Navigation, Footer, Card, HeroSection
✓ **Mock Data** - All dynamic content uses mock/sample data for easy replacement
✓ **Clean Code** - Well-organized, commented, and maintainable
✓ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
✓ **Faith-Driven Content** - Professional yet hopeful and Gospel-centered tone
✓ **Color Scheme** - Custom Tailwind colors reflecting organizational branding

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the website.

## TODO & Integration Points

### Backend Integration
- [ ] **Contact Form** → Connect to backend API (`/api/contact`)
- [ ] **Donations** → Integrate payment processor (Stripe, PayPal)
- [ ] **Email Notifications** → Setup transactional email service

### Content & Data
- [ ] Replace mock trustee data with real information and photos
- [ ] Add real organization history
- [ ] Update contact information with actual details
- [ ] Add real images (hero backgrounds, team photos, etc.)
- [ ] Add testimonials and success stories
- [ ] Add event listings or blog section

### Features to Add
- [ ] Newsletter signup
- [ ] Event calendar
- [ ] Blog/News section
- [ ] Prayer request submission form
- [ ] Member dashboard
- [ ] Volunteer application form

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | #1B4332 | Primary buttons, headings, navigation |
| Earth Brown | #7F5539 | Secondary elements, hover states |
| Cream | #F1E9DA | Background, text on dark backgrounds |
| Mustard | #E09F3E | Highlights, accent elements, CTAs |

## Component Documentation

### Navigation Component
Sticky header with responsive mobile menu. Branding, logo, and navigation links.

### Footer Component
Multi-column footer with organization info, quick links, contact details, and social media.

### HeroSection Component
Large banner with customizable title, subtitle, and CTA buttons. Optional background image.

### Card Component
Reusable card for displaying content with optional icon, title, and description.

## Best Practices Implemented

- ✓ Clean, readable code with comments
- ✓ CSS-in-JS approach with Tailwind
- ✓ Server and client components appropriately used
- ✓ Mock data centralized in `/data` folder
- ✓ Reusable components to reduce duplication
- ✓ Responsive design with mobile-first approach
- ✓ Semantic HTML for better accessibility
- ✓ No over-engineering—kept ministry-friendly and maintainable

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted Node.js server**

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## License

This website is created for Eagles Wings World Changers Outreach. All rights reserved.

---

**Last Updated:** February 2026
**Built with faith for Gospel transformation** 🦅
