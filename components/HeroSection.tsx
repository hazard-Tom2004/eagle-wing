'use client';

import { motion } from 'framer-motion';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'light';
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaButtons?: CTAButton[];
  backgroundImage?: string;
  alignment?: 'center' | 'left';
}

/**
 * Hero Section component - Large banner at top of pages
 * Professional design with glassmorphism, customizable content and CTAs
 * Supports dark overlay for text readability over background images
 */
export default function HeroSection({
  title,
  subtitle,
  description,
  ctaButtons = [],
  backgroundImage,
  alignment = 'center',
}: HeroSectionProps) {
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="relative min-h-screen bg-gradient-to-br from-white via-slate-700 to-accent-blue text-white overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Decorative Glassmorphic Elements */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 glass-card rounded-full opacity-20"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2, y: [0, -12, 0] }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 glass-card rounded-full opacity-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12, x: [0, 10, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 glass-card rounded-full opacity-15"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18, y: [0, 8, 0] }}
        transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-20 pt-32 sm:px-6 lg:px-8 font-black">
        <div className={alignmentClass}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.h2
              className="text-4xl md:text-5xl mb-4 text-accent-blue font-bold"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
            >
              {subtitle}
            </motion.h2>
          )}

          {description && (
            <motion.p
              className="text-base md:text-lg mb-8 text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 ${
                alignment === 'center' ? 'justify-center' : 'justify-start'
              }`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: 'easeOut' }}
            >
              {ctaButtons.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.href}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block ${
                    button.variant === 'secondary'
                      ? 'bg-[#f76300] text-white shadow-lg'
                      : button.variant === 'light'
                      ? 'border-2 border-white text-[#1e3a5f99] hover:bg-white/20 hover:border-secondary'
                      : 'btn-primary'
                  }`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {button.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
