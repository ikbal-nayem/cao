'use client';

import { Button } from '@/components/ui/button';
import { newsItems } from '@/lib/data';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const NewsSection: FC = () => {
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
					<h2 className='text-4xl font-bold mb-4'>Latest Updates</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Stay informed about the latest initiatives and developments from the Chief Adviser's Office
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{newsItems.slice(0, 6).map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300'
						>
							<div className='relative h-56'>
								<Image
									src={item.image}
									alt={item.title}
									fill
									className='object-cover transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute top-4 left-4'>
									<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm backdrop-blur-sm'>
										{item.category}
									</span>
								</div>
							</div>

							<div className='p-6'>
								<div className='flex items-center text-muted-foreground text-sm mb-3'>
									<Calendar className='w-4 h-4 mr-2' />
									{format(new Date(item.date), 'MMMM d, yyyy')}
								</div>
								<h3 className='text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
									{item.title}
								</h3>
								<p className='text-muted-foreground mb-4 line-clamp-2'>{item.description}</p>
								<Link href={'/news/' + index}>
									<Button variant='outline' size='sm' className='group w-full'>
										Read More
										<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
									</Button>
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='text-center mt-12'
				>
					<Link href='/news'>
						<Button size='lg' className='group'>
							View More
							<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default NewsSection;
