'use client';

import { useNewsList } from '@/api/news-media';
import { Button } from '@/components/ui/button';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { NEWS } from '@/constants/routes.constants';
import { useTranslation } from '@/hooks/use-translation';
import { INewsList } from '@/interface/news-media.interface';
import { makePreviewURL } from '@/lib/utils';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { useLanguage } from '../language/language-context';

const NewsSection: FC = () => {
	const { t } = useTranslation();
	const { language } = useLanguage();
	const { data: newsList } = useNewsList();

	return (
		<section className='py-20 bg-gradient-to-b from-background via-background/50 to-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl font-bold mb-4'>{t('latestNews')}</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>{t('latestNewsSubtitle')}</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{newsList?.pages?.map((itemGrp, grpIdx: number) => (
						<Fragment key={grpIdx}>
							{itemGrp?.data?.map((item: INewsList, index: number) => (
								<motion.div
									key={item?.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 z-10'
								>
									<div className='relative h-56'>
										<Image
											src={
												makePreviewURL(item?.newsitem?.[0]?.thumbnail_path?.[0]?.relativepath) ||
												DEFAULT_LINKS.NOT_AVAILABLE
											}
											alt={language === 'en' ? item.title_en : item.title_bn}
											fill
											className='object-cover transition-transform duration-300 group-hover:scale-105'
										/>
										<div className='absolute top-4 left-4'>
											<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm backdrop-blur-sm capitalize'>
												{item.news_category}
											</span>
										</div>
									</div>

									<div className='p-6'>
										<div className='flex items-center text-muted-foreground text-sm mb-3'>
											<Calendar className='w-4 h-4 mr-2' />
											{item?.news_date ? format(new Date(item?.news_date), 'MMMM d, yyyy') : ''}
										</div>
										<h3 className='text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
											{language === 'en' ? item.title_en : item.title_bn}
										</h3>
										<p className='text-muted-foreground mb-4 line-clamp-2'>
											{language === 'en' ? item.content_en : item.content_bn}
										</p>
										<Link href={NEWS + item?.id}>
											<Button variant='outline' size='sm' className='group w-full'>
												{t('readMore')}
												<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
											</Button>
										</Link>
									</div>
								</motion.div>
							))}
						</Fragment>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='text-center mt-12'
				>
					<Link href={NEWS}>
						<Button size='lg' className='group'>
							{t('viewMore')}
							<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default NewsSection;
