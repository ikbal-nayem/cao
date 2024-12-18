'use client';

import { motion } from 'framer-motion';
import { speeches } from '@/lib/data';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdviserSpeechesPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Adviser Speeches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collection of speeches and addresses by the Chief Adviser
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speeches.map((speech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/news-media/adviser-speeches/${index}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={speech.thumbnail || speech.image}
                    alt={speech.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {speech.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {speech.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {format(new Date(speech.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {speech.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2">{speech.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}