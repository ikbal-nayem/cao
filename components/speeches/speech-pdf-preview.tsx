'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';

interface SpeechPdfPreviewProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  pdfUrl: string;
}

export function SpeechPdfPreview({ isOpen, onOpenChange, title, pdfUrl }: SpeechPdfPreviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 bg-background">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="h-[80vh]">
          <object
            data={`${pdfUrl}#toolbar=0`}
            type="application/pdf"
            className="w-full h-full"
          >
            <p>Your browser does not support PDF preview.</p>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  );
}