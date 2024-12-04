'use client';

import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const newsItems = [
	{
		title: 'Hasina destroyed everything, Yunus tells Nikkei Asia',
		date: '2024-09-15',
		description:
			"Under Sheikh Hasina's rule, democratic principles were entirely disregarded, says Chief Adviser Dr Muhammad Yunus",
		image:
			'https://ecdn.dhakatribune.net/contents/cache/images/1100x618x1/uploads/media/2024/11/13/Yunus-COP29-health-89bf39da4d24397e9c3cb3efd84520fb.jpg',
		category: 'Politics',
	},
	{
		title: 'Committee submits White Paper on economy to Chief Adviser',
		date: '2024-12-01',
		description:
			"The committee formed by the interim government to investigate the irregularities and corruption in the country's economic sector submitted a report to Chief Adviser Professor Muhammad Yunus Sunday.",
		image:
			'https://images.prothomalo.com/prothomalo-english%2F2024-12-01%2Fgca1lfmu%2FDebapriya-YUnus.jpg?rect=72%2C0%2C588%2C392&auto=format%2Ccompress&fmt=webp&w=640&dpr=1.0',
		category: 'Economy',
	},
	{
		title: 'Chief Adviser urges people to remain calm, united',
		date: '2024-11-19',
		description:
			"Interim government's Chief Adviser Professor Muhammad Yunus Wednesday called upon the country's people to remain calm amid the ongoing situation, saying the student-people and all, including the Hindu-Muslim, irrespective of their religions must stay united.",
		image:
			'https://images.prothomalo.com/prothomalo-english%2F2024-11-28%2F3vwvibxx%2FYunus-Fakhrul.jpg?rect=21%2C0%2C680%2C453&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0',
		category: 'Politics',
	},
	{
		title: "Bangladesh's Yunus meets with Biden, other world leaders at UN",
		date: '2024-09-24',
		description:
			'U.S. President Joe Biden hugs Bangladeshi interim leader Muhammad Yunus as they meet on the sidelines of the U.N. General Assembly in New York, Sept. 24, 2024.',
		image:
			'https://images.news18.com/ibnlive/uploads/2024/09/fotojet-50-2024-09-0da3d8d4f2788ea9b60f11980e6c9d7d-16x9.jpg',
		category: 'International',
	},
	{
		title: 'Yunus to hold dialogue with political parties on Wednesday',
		date: '2024-11-17',
		description:
			'Chief Adviser Muhammad Yunus has also invited leaders of religious groups to join a dialogue with him on Thursday.',
		image:
			'https://ecdn.dhakatribune.net/contents/cache/images/1100x618x1/uploads/media/2024/11/17/Yunus-0c7111f9ecec6ff77b3c6ecd3e9016b9.jpg',
		category: 'Economy',
	},
	{
		title: 'Anti-Discrimination Student Movement to meet other student organizations',
		date: '2024-12-04',
		description: 'Meeting will follow observance of national student solidarity week.',
		image:
			'https://ecdn.dhakatribune.net/contents/cache/images/1100x618x1/uploads/media/2024/12/04/Anti-discrimination-student-movement-50fd1182a33ac67f8af385301c617fab.jpg',
		category: 'Environment',
	},
];

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
						Stay informed about the latest initiatives and developments from the Chief Advisor's Office
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
								<Button variant='outline' size='sm' className='group w-full'>
									Read More
									<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
								</Button>
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
							View All Updates
							<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default NewsSection;
