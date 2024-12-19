'use client';

import { NEWS_DETAILS } from '@/constants/routes.constants';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedNewsProps {
	items: Array<{
		id: string;
		title: string;
		date: string;
		description: string;
		image: string;
		category: string;
	}>;
}

export function RelatedNews({ items }: RelatedNewsProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.6 }}
			className='lg:col-span-5 lg:border-l lg:border-border/50 lg:pl-8'
		>
			<h2 className='text-2xl font-bold mb-8'>Related News</h2>
			<div className='grid gap-8'>
				{items.map((item, index) => (
					<Link key={index} href={`${NEWS_DETAILS}${item?.id}`} className='group flex gap-4 items-start'>
						<div className='relative w-24 h-24 rounded-lg overflow-hidden shrink-0'>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-105'
							/>
						</div>
						<div className='flex-1 min-w-0'>
							<div className='flex items-center gap-2 text-xs text-muted-foreground mb-2'>
								<span className='px-2 py-1 rounded-full bg-primary/10 text-primary'>{item.category}</span>
								<span className='flex items-center'>
									<Calendar className='w-3 h-3 mr-1' />
									{format(new Date(item.date), 'MMM d, yyyy')}
								</span>
							</div>
							<h3 className='font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
								{item.title}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</motion.div>
	);
}
