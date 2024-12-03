'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'World Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/World_Bank_Group_logo.png/640px-World_Bank_Group_logo.png',
    description: 'International financial institution'
  },
  {
    name: 'United Nations',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/640px-UN_emblem_blue.svg.png',
    description: 'Intergovernmental organization'
  },
  {
    name: 'Asian Development Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Asian_Development_Bank_logo.png/640px-Asian_Development_Bank_logo.png',
    description: 'Regional development bank'
  },
  {
    name: 'USAID',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/USAID-Identity.svg/640px-USAID-Identity.svg.png',
    description: 'Development assistance agency'
  }
];

const PartnersSection: FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working together with leading international organizations to drive sustainable development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-32 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{partner.name}</h3>
              <p className="text-muted-foreground text-center">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;