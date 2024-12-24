'use client';

import { DEFAULT_LINKS } from '@/constants/common.constant';
import { INewsDetails } from '@/interface/news-media.interface';
import { makePreviewURL } from '@/lib/utils';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../language/language-context';

interface NewsHeaderProps {
	item: INewsDetails;
}

export function NewsHeader({ item }: NewsHeaderProps) {
	const { language } = useLanguage();

	return (
		<div className='space-y-8'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='max-w-5xl'
			>
				<div className='inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4 capitalize'>
					{item?.news_category}
				</div>
				<h1 className='text-4xl md:text-5xl font-bold mb-4'>
					{language === 'en' ? item?.title_en : item?.title_bn}
				</h1>
				<div className='flex items-center text-muted-foreground'>
					<Calendar className='w-4 h-4 mr-2' />
					{item?.news_date ? format(new Date(item?.news_date), 'MMMM d, yyyy') : ''}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className='relative aspect-video rounded-xl overflow-hidden'
			>
				<Image
					src={
						makePreviewURL(item?.newsitem?.[0]?.image_path?.[0]?.relativepath) || DEFAULT_LINKS.NOT_AVAILABLE
					}
					alt={language === 'en' ? item?.title_en : item?.newsitem?.[0]?.image_caption_bn}
					fill
					className='object-cover'
					priority
				/>
			</motion.div>
		</div>
	);
}
