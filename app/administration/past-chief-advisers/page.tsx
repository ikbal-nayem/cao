'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pastAdvisers = [
	{
		name: 'Md. Habibur Rahman',
		period: '1996',
		image:
			'https://images.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2015%2F01%2F30%2F5ab4c0b9af1e1d245ff16fe8c9c02ca4-Habibur-Rahman.jpg',
		achievements: [
			'Conducted the seventh parliamentary election',
			'Maintained law and order during the transition',
			'Ensured neutral administration',
		],
	},
	{
		name: 'Latifur Rahman',
		period: '2001',
		image: 'https://upload.wikimedia.org/wikipedia/en/2/25/Latifur_Rahman_%28chief_justice%29.jpg',
		achievements: [
			'Organized the eighth parliamentary election',
			'Strengthened electoral process',
			'Promoted administrative transparency',
		],
	},
	{
		name: 'Iajuddin Ahmed',
		period: '2006-2007',
		image: 'https://convocation.daffodilvarsity.edu.bd/images/message/97ba4c388d350bf7c882f5d0dfa1fb3a.webp',
		achievements: [
			'Organized the eighth parliamentary election',
			'Strengthened electoral process',
			'Promoted administrative transparency',
		],
	},
	{
		name: 'Fazlul Haque',
		period: '2007',
		image: 'https://tds-images.thedailystar.net/sites/default/files/customphp/photo/2008/04/14/2008-04-14__front01.jpg',
		achievements: [
			'Organized the eighth parliamentary election',
			'Strengthened electoral process',
			'Promoted administrative transparency',
		],
	},
	{
		name: 'Fakhruddin Ahmed',
		period: '2007-2009',
		image: 'https://worldleaders.columbia.edu/sites/default/files/styles/cu_crop/public/content/ahmed.JPG',
		achievements: [
			'Organized the eighth parliamentary election',
			'Strengthened electoral process',
			'Promoted administrative transparency',
		],
	},
	{
		name: 'Muhammad Yunus',
		period: '2024',
		image: 'https://cdn.bdnews24.com/bdnews24/media/bangla/imgAll/2024August/muhammad-yunus-250824-02-1724594325.jpg',
		achievements: [
			'Organized the eighth parliamentary election',
			'Strengthened electoral process',
			'Promoted administrative transparency',
		],
	},
];

export default function PastChiefAdvisersPage() {
	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h1 className='text-4xl font-bold mb-6'>Past Chief Advisers</h1>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Honoring the legacy of past Chief Advisers who have served our nation with distinction
					</p>
				</motion.div>

				<div className='space-y-16'>
					{pastAdvisers.map((adviser, index) => (
						<motion.div
							key={adviser.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'
						>
							<div className='relative h-[400px] rounded-2xl overflow-hidden'>
								<Image src={adviser.image} alt={adviser.name} fill className='object-cover' />
							</div>

							<div className='space-y-6'>
								<div>
									<h2 className='text-3xl font-bold mb-2'>{adviser.name}</h2>
									<p className='text-xl text-primary'>{adviser.period}</p>
								</div>

								<div className='space-y-4'>
									<h3 className='text-xl font-semibold'>Key Achievements:</h3>
									<ul className='space-y-2'>
										{adviser.achievements.map((achievement, i) => (
											<li key={i} className='flex items-start gap-2'>
												<span className='text-primary'>•</span>
												<span className='text-muted-foreground'>{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
}
