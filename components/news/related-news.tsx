'use client';

import { axiosIns } from '@/config/axios';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { NEWS } from '@/constants/routes.constants';
import { useTranslation } from '@/hooks/use-translation';
import { INewsList } from '@/interface/news-media.interface';
import { makePreviewURL } from '@/lib/utils';
import { format } from 'date-fns';
import { bn, enUS } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../language/language-context';

interface RelatedNewsProps {
	currentNewsId: string;
	category?: string;
}

export function RelatedNews({ currentNewsId, category }: RelatedNewsProps) {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [relatedNews, setRelatedNews] = useState<Array<INewsList>>([]);
	const { language } = useLanguage();
	const { t, tNumber } = useTranslation();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get(`/get-news-event-list?newsType=news&newsCategory=${category}&pageNumber=${1}&pageSize=${6}`)
			.then((resp) => {
				setRelatedNews(resp.data?.data?.filter((d: INewsList) => d?.id !== currentNewsId));
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.6 }}
			className='lg:col-span-5 lg:border-l lg:border-border/50 lg:pl-8'
		>
			<h2 className='text-2xl font-bold mb-8'>{t('relatedNews')}</h2>
			{!relatedNews?.length && (
				<span className='text-muted-foreground text-sm'>{t('noRelatedNewsFound')}</span>
			)}
			{isLoading && <ListViewSkeleton />}
			<div className='grid gap-8'>
				{relatedNews.map((item, index) => (
					<Link key={index} href={`${NEWS}${item?.id}`} className='group flex gap-4 items-start'>
						<div className='relative w-24 h-24 rounded-lg overflow-hidden shrink-0'>
							<Image
								src={
									makePreviewURL(item?.newsitem?.[0]?.thumbnail_path?.[0]?.relativepath) ||
									DEFAULT_LINKS.NOT_AVAILABLE
								}
								alt={''}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-105'
							/>
						</div>
						<div className='flex-1 min-w-0'>
							<div className='flex items-center gap-2 text-xs text-muted-foreground mb-2'>
								<span className='px-2 py-1 rounded-full bg-primary/10 text-primary capitalize'>
									{item.news_category}
								</span>
								<span className='flex items-center'>
									<Calendar className='w-3 h-3 mr-1' />
									{item?.news_type
										? tNumber(
												format(new Date(item.news_date), 'MMM d, yyyy', {
													locale: language === 'en' ? enUS : bn,
												})
										  )
										: ''}
								</span>
							</div>
							<h3 className='font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
								{language === 'en' ? item.title_en : item.content_bn}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</motion.div>
	);
}

const ListViewSkeleton: React.FC = () => {
	return (
		<div className='space-y-4'>
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index} className='flex items-center space-x-4 animate-pulse'>
					<div className='bg-gray-300 rounded-xl w-24 h-16' />
					<div className='flex-1 space-y-2'>
						<div className='h-4 bg-gray-300 rounded w-1/3' />
						<div className='h-5 bg-gray-300 rounded' />
					</div>
				</div>
			))}
		</div>
	);
};
