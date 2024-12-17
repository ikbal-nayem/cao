'use client';

import { pastAdvisers } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PastChiefAdvisersPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Former Chief Advisers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A chronological journey through the leadership that has shaped our nation
          </p>
        </motion.div>

        <div className="space-y-8">
          {pastAdvisers.map((adviser, index) => (
            <motion.div
              key={adviser.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={adviser.image}
                    alt={adviser.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h2 className="text-3xl font-bold">{adviser.name}</h2>
                  <p className="text-xl text-primary">{adviser.period}</p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Achievements:</h3>
                    <ul className="space-y-2">
                      {adviser.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}