'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AnimatedPage from '@/components/AnimatedPage';
import { contactInfo } from '@/data/navigation';

const contactMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact Page (/contact)
 * Contact form and organization contact information
 * TODO: Integrate backend API to handle form submissions
 */
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'pending' | 'success' | ''>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // TODO: Replace with actual backend API endpoint
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    console.log('Form submitted:', formData);

    // Placeholder success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  return (
    <AnimatedPage>
      {/* Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle="We'd Love to Hear From You"
      />

      {/* Contact Section */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="initial"
        animate="animate"
        variants={contactMotion}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-navy mb-8">Contact Information</h2>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-navy mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-secondary hover:text-orange-600 transition text-lg break-all"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Response within 1-2 business days
                </p>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-navy mb-2">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-secondary hover:text-orange-600 transition text-lg"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Monday–Friday, 9 AM–5 PM (Local Time)
                </p>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-navy mb-2">Mailing Address</h3>
                <p className="text-gray-700 leading-relaxed">{contactInfo.address}</p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-primary-navy mb-4">Follow Us Online</h3>
                <div className="flex flex-wrap gap-6">
                  {contactInfo.socialMedia.facebook && (
                    <a
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl hover:text-secondary transition"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                  )}
                  {contactInfo.socialMedia.twitter && (
                    <a
                      href={contactInfo.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl hover:text-secondary transition"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                  )}
                  {contactInfo.socialMedia.instagram && (
                    <a
                      href={contactInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl hover:text-secondary transition"
                      aria-label="Instagram"
                    >
                      📷
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-navy mb-8">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success bg-opacity-10 border border-success rounded text-success">
                  ✓ Thank you for your message! We&apos;ll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-navy mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition bg-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary-navy mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition bg-white"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition bg-white resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 btn-primary rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-4">
                * Required fields. We respect your privacy and will only use your information to
                respond to your inquiry.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Inquiry Types Section */}
      <motion.section
        className="py-16 md:py-24 bg-light"
        initial="initial"
        animate="animate"
        variants={contactMotion}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Why are you reaching out?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-primary-navy mb-2">Partnership & Sponsorship</h3>
              <p className="text-sm text-gray-700">
                Organizations interested in collaboration and joint initiatives.
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-lg p-6">
                <h3 className="font-semibold text-primary-navy mb-2">Volunteering</h3>
              <p className="text-sm text-gray-700">
                Individuals wanting to contribute time, skills, and service.
              </p>
            </div>
            <div className="bg-white border border-accent rounded-lg p-6">
                <h3 className="font-semibold text-primary-navy mb-2">Program Participation</h3>
              <p className="text-sm text-gray-700">
                Leaders and entrepreneurs interested in our training and development programs.
              </p>
            </div>
            <div className="bg-white border border-primary rounded-lg p-6">
                <h3 className="font-semibold text-primary-navy mb-2">General Inquiry</h3>
              <p className="text-sm text-gray-700">
                Questions about our organization, mission, and work.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Response Time */}
      <motion.section
        className="bg-footer-bg text-neutral-white py-12"
        initial="initial"
        animate="animate"
        variants={contactMotion}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">We&apos;re Here to Help</h2>
          <p className="text-lg text-accent-blue/90">
            Whether you have a question, partnership proposal, or just want to say hello—we look
            forward to hearing from you and exploring how we can work together!
          </p>
        </div>
      </motion.section>
    </AnimatedPage>
  );
}
