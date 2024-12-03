"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface LeadershipCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  description: string;
  index: number;
}

const LeadershipCard: FC<LeadershipCardProps> = ({ name, role, image, quote, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      
      <div className="space-y-6">
        <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
          <span className="text-primary font-medium">{role}</span>
        </div>
        
        <h3 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {name}
        </h3>
        
        <blockquote className="text-xl text-muted-foreground italic">
          "{quote}"
        </blockquote>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <Button variant="outline" size="lg" className="mt-8">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default LeadershipCard;