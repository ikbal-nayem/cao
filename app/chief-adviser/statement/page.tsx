'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const statements = [
  {
    date: 'March 15, 2024',
    title: 'Statement on Digital Bangladesh Vision 2041',
    content: 'Today, we reaffirm our commitment to building a digitally empowered Bangladesh...',
    image: '/static/image/cao.jpg'
  },
  {
    date: 'March 10, 2024',
    title: 'Economic Development Initiatives',
    content: 'Our administration is launching new economic initiatives focused on sustainable growth...',
    image: '/static/image/cao.jpg'
  }
];

export default function StatementPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Official Statements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recent statements and declarations from the Chief Adviser
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-[300px]">
                  <Image
                    src={statement.image}
                    alt={statement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {statement.date}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{statement.title}</h2>
                  <p className="text-muted-foreground">{statement.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}