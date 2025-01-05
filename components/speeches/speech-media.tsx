'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SpeechMediaProps {
  image: string;
  title: string;
  videoId?: string;
}

export function SpeechMedia({ image, title, videoId }: SpeechMediaProps) {
  if (videoId) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="aspect-video rounded-xl overflow-hidden mb-8"
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative aspect-video rounded-xl overflow-hidden mb-8"
    >
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover"
        priority
      />
    </motion.div>
  );
}