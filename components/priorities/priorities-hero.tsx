'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PrioritiesHero: FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/static/image/cao.jpg"
          alt="Office Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Programs
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the key initiatives and programs driving Bangladesh&apos;s
            development agenda under the leadership of the Chief Advisor&apos;s Office
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrioritiesHero;