'use client';

import { useLanguage } from '@/components/language/language-context';
import { SpeechHeader } from '@/components/speeches/speech-header';
import { SpeechMedia } from '@/components/speeches/speech-media';
import { SpeechPdfPreview } from '@/components/speeches/speech-pdf-preview';
import { ISpeech } from '@/interface/news-media.interface';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { axiosIns } from '@/config/axios';

export default function SpeechDetailsPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	const [speech, setSpeech] = useState<ISpeech>();
	const [isLoading, setLoading] = useState(true);
	const [isPdfPreviewOpen, setIsPdfPreviewOpen] = useState(false);
	const { language } = useLanguage();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get('/get-advisor-speech-by-id?id=' + id)
			.then((resp) => setSpeech(resp.data))
			.finally(() => setLoading(false));
	}, [id]);

	if (!isLoading && !speech) {
		notFound();
	}

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<SpeechHeader
						title={language === 'en' ? speech?.title_en : speech?.title_bn}
						// subtitle={speech.subtitle}
						date={speech?.speech_date}
						onPreviewClick={() => setIsPdfPreviewOpen(true)}
					/>

					<div className='my-8'>
						<SpeechMedia
							image={speech?.thumbnail?.[0]?.relativepath}
							title={language === 'en' ? speech?.title_en : speech?.title_bn}
							video={speech?.youtube_link}
						/>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='prose prose-lg dark:prose-invert max-w-none mb-8'
					>
						<div
							dangerouslySetInnerHTML={{
								__html: (language === 'en' ? speech?.speech_en : speech?.speech_bn) || '',
							}}
						/>
					</motion.div>

					<SpeechPdfPreview
						isOpen={isPdfPreviewOpen}
						onOpenChange={setIsPdfPreviewOpen}
						title={language === 'en' ? speech?.title_en : speech?.title_bn}
						pdfUrl={speech?.document?.[0]?.relativepath}
					/>
				</div>
			</div>
		</main>
	);
}
