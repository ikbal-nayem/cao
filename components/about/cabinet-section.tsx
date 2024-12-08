'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cabinetMembers = [
  {
    name: 'Saifullah Panna',
    role: 'Secretary',
    image: 'https://www.shokalshondha.com/wp-content/uploads/elementor/thumbs/saifullah-panna-qua4sxivz8fekpmywgnu62hh3d9sq5q7y75i45buoo.jpg',
    department: 'Planning and Development'
  },
  {
    name: 'Dr. Mohammad Abdul Latif',
    role: 'Director General (Additional Secretary)',
    image: 'https://giupmo.gov.bd/sites/default/files/files/giupmo.portal.gov.bd/officer_list/3853365b_c5dd_41df_8a11_1567882f6d7d/2021-01-06-12-50-ed7716b5876a2b0f555faca03e4da3b4.jpg',
    department: 'Administration'
  },
];

const CabinetSection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-blue-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">The Cabinet</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished cabinet members who work tirelessly to implement
            national policies and drive Bangladesh&apos;s development agenda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cabinetMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50"
            >
              <div className="relative h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.department}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;