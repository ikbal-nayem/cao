'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface PartnerCardProps {
  name: string;
  logo: string;
  url: string;
  index: number;
}

const PartnerCard: FC<PartnerCardProps> = ({ name, logo, url, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        href={url}
        target="_blank"
        className="block bg-card/50 backdrop-blur-sm rounded-xl p-8 hover:bg-card/80 transition-all duration-300 border border-border/50 group"
      >
        <div className="relative h-20 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-medium text-center text-foreground/80 group-hover:text-foreground">{name}</h3>
      </Link>
    </motion.div>
  );
};

export default PartnerCard;