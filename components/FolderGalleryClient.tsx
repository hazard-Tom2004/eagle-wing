'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { GalleryImage } from '@/app/lib/getGalleryImg';

interface FolderGalleryClientProps {
  folderTitle: string;
  images: GalleryImage[];
}

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function FolderGalleryClient({ folderTitle, images }: FolderGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 variants={itemVariants} className="text-4xl font-black text-primary-navy mb-4">
            {folderTitle} Gallery
          </motion.h1>
          <motion.div variants={itemVariants} className="mb-6">
            <Link
              href="/gallery"
              className="inline-flex items-center px-4 py-2 bg-primary-navy text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              ← Back to Gallery
            </Link>
          </motion.div>
        </motion.div>

        {images.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No images found in this folder.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {images.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
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
                  className="w-full h-52 object-cover"
                />
                <div className="p-3 text-sm text-gray-700">{image.alt}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

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
