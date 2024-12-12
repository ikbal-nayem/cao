'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

const videoGroups = [
  {
    title: 'Speeches & Addresses',
    description: 'Official speeches and public addresses by the Chief Adviser',
    videos: [
      {
        title: 'Chief Adviser\'s Address to the Nation',
        thumbnail: '/static/image/cao.jpg',
        duration: '10:30',
        date: '2024-03-15',
        videoId: 'VIDEO_ID_1'
      },
      {
        title: 'Independence Day Speech',
        thumbnail: '/static/image/cao.jpg',
        duration: '15:45',
        date: '2024-03-26',
        videoId: 'VIDEO_ID_2'
      }
    ]
  },
  {
    title: 'Government Activities',
    description: 'Coverage of key government initiatives and activities',
    videos: [
      {
        title: 'Cabinet Meeting Highlights',
        thumbnail: '/static/image/cao.jpg',
        duration: '5:45',
        date: '2024-03-10',
        videoId: 'VIDEO_ID_3'
      },
      {
        title: 'Development Projects Overview',
        thumbnail: '/static/image/cao.jpg',
        duration: '8:20',
        date: '2024-03-05',
        videoId: 'VIDEO_ID_4'
      }
    ]
  },
  {
    title: 'International Events',
    description: 'International meetings and diplomatic events',
    videos: [
      {
        title: 'UN General Assembly Speech',
        thumbnail: '/static/image/cao.jpg',
        duration: '12:15',
        date: '2024-03-20',
        videoId: 'VIDEO_ID_5'
      },
      {
        title: 'Climate Conference Address',
        thumbnail: '/static/image/cao.jpg',
        duration: '9:30',
        date: '2024-03-18',
        videoId: 'VIDEO_ID_6'
      }
    ]
  }
];

export default function VideoGalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    videoId: string;
  } | null>(null);

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

        {videoGroups.map((group, groupIndex) => (
          <div key={group.title} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">{group.title}</h2>
              <p className="text-muted-foreground">{group.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.videos.map((video, videoIndex) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (groupIndex + videoIndex) * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo({ title: video.title, videoId: video.videoId })}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
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

                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{video.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedVideo && (
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}