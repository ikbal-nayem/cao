'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { IFile } from '@/interface/common.interface';
import { makePreviewURL } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface PhotoPreviewProps {
	isOpen: boolean;
	onClose: () => void;
	caption: string;
	photos: IFile[];
	currentIndex: number;
	onIndexChange: (index: number) => void;
}

export function PhotoPreview({
	isOpen,
	onClose,
	caption,
	photos,
	currentIndex,
	onIndexChange,
}: PhotoPreviewProps) {
	const handlePrevious = () => {
		onIndexChange(currentIndex > 0 ? currentIndex - 1 : photos.length - 1);
	};

	const handleNext = () => {
		onIndexChange(currentIndex < photos.length - 1 ? currentIndex + 1 : 0);
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='border-none max-w-7xl p-0 overflow-hidden bg-background/20 backdrop-blur-md'>
				<div className='relative'>
					<div className='relative h-[70vh]'>
						<Image
							src={makePreviewURL(photos[currentIndex]?.relativepath) || DEFAULT_LINKS.NOT_AVAILABLE}
							alt='Preview'
							fill
							className='object-cover'
						/>
						<button
							className='absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors'
							onClick={onClose}
						>
							<X className='w-6 h-6' />
						</button>
					</div>

					<p className='text-background px-5'>{caption}</p>

					<div className='p-5'>
						<div className='grid grid-cols-6 gap-3'>
							{photos.map((photo, index) => (
								<div
									key={index}
									className={`relative aspect-[2/1] rounded-lg overflow-hidden cursor-pointer transition-all ${
										index === currentIndex ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
									}`}
									onClick={() => onIndexChange(index)}
								>
									<Image
										src={makePreviewURL(photo.relativepath) || DEFAULT_LINKS.NOT_AVAILABLE}
										alt={`Thumbnail ${index + 1}`}
										fill
										className='object-cover'
									/>
								</div>
							))}
						</div>
					</div>

					<div className='absolute top-1/2 -translate-y-1/2 left-4'>
						<Button
							variant='outline'
							size='icon'
							className='rounded-full bg-black/50 border-white/20 hover:bg-black/70'
							onClick={(e) => {
								e.stopPropagation();
								handlePrevious();
							}}
						>
							<ChevronLeft className='w-6 h-6 text-white' />
						</Button>
					</div>
					<div className='absolute top-1/2 -translate-y-1/2 right-4'>
						<Button
							variant='outline'
							size='icon'
							className='rounded-full bg-black/50 border-white/20 hover:bg-black/70'
							onClick={(e) => {
								e.stopPropagation();
								handleNext();
							}}
						>
							<ChevronRight className='w-6 h-6 text-white' />
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
