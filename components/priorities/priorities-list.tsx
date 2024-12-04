'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    title: 'Digital Bangladesh Vision 2041',
    description: 'Transforming Bangladesh through digital innovation and smart governance',
    image: '/static/image/cao.jpg',
    category: 'Digital Transformation'
  },
  {
    title: 'Sustainable Development Goals',
    description: 'Implementing UN SDGs through targeted national programs and initiatives',
    image: '/static/image/cao.jpg',
    category: 'Sustainability'
  },
  {
    title: 'Smart Bangladesh Initiative',
    description: 'Building smart cities and digital infrastructure across the nation',
    image: '/static/image/cao.jpg',
    category: 'Infrastructure'
  },
  {
    title: 'Economic Empowerment Program',
    description: 'Fostering economic growth through innovative policies and reforms',
    image: '/static/image/cao.jpg',
    category: 'Economy'
  }
];

const PrioritiesList: FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50"
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {program.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrioritiesList;