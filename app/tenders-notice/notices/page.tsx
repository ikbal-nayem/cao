'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const notices = [
  {
    title: 'Public Notice: Administrative Reform Initiative',
    date: '2024-03-15',
    category: 'Administrative',
    description: 'Important notice regarding upcoming administrative reforms and policy changes.',
    fileSize: '1.2 MB'
  },
  {
    title: 'Notice for Public Hearing',
    date: '2024-03-10',
    category: 'Public',
    description: 'Schedule and agenda for the upcoming public hearing on development projects.',
    fileSize: '850 KB'
  },
  {
    title: 'Office Circular: New Guidelines',
    date: '2024-03-05',
    category: 'Internal',
    description: 'Updated guidelines for internal administrative procedures and protocols.',
    fileSize: '500 KB'
  }
];

export default function NoticesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Notices</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest notices, announcements, and circulars from the Chief Adviser&apos;s Office
          </p>
        </motion.div>

        <div className="space-y-6">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {notice.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{notice.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {notice.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{notice.description}</p>
                  <div className="text-sm text-muted-foreground">File size: {notice.fileSize}</div>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}