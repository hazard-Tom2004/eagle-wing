'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { GalleryImage } from '@/app/lib/getGalleryImg';

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

interface GalleryClientProps {
  sections: GallerySection[];
}

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

export default function GalleryClient({ sections }: GalleryClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<GallerySection | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
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

        {sections.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No gallery images are available yet.</p>
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
                        className={`rounded-xl overflow-hidden border border-slate-200 shadow-sm relative cursor-pointer`}
                        onClick={() => {
                          if (imgIndex === section.images.length - 1) {
                            setSelectedSection(section);
                            setModalOpen(true);
                          } else {
                            setSelectedImage(image);
                            setImageModalOpen(true);
                          }
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
    </section>
  );
}
