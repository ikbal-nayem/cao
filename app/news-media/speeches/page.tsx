'use client';

import { useSpeechList } from '@/api/news-media';
import Loading from '@/components/ui/loading';
import { DATE_FORMAT, DEFAULT_LINKS } from '@/constants/common.constant';
import { ROUTES } from '@/constants/routes.constants';
import { useLanguage } from '@/context/language/language-context';
import { useTranslation } from '@/hooks/use-translation';
import { ISpeech } from '@/interface/news-media.interface';
import { makePreviewURL, makeYTThumb } from '@/lib/utils';
import { format } from 'date-fns';
import { bn, enUS } from 'date-fns/locale';
import { motion, useInView } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';

export default function AdviserSpeechesPage() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const { data: speechList, isFetching, fetchNextPage } = useSpeechList();
	const { t, tNumber } = useTranslation();
	const { language } = useLanguage();

	useEffect(() => {
		if (isInView) {
			fetchNextPage();
		}
	}, [isInView]);

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h1 className='text-4xl font-bold mb-6'>{t('menu.speeches')}</h1>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>{t('adviserSpeechSubtitle')}</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{speechList?.pages?.map((speechPage, index: number) => (
						<Fragment key={index}>
							{speechPage?.data?.map((speech: ISpeech, index: number) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='group'
								>
									<Link href={`${ROUTES.ADVISER.SPEECHES}/${speech?.id}`}>
										<div className='relative aspect-video rounded-xl overflow-hidden mb-4'>
											<Image
												src={
													makePreviewURL(speech?.thumbnail?.[0]?.relativepath) ||
													makeYTThumb(speech?.youtube_link) ||
													DEFAULT_LINKS.NOT_AVAILABLE
												}
												alt={speech?.title_bn}
												fill
												className='object-cover transition-transform duration-300 group-hover:scale-105'
											/>
											{speech?.youtube_link && (
												<div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity'>
													<div className='w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center'>
														<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
															<path d='M8 5v14l11-7z' />
														</svg>
													</div>
												</div>
											)}
										</div>
										<div>
											<div className='flex items-center gap-4 text-sm text-muted-foreground mb-2'>
												<span className='flex items-center'>
													<Calendar className='w-4 h-4 mr-1' />
													{tNumber(
														format(new Date(speech?.speech_date), DATE_FORMAT.CASUAL, {
															locale: language === 'bn' ? bn : enUS,
														})
													)}
												</span>
											</div>
											<h2 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2'>
												{language === 'bn' ? speech.title_bn : speech.title_en}
											</h2>
											{/* <p className='text-muted-foreground line-clamp-2'>{speech.subtitle}</p> */}
										</div>
									</Link>
								</motion.div>
							))}
						</Fragment>
					))}
				</div>
				<div ref={ref} />
				{isFetching && <Loading />}
			</div>
		</main>
	);
}
