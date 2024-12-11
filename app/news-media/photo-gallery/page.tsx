'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  {
    title: 'Meeting with World Leaders',
    date: '2024-03-15',
    image: '/static/image/cao.jpg',
    category: 'International Relations'
  },
  {
    title: 'Cabinet Meeting',
    date: '2024-03-10',
    image: '/static/image/cao.jpg',
    category: 'Government'
  },
  {
    title: 'Public Address',
    date: '2024-03-05',
    image: '/static/image/cao.jpg',
    category: 'Events'
  }
];

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual journey through key moments and events of the Chief Adviser&apos;s Office
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-300">{photo.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}