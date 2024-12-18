'use client';

import { PhotoGroupCard } from '@/components/gallery/photo-group-card';
import { PhotoPreview } from '@/components/gallery/photo-preview';
import { photoGroups } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PhotoGalleryPage() {
  const [selectedGroup, setSelectedGroup] = useState<(typeof photoGroups)[0] | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Get recent photos from all groups
  const recentPhotos = photoGroups
    .flatMap(group => group.photos.map(photo => ({
      ...photo,
      groupTitle: group.title,
      description: group.description
    })))
    .slice(0, 5);

  return (
    <main className="min-h-screen py-24">
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

        {/* Recent Photos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="aspect-[21/9] rounded-2xl overflow-hidden"
          >
            {recentPhotos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={photo.image}
                    alt={photo.groupTitle}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{photo.groupTitle}</h3>
                    <p className="text-lg text-gray-200">{photo.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Photo Groups Grid */}
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