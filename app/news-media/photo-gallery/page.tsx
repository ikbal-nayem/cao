'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PhotoPreview } from '@/components/gallery/photo-preview';
import { PhotoGroupCard } from '@/components/gallery/photo-group-card';
import { photoGroups } from '@/lib/data';

export default function PhotoGalleryPage() {
  const [selectedGroup, setSelectedGroup] = useState<(typeof photoGroups)[0] | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

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
          {photoGroups.map((group, index) => (
            <PhotoGroupCard
              key={group.title}
              title={group.title}
              description={group.description}
              coverImage={group.coverImage}
              photoCount={group.photos.length}
              onClick={() => {
                setSelectedGroup(group);
                setSelectedPhotoIndex(0);
              }}
              index={index}
            />
          ))}
        </div>

        {selectedGroup && (
          <PhotoPreview
            isOpen={!!selectedGroup}
            onClose={() => setSelectedGroup(null)}
            photos={selectedGroup.photos}
            currentIndex={selectedPhotoIndex}
            onIndexChange={setSelectedPhotoIndex}
          />
        )}
      </div>
    </main>
  );
}