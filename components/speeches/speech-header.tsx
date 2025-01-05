'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

interface SpeechHeaderProps {
  title: string;
  subtitle: string;
  date: string;
  onPreviewClick: () => void;
}

export function SpeechHeader({ title, subtitle, date, onPreviewClick }: SpeechHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-1" />
          {format(new Date(date), 'MMMM d, yyyy')}
        </span>
        
        <Button 
          size="sm"
          onClick={onPreviewClick}
          className="gap-2"
        >
          <FileText className="w-4 h-4" />
          View Full Speech
        </Button>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}