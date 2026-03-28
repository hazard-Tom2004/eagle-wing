'use client';

import AnimatedPage from '@/components/AnimatedPage';
import HeroSection from '@/components/HeroSection';
import { getGalleryImages, GalleryImage } from '@/app/lib/getGalleryImg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const dynamic = 'force-dynamic';

type GallerySection = {
  key: string;
  title: string;
  date: string;
  keyword: string;
  description: string;
  folder: string;
  images: GalleryImage[];
  allImages: GalleryImage[];
};

const sectionDefinitions = [
  {
    key: 'graduation',
    title: '3rd Graduation Ceremony',
    date: 'November 4, 2024',
    keyword: 'graduation',
    folder: 'eagles_wings_graduation/*',
    description: 'Celebrating milestones and commissioning servant leaders for the next season.',
  },
  {
    key: 'youth-outreach',
    title: 'Youth Outreach',
    date: 'December 27, 2024',
    keyword: 'youth',
    folder: 'youth_outreach/*',
    description: 'A day of encouragement, training, and community support for young people.',
  },
  {
    key: 'gideon-distribution',
    title: 'Gideon Bible Distribution',
    date: 'New Members',
    keyword: 'gideon',
    folder: 'gideons_bible_distribution/*',
    description: 'Sharing scripture with our newest members as a part of spiritual growth.',
  },
];

export default function GalleryPage() {
  const [sections, setSections] = useState<GallerySection[]>(
    sectionDefinitions.map((section) => ({ ...section, images: [], allImages: [] }))
  );
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<GallerySection | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageSets = await Promise.all(
          sectionDefinitions.map((section) => getGalleryImages(section.folder))
        );

        const updatedSections: GallerySection[] = sectionDefinitions.map((section, index) => ({
          ...section,
          images: imageSets[index].slice(0, 6),
          allImages: imageSets[index],
        }));

        setSections(updatedSections);
      } catch (error) {
        console.error('Failed to fetch gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -22 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatedPage>
      <HeroSection
        title="Gallery"
        subtitle="Our Ministry Moments"
        description="Explore worship, celebration, and outreach highlights with animated movement and polished section reveals."
      />
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={sectionVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy">Live in Every Moment</h2>
              <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
                Our gallery brings every event to life with sections that slide in, cards that lift on hover, and clear visual storytelling.
              </p>
            </motion.div>
          </motion.div>

          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-600">Loading gallery images...</p>
            </div>
          ) : (
            <div className="space-y-14">
              {sections.map((section, index) => (
                <motion.section
                  key={section.key}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={sectionVariants}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  >
                    <h2 className="text-2xl font-bold text-primary-navy">{section.title}</h2>
                    <p className="text-sm text-gray-500">{section.date}</p>
                    <p className="mt-2 text-gray-600">{section.description}</p>
                  </motion.div>

                  {section.images.length === 0 ? (
                    <motion.p
                      className="text-gray-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      No images available yet for this section.
                    </motion.p>
                  ) : (
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                    >
                      {section.images.map((image, imgIndex) => (
                        <motion.div
                          key={`${section.key}-${image.id}`}
                          variants={listItemVariants}
                          whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 48px rgba(15, 23, 42, 0.16)' }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className={`rounded-xl overflow-hidden border border-slate-200 shadow-sm relative ${
                            imgIndex === section.images.length - 1 ? 'cursor-pointer group' : 'cursor-pointer'
                          }`}
                          onClick={imgIndex === section.images.length - 1 ? () => {
                            setSelectedSection(section);
                            setModalOpen(true);
                          } : () => {
                            setSelectedImage(image);
                            setImageModalOpen(true);
                          }}
                        >
                          <img
                            src={image.url}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-52 object-top"
                          />
                          {imgIndex === section.images.length - 1 && (
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View All Images
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.section>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedSection && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-primary-navy">{selectedSection.title}</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {selectedSection.allImages.map((image) => (
                  <div
                    key={image.id}
                    className="rounded-xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer"
                    onClick={() => {
                      setSelectedImage(image);
                      setImageModalOpen(true);
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-48 object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Single Image Modal */}
      {imageModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}
