'use client';

import PageTitle from '@/components/layout/page-title';
import { useTranslation } from '@/hooks/use-translation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const quotes = [
	{
		text: "Poverty is not created by poor people. It's created by the system we built.",
		context: 'Nobel Peace Prize Lecture, 2006',
		image: 'https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg',
	},
	{
		text: 'All human beings are born entrepreneurs. Some get a chance to unleash that capacity. Some never got the chance, never knew that he or she has that capacity.',
		context: 'Building Social Business, 2010',
		image: '/static/image/cao.jpg',
	},
	{
		text: 'Making money is happiness; making other people happy is super happiness.',
		context: 'Creating a World Without Poverty, 2007',
		image: '/static/image/cao.jpg',
	},
];

export default function QuotesPage() {
	const { t } = useTranslation();

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('quotesTitle')} subTitle={t('quotesSubTitle')} />

				<div className='max-w-4xl mx-auto space-y-12'>
					{quotes.map((quote, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all'
						>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='relative h-[300px]'>
									<Image src={quote.image} alt='Dr. Muhammad Yunus' fill className='object-cover' />
								</div>
								<div className='p-6 flex flex-col justify-center'>
									<blockquote className='text-xl italic mb-4'>"{quote.text}"</blockquote>
									<p className='text-muted-foreground'>{quote.context}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
}
