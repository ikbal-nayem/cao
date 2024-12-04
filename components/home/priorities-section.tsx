'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const priorities = [
	{
		title: 'Social Security Policy Support (SSPS) Programme',
		description: 'This program is supported by DFAT/DFID/UNDP and the Cabinet Division and the General Economics Division of the Planning Commission. It has two components: governance of social security and strengthening of delivery systems.',
		image: 'https://socialprotection.gov.bd/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-10.09.26-scaled.jpeg',
		category: 'Digital Transformation',
	},
	{
		title: 'Social safety net programs',
		description: 'The Ministry of Social Welfare runs a number of social safety net programs, including the old age allowance program and the disable allowance.',
		image: 'https://nassp.gov.ng/wp-content/uploads/2021/10/social-protection-e1617219307663.jpg',
		category: 'Sustainability',
	},
	{
		title: "Public Private Partnership Authority (PPP) Projects",
		description: 'Construction of Dhaka-Elevated Expressway.',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcp-7vrKlnT9_5_W0MPYtHmfGaFLIjb0YFg&s',
		category: 'Infrastructure',
	},
	{
		title: 'Interest subsidies',
		description: 'These subsidies are for small scale industry and service sector enterprises affected by Covid-19.',
		image: '/static/image/cao.jpg',
		category: 'Economy',
	},
];

const PrioritiesSection: FC = () => {
	return (
		<section className='relative py-24 overflow-hidden'>
			<div className='absolute inset-0'>
				<Image src='/static/image/cao.jpg' alt='' fill className='object-cover opacity-20' />
				<div className='absolute inset-0 bg-gradient-to-r from-background via-background/10 to-background' />
			</div>

			<div className='container relative mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl font-bold mb-6'>Priority Programs</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Key initiatives driving Bangladesh&apos;s development and progress
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{priorities.slice(0, 4).map((priority, index) => (
						<motion.div
							key={priority.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className='group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300'
						>
							<div className='relative h-48'>
								<Image
									src={priority.image}
									alt={priority.title}
									fill
									className='object-cover transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute top-4 left-4'>
									<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm'>
										{priority.category}
									</span>
								</div>
							</div>

							<div className='p-6'>
								<h3 className='text-xl font-bold mb-2 line-clamp-1'>{priority.title}</h3>
								<p className='text-muted-foreground mb-4 text-sm line-clamp-2'>{priority.description}</p>
								<Button variant='outline' size='sm' className='group w-full'>
									Learn More
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
					<Link href='/priorities'>
						<Button size='lg' className='group'>
							View All Programs
							<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default PrioritiesSection;
