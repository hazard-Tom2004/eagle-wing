import Link from 'next/link';
import { contactInfo, orgInfo } from '@/data/navigation';

/**
 * Footer component - Shared across all pages
 * Professional design with glassmorphism effects and animations
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 bg-[#1e3a5f] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="animate-fade-in-up font-black mr-10" style={{ animationDelay: '0s' }}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[var(--color-neutral-white)]">
             {orgInfo.name}
            </h3>
            <p className="text-[var(--color-accent-blue)] text-sm mb-2">
              <em>{orgInfo.motto}</em>
            </p>
            <p className="text-[var(--color-neutral-white)] text-xs leading-relaxed">
              {orgInfo.vision}
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-semibold mb-6 text-[var(--color-neutral-white)]">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300 relative group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/trustees" className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300 relative group">
                  Trustees
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
               <li>
                <Link href="/gallery" className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300 relative group">
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300 relative group">
                  Support
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm font-semibold mb-6 text-[var(--color-neutral-white)]">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-[var(--color-neutral-white)] hover:text-[var(--color-accent-blue)] transition-all duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="text-neutral-white/90 text-xs">
                {contactInfo.address}
              </li>
            </ul>
          </div>

         
        </div>

        {/* Bottom Section */}
        <div className="text-white border-t border-[rgba(255,255,255,0.12)] pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white">
              &copy; {currentYear} {orgInfo.name}. All rights reserved.
            </p>
            <p className="text-white">
              Empowering communities through Gospel-centered transformation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
