'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const policies = [
  {
    title: 'National Digital Security Policy 2024',
    date: '2024-03-15',
    description: 'Comprehensive policy framework for ensuring digital security and cybersecurity measures.',
    fileSize: '2.5 MB',
    category: 'Digital Security'
  },
  {
    title: 'Administrative Reform Guidelines 2024',
    date: '2024-03-10',
    description: 'Guidelines for implementing administrative reforms across government departments.',
    fileSize: '1.8 MB',
    category: 'Administration'
  },
  {
    title: 'Public Service Innovation Policy',
    date: '2024-03-05',
    description: 'Policy framework for promoting innovation in public service delivery.',
    fileSize: '3.2 MB',
    category: 'Innovation'
  }
];

export default function PolicyDocumentsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Policy Documents</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access official policy documents and guidelines issued by the Chief Adviser's Office
          </p>
        </motion.div>

        <div className="space-y-6">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {policy.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{policy.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {policy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{policy.description}</p>
                  <div className="text-sm text-muted-foreground">File size: {policy.fileSize}</div>
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