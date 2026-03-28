'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AnimatedPage from '@/components/AnimatedPage';
import Card from '@/components/Card';

const supportMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

interface SupportWay {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const supportWays: SupportWay[] = [
  {
    title: 'Financial Donations',
    description:
      'Your contribution directly funds our leadership programs, entrepreneurship initiatives, and Gospel publication efforts. Every gift makes a tangible difference.',
    icon: '💝',
    details: [
      'One-time donation',
      'Monthly giving partnership',
      'Corporate sponsorship',
      'In-kind donations',
    ],
  },
  {
    title: 'Volunteering',
    description:
      'Share your skills, time, and passion. We seek volunteers for teaching, mentoring, event support, and community outreach.',
    icon: '🙋',
    details: [
      'Teaching & training',
      'Mentorship programs',
      'Event coordination',
      'Communications & design',
    ],
  },
  {
    title: 'Partnerships',
    description:
      'Organizations and churches can partner with us to amplify impact. We collaborate on programs, resources, and Gospel initiatives.',
    icon: '🤝',
    details: [
      'Church partnerships',
      'Organizational sponsorship',
      'Resource sharing',
      'Co-ministry opportunities',
    ],
  },
  {
    title: 'Prayer & Intercession',
    description:
      'Join our prayer network. Spiritual support and united intercession are foundational to all we do.',
    icon: '🙏',
    details: [
      'Daily prayer list',
      'Weekly intercession group',
      'Monthly prayer meetings',
      'Fasting & prayer initiatives',
    ],
  },
];

/**
 * Support Page (/support)
 * Details ways to support the mission and donate
 * Multiple giving options and partnership opportunities
 */
export default function Support() {
  return (
    <AnimatedPage>
      {/* Hero */}
      <HeroSection
        title="Support Our Mission"
        subtitle="Partnership in Gospel-Centered Transformation"
        description="Your support enables us to empower leaders, strengthen communities, and transform lives"
      />

      {/* Why Support Section */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="initial"
        animate="animate"
        variants={supportMotion}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-navy mb-8">Why Your Support Matters</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              At Eagles Wings, we believe that transformational impact comes through partnership. Your
              support—whether financial, relational, or spiritual—directly enables us to:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Train and equip Christian leaders for greater effectiveness</li>
              <li>Provide entrepreneurship training and resources to aspiring business owners</li>
              <li>Strengthen prayer networks and fellowship communities</li>
              <li>Develop sustainable community programs</li>
              <li>Publish and distribute Gospel materials</li>
            </ul>
            <p className="font-semibold text-primary-navy mt-6">
              When you partner with Eagles Wings, you invest in lives, communities, and eternity.
            </p>
          </div>
        </div>
      </motion.section>



      {/* Donation Section - PLACEHOLDER */}
      <motion.section
        className="bg-footer-bg text-neutral-white py-16"
        initial="initial"
        animate="animate"
        variants={supportMotion}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Make a Financial Gift</h2>

          {/* Placeholder for payment processor */}
          <div className="bg-black bg-opacity-20 border-2 border-[var(--color-accent-blue)] rounded-lg p-8 mb-6">
            <h1 className="text-sm italic text-accent-blue">Account Name: EAGLES WINGS WORLD CHANGERS OUTREACHES </h1>
            <h1 className="text-sm italic text-accent-blue">Account number: 1046803193</h1>
            <h1 className="text-sm italic text-accent-blue">Bank: FCMB</h1>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3  text-white bg-accent-orange rounded-lg font-semibold hover:bg-white hover:text-primary-navy transition inline-block"
            >
              Discuss Partnership
            </a>
           
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section className="bg-accent text-white py-16"
        initial="initial"
        animate="animate"
        variants={supportMotion}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.32 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="mb-8 text-lg">
            Contact us to discuss how you can best support this mission.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block px-8 py-3 font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </AnimatedPage>
  );
}
