'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
  {
    year: '2006',
    title: 'Nobel Peace Prize',
    description: 'Awarded for pioneering microcredit and microfinance'
  },
  {
    year: '2009',
    title: 'Presidential Medal of Freedom',
    description: 'Highest civilian honor in the United States'
  },
  {
    year: '2013',
    title: 'Congressional Gold Medal',
    description: 'Highest civilian honor from the U.S. Congress'
  }
];

export default function NobelLaureatePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Nobel Peace Prize Laureate</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dr. Muhammad Yunus's contributions to social and economic development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://www.nobelprize.org/uploads/2018/06/yunus-photo.jpg"
                alt="Nobel Prize Ceremony"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert">
              <blockquote className="text-xl italic">
                "Poverty is not created by poor people. It's created by the system we built."
              </blockquote>
              <p>
                The Nobel Peace Prize 2006 was awarded to Muhammad Yunus and Grameen Bank
                "for their efforts to create economic and social development from below."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Major Achievements</h2>
            {achievements.map((achievement, index) => (
              <div
                key={achievement.year}
                className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="text-xl font-bold mb-2">{achievement.year}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}