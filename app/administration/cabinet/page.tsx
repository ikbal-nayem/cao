'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cabinetMembers, ministryDivisions } from '@/lib/cabinet-data';

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
          <h1 className="text-4xl font-bold mb-6">Advisery Council Members</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished Advisery council members who work tirelessly to implement national policies
            and drive Bangladesh&apos;s development agenda
          </p>
        </motion.div>

        {/* Council Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Ministries & Divisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-border/50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Ministries & Divisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministryDivisions.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{ministry.name}</h3>
                {ministry.divisions && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary mb-2">Divisions:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {ministry.divisions.map((division, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{division}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}