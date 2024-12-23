'use client';

import { useNewsList } from '@/api/news-media';
import { Button } from '@/components/ui/button';
import { NEWS } from '@/constants/routes.constants';
import { INewsList } from '@/interface/news-media.interface';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsList() {
	const { data: newsList } = useNewsList();

	return (
		<section className='py-20'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{newsList?.map((item: INewsList, index: number) => (
						<motion.div
							key={item?.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300'
						>
							<div className='relative h-56'>
								<Image
									src={item?.newsitem?.[0]?.thumbnail_path?.[0]?.filepath}
									alt={item.title_en}
									fill
									className='object-cover transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute top-4 left-4'>
									<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm backdrop-blur-sm'>
										{item.news_type}
									</span>
								</div>
							</div>

							<div className='p-6'>
								<div className='flex items-center text-muted-foreground text-sm mb-3'>
									<Calendar className='w-4 h-4 mr-2' />
									{format(new Date(item.news_date), 'MMMM d, yyyy')}
								</div>
								<h3 className='text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
									{item.title_en}
								</h3>
								<p className='text-muted-foreground mb-4 line-clamp-2'>{item.content_en}</p>
								<Link href={NEWS + item?.id}>
									<Button variant='outline' size='sm' className='group w-full'>
										Read More
										<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
									</Button>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
