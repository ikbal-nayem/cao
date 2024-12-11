'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tenders = [
  {
    title: 'Supply and Installation of IT Equipment',
    reference: 'CAO/IT/2024/001',
    publishDate: '2024-03-15',
    closingDate: '2024-04-15',
    category: 'IT Equipment',
    budget: '5,000,000 BDT',
    description: 'Tender for the supply and installation of computers, printers, and networking equipment.'
  },
  {
    title: 'Office Renovation Project',
    reference: 'CAO/CIVIL/2024/002',
    publishDate: '2024-03-10',
    closingDate: '2024-04-10',
    category: 'Construction',
    budget: '10,000,000 BDT',
    description: 'Renovation of office spaces including interior work and furniture installation.'
  }
];

export default function OpenTendersPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Open Tenders</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Current tender opportunities from the Chief Adviser&apos;s Office
          </p>
        </motion.div>

        <div className="space-y-8">
          {tenders.map((tender, index) => (
            <motion.div
              key={tender.reference}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {tender.category}
                    </span>
                    <span className="text-sm text-muted-foreground">Ref: {tender.reference}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {tender.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{tender.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                        <div className="text-sm font-medium">Closing Date</div>
                        <div className="text-sm text-muted-foreground">{tender.closingDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Estimated Budget</div>
                        <div className="text-sm text-muted-foreground">{tender.budget}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="shrink-0">View Details</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}