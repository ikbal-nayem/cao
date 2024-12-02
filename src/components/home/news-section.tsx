'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FC } from 'react';

const newsItems = [
	{
		title: 'Committee submits White Paper on economy to Chief Adviser',
		date: 'December 1, 2024',
		description:
			'The committee formed by the interim government to investigate the irregularities and corruption in the country’s economic sector submitted a report to Chief Adviser Professor Muhammad Yunus Sunday.',
		image:
			'https://images.prothomalo.com/prothomalo-english%2F2024-12-01%2Fgca1lfmu%2FDebapriya-YUnus.jpg?rect=72%2C0%2C588%2C392&auto=format%2Ccompress&fmt=webp&w=640&dpr=1.0',
	},
	{
		title: 'Chief Adviser urges people to remain calm, united',
		date: 'November 19, 2024',
		description:
			'Interim government’s Chief Adviser Professor Muhammad Yunus Wednesday called upon the country’s people to remain calm amid the ongoing situation, saying the student-people and all, including the Hindu-Muslim, irrespective of their religions must stay united.',
		image:
			'https://images.prothomalo.com/prothomalo-english%2F2024-11-28%2F3vwvibxx%2FYunus-Fakhrul.jpg?rect=21%2C0%2C680%2C453&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0',
	},
	{
		title: 'Bangladesh’s Yunus meets with Biden, other world leaders at UN',
		date: 'September 24, 2024',
		description:
			'U.S. President Joe Biden hugs Bangladeshi interim leader Muhammad Yunus as they meet on the sidelines of the U.N. General Assembly in New York, Sept. 24, 2024.',
		image:
			'https://images.news18.com/ibnlive/uploads/2024/09/fotojet-50-2024-09-0da3d8d4f2788ea9b60f11980e6c9d7d-16x9.jpg',
	},
];

const NewsSection: FC = () => {
	return (
		<section className='py-20'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl font-bold mb-4'>Latest Updates</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Stay informed about the latest initiatives and developments from the Chief Advisor's Office
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{newsItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-white rounded-lg shadow-lg overflow-hidden'
						>
							<div
								className='h-48 bg-cover bg-center'
								style={{ backgroundImage: `url(${item.image})` }}
							></div>
							<div className='p-6'>
								<div className='text-sm text-gray-500 mb-2'>{item.date}</div>
								<h3 className='text-xl text-gray-800 font-bold mb-2'>{item.title}</h3>
								<p className='text-gray-600 mb-4'>{item.description}</p>
								<Button variant='outline'>Read More</Button>
							</div>
						</motion.div>
					))}
				</div>

				<div className='text-center mt-12'>
					<Button size='lg'>View All Updates</Button>
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
