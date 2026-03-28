'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AnimatedPage from '@/components/AnimatedPage';
import { trustees } from '@/data/trustees';

const sectionMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Trustees Page (/trustees)
 * Displays board members and leadership team
 * Modern grid layout with professional card design
 */
export default function Trustees() {
  return (
    <AnimatedPage>
      {/* Hero */}
      <HeroSection
        title="Our Leadership"
        subtitle="Meet the Trustees Guiding Our Mission"
        description="Experienced leaders dedicated to Gospel-centered transformation and community empowerment"
      />

      {/* Leadership Section */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="initial"
        animate="animate"
        variants={sectionMotion}
        transition={{ duration: 0.48, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-primary-navy mb-4">Our Trustees</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deeply committed to the Gospel and to empowering communities, our trustees bring diverse
              expertise, experience, and passion to guide Eagles Wings&apos; mission.
            </p>
          </div>

          {/* Trustees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee) => (
              <div
                key={trustee.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                {/* Trustee Image */}
                <div className="w-full h-64 overflow-hidden bg-gray-100">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Trustee Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-navy mb-1">{trustee.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{trustee.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{trustee.email}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{trustee.phone}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Leadership Section */}
      <motion.section
        className="py-16 md:py-24 bg-light"
        initial="initial"
        animate="animate"
        variants={sectionMotion}
        transition={{ duration: 0.48, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-navy mb-6">Leadership Philosophy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Our trustees represent a diverse range of backgrounds, experiences, and expertise, united
              by a common commitment to serving God&apos;s kingdom and advancing our mission. Each brings
              unique perspectives that enrich our strategy and broaden our impact.
            </p>
            <p>
              We believe in <strong>servant leadership</strong>—leaders who lead by example,
              demonstrate integrity, and prioritize the welfare of those we serve. Our governance is
              grounded in transparency, accountability, and a deep respect for the communities and
              individuals we partner with.
            </p>
            <p>
              Together, our trustees provide strategic direction, organizational wisdom, and a steadfast
              commitment to ensuring that every resource, partnership, and initiative advances our
              Gospel-centered mission of empowerment.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-footer-bg text-neutral-white py-12"
        initial="initial"
        animate="animate"
        variants={sectionMotion}
        transition={{ duration: 0.48, ease: 'easeOut', delay: 0.18 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More About Our Leadership?</h2>
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </motion.section>
    </AnimatedPage>
  );
}
