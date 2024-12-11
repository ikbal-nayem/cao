'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cabinetMembers = [
  {
    name: 'Dr. Muhammad Yunus',
    role: 'Chief Adviser',
    image: 'https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg',
    department: 'Office of the Chief Adviser'
  },
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

export default function CabinetPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Cabinet Members</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished cabinet members who work tirelessly to implement national policies
            and drive Bangladesh&apos;s development agenda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabinetMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-lg text-blue-200 mb-1">{member.role}</p>
                <p className="text-sm text-blue-300">{member.department}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}