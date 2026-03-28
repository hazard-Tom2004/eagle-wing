'use client';

import AnimatedPage from '@/components/AnimatedPage';
import { getGalleryImages, GalleryImage } from '@/app/lib/getGalleryImg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ folder: string }>;
}

export default function FolderGalleryPage({ params }: PageProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [folder, setFolder] = useState<string>('');

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      const folderName = resolvedParams.folder;
      setFolder(folderName);

      try {
        const fetchedImages = await getGalleryImages(`${folderName}/*`);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Failed to fetch gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchParams();
  }, [params]);

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedPage>
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="text-4xl font-black text-primary-navy mb-4">
              {folder.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Gallery
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

          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-600">Loading gallery images...</p>
            </div>
          ) : images.length === 0 ? (
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
                  className="rounded-xl overflow-hidden border border-slate-200 shadow-sm"
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
      </section>
    </AnimatedPage>
  );
}