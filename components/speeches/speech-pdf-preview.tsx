'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { makePreviewURL } from '@/lib/utils';

interface SpeechPdfPreviewProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	title?: string;
	pdfUrl?: string;
}

export function SpeechPdfPreview({ isOpen, onOpenChange, title, pdfUrl }: SpeechPdfPreviewProps) {
	if (!pdfUrl) return;

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className='max-w-5xl p-0 bg-background gap-0 border-none'>
				<DialogTitle title={title} />
				<div className='p-3 border-b'>
					<h2 className='text-xl font-semibold line-clamp-1'>{title}</h2>
				</div>
				<div className='h-[80vh]'>
					<object
						data={`${makePreviewURL(pdfUrl)}#toolbar=0`}
						type='application/pdf'
						className='w-full h-full'
					>
						<p>Your browser does not support PDF preview.</p>
					</object>
				</div>
			</DialogContent>
		</Dialog>
	);
}
