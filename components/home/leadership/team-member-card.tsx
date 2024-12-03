"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  organization: string;
  image: string;
  index: number;
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ name, role, organization, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground font-medium mb-1">{role}</p>
        <p className="text-sm text-muted-foreground">{organization}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;