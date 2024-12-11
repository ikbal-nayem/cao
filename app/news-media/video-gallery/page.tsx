'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Chief Adviser&apos;s Address to the Nation',
    date: '2024-03-15',
    thumbnail: '/static/image/cao.jpg',
    duration: '10:30',
    category: 'Speeches'
  },
  {
    title: 'Cabinet Meeting Highlights',
    date: '2024-03-10',
    thumbnail: '/static/image/cao.jpg',
    duration: '5:45',
    category: 'Government'
  },
  {
    title: 'Development Projects Overview',
    date: '2024-03-05',
    thumbnail: '/static/image/cao.jpg',
    duration: '15:20',
    category: 'Development'
  }
];

export default function VideoGalleryPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Video Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch key speeches, events, and initiatives from the Chief Adviser&apos;s Office
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black/70 text-white text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}