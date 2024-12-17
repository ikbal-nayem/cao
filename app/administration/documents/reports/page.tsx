'use client';

import { motion } from 'framer-motion';
import { FileText, Download, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reports = [
  {
    title: 'Annual Performance Report 2023',
    date: '2024-03-15',
    description: "Comprehensive report on the performance and achievements of the Chief Adviser's Office.",
    fileSize: '5.2 MB',
    category: 'Annual Report'
  },
  {
    title: 'Economic Indicators Q1 2024',
    date: '2024-03-10',
    description: 'Statistical analysis of key economic indicators and trends.',
    fileSize: '2.8 MB',
    category: 'Statistics'
  },
  {
    title: 'Development Projects Status Report',
    date: '2024-03-05',
    description: 'Status update on ongoing development projects and initiatives.',
    fileSize: '4.1 MB',
    category: 'Development'
  }
];

export default function ReportsStatsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Reports & Statistics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access official reports, statistics, and performance indicators
          </p>
        </motion.div>

        <div className="space-y-6">
          {reports.map((report, index) => (
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
                      {report.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{report.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary" />
                    {report.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{report.description}</p>
                  <div className="text-sm text-muted-foreground">File size: {report.fileSize}</div>
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