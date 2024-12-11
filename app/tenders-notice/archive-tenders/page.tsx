'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, User } from 'lucide-react';

const archivedTenders = [
  {
    title: 'Office Equipment Procurement',
    reference: 'CAO/PROC/2023/001',
    publishDate: '2023-03-15',
    closingDate: '2023-04-15',
    awardDate: '2023-05-01',
    category: 'Procurement',
    awardedTo: 'ABC Technologies Ltd.',
    value: '4,500,000 BDT'
  },
  {
    title: 'Building Maintenance Services',
    reference: 'CAO/MAINT/2023/002',
    publishDate: '2023-04-10',
    closingDate: '2023-05-10',
    awardDate: '2023-05-25',
    category: 'Maintenance',
    awardedTo: 'XYZ Maintenance Co.',
    value: '2,800,000 BDT'
  }
];

export default function ArchiveTendersPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Archive Tenders</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historical record of completed tenders and their outcomes
          </p>
        </motion.div>

        <div className="space-y-8">
          {archivedTenders.map((tender, index) => (
            <motion.div
              key={tender.reference}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-lg p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {tender.category}
                  </span>
                  <span className="text-sm text-muted-foreground">Ref: {tender.reference}</span>
                </div>
                
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {tender.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Published</div>
                      <div className="text-sm text-muted-foreground">{tender.publishDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Closed</div>
                      <div className="text-sm text-muted-foreground">{tender.closingDate}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Awarded</div>
                      <div className="text-sm text-muted-foreground">{tender.awardDate}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Awarded To</div>
                      <div className="text-sm text-muted-foreground">{tender.awardedTo}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm">
                    <span className="font-medium">Contract Value:</span>{' '}
                    <span className="text-muted-foreground">{tender.value}</span>
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