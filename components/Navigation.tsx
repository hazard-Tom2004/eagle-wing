'use client';

import Link from 'next/link';
import { navigationLinks, orgInfo } from '@/data/navigation';
import { useState } from 'react';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 w-full animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo/Brand */}
           <Link href="/" className="flex items-center">  
            <img
              src="/favicon.ico"
              alt="eaglewing Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="font-serif font-bold text-lg hidden sm:inline">
             Eagle Wing
            </span>
         </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#549fe5] hover:text-accent-orange hover:bg-accent-blue/10 rounded-lg transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-white hover:text-accent-orange focus:outline-none p-2 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-primary-blue/20 animate-fade-in-down">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-neutral-white/80 hover:text-accent-orange hover:bg-accent-blue/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${(index + 1) * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
