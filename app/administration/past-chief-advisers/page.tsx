'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pastAdvisers = [
  {
    name: 'Justice Habibur Rahman',
    period: '1996',
    image: '/static/image/cao.jpg',
    achievements: [
      'Conducted the seventh parliamentary election',
      'Maintained law and order during the transition',
      'Ensured neutral administration'
    ]
  },
  {
    name: 'Justice Latifur Rahman',
    period: '2000-2001',
    image: '/static/image/cao.jpg',
    achievements: [
      'Organized the eighth parliamentary election',
      'Strengthened electoral process',
      'Promoted administrative transparency'
    ]
  }
];

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
          <h1 className="text-4xl font-bold mb-6">Past Chief Advisers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Honoring the legacy of past Chief Advisers who have served our nation with distinction
          </p>
        </motion.div>

        <div className="space-y-16">
          {pastAdvisers.map((adviser, index) => (
            <motion.div
              key={adviser.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={adviser.image}
                  alt={adviser.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{adviser.name}</h2>
                  <p className="text-xl text-primary">{adviser.period}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Achievements:</h3>
                  <ul className="space-y-2">
                    {adviser.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}