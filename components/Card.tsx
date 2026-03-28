'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'outline';
  className?: string;
}

/**
 * Reusable Card component for displaying content in a grid
 * Used across multiple pages with glassmorphism effects
 * Supports multiple variants for different use cases
 */
const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Card({
  title,
  description,
  icon,
  children,
  variant = 'default',
  className = '',
}: CardProps) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const variantStyles = {
    default: 'glass-card hover:shadow-2xl hover:shadow-secondary/20',
    elevated: 'glass-card shadow-lg hover:shadow-xl hover:shadow-secondary/30 hover-lift',
    outline: 'glass-card border-2 border-secondary/30 hover:border-secondary/60',
  };

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      variants={cardVariants}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && (
        <h3 className="text-lg font-semibold text-primary-navy mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
