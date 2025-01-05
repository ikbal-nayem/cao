'use client';

import { useState } from 'react';
import { speeches } from '@/lib/data';
import { notFound } from 'next/navigation';
import { SpeechHeader } from '@/components/speeches/speech-header';
import { SpeechMedia } from '@/components/speeches/speech-media';
import { SpeechContent } from '@/components/speeches/speech-content';
import { SpeechPdfPreview } from '@/components/speeches/speech-pdf-preview';

export default function SpeechDetailsPage({ params }: { params: { id: string } }) {
  const [isPdfPreviewOpen, setIsPdfPreviewOpen] = useState(false);
  const speech = speeches[parseInt(params.id)];

  if (!speech) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SpeechHeader
            title={speech.title}
            subtitle={speech.subtitle}
            date={speech.date}
            onPreviewClick={() => setIsPdfPreviewOpen(true)}
          />
          
          <div className="my-8">
            <SpeechMedia
              image={speech.image}
              title={speech.title}
              videoId={speech.video}
            />
          </div>

          <SpeechContent content={speech.content} />

          <SpeechPdfPreview
            isOpen={isPdfPreviewOpen}
            onOpenChange={setIsPdfPreviewOpen}
            title={speech.title}
            pdfUrl="/static/speeches/sample-speech.pdf"
          />
        </div>
      </div>
    </main>
  );
}