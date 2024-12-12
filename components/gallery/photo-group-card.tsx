'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhotoGroupCardProps {
  title: string;
  description: string;
  coverImage: string;
  photoCount: number;
  onClick: () => void;
  index: number;
}

export function PhotoGroupCard({
  title,
  description,
  coverImage,
  photoCount,
  onClick,
  index,
}: PhotoGroupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
          <p className="text-sm text-blue-200 mt-2">{photoCount} photos</p>
        </div>
      </div>
    </motion.div>
  );
}