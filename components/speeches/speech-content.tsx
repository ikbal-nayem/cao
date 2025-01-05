'use client';

import { motion } from 'framer-motion';

interface SpeechContentProps {
  content: string;
}

export function SpeechContent({ content }: SpeechContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="prose prose-lg dark:prose-invert max-w-none mb-8"
    >
      {content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </motion.div>
  );
}