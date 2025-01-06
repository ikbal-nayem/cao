'use client';

import { DEFAULT_LINKS } from '@/constants/common.constant';
import { makePreviewURL } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SpeechMediaProps {
	image?: string;
	title?: string;
	video?: string;
}

export function SpeechMedia({ image, title, video }: SpeechMediaProps) {
	if (video) {
		const videoId = video.split('v=')?.[1];
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className='aspect-video rounded-xl overflow-hidden mb-8'
			>
				<iframe
					width='100%'
					height='100%'
					src={`https://www.youtube.com/embed/${videoId}?color=white&modestbranding=1`}
					title={title}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					className='w-full h-full'
				/>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className='relative aspect-video rounded-xl overflow-hidden mb-8'
		>
			<Image
				src={makePreviewURL(image) || DEFAULT_LINKS.NOT_AVAILABLE}
				alt={title || ''}
				fill
				className='object-cover'
				priority
			/>
		</motion.div>
	);
}
