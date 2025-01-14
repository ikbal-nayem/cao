'use client';

import PageTitle from '@/components/layout/page-title';
import { useTranslation } from '@/hooks/use-translation';
import { motion } from 'framer-motion';
import { Building2, Users, Lightbulb, Sprout } from 'lucide-react';

const concepts = [
	{
		icon: Building2,
		title: 'Social Business',
		description: 'A self-sustaining company that reinvests all profits in expanding its social impact.',
	},
	{
		icon: Users,
		title: 'Microfinance',
		description: 'Financial services for entrepreneurs and small businesses lacking access to banking.',
	},
	{
		icon: Lightbulb,
		title: 'Bottom-up Economics',
		description: 'Economic development that starts with the poorest segments of society.',
	},
	{
		icon: Sprout,
		title: 'Sustainable Development',
		description: 'Meeting present needs without compromising future generations.',
	},
];

export default function ConceptsPage() {
	const { t } = useTranslation();

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('conceptsTitle')} subTitle={t('conceptsSubTitle')} />

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
					{concepts.map((concept, index) => {
						const Icon = concept.icon;
						return (
							<motion.div
								key={concept.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all'
							>
								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
										<Icon className='w-6 h-6 text-primary' />
									</div>
									<div>
										<h3 className='text-xl font-bold mb-2'>{concept.title}</h3>
										<p className='text-muted-foreground'>{concept.description}</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='mt-16 max-w-4xl mx-auto prose prose-lg dark:prose-invert'
				>
					<h2>Our Approach</h2>
					<p>
						These concepts form the foundation of our approach to governance and development. We believe in
						creating sustainable solutions that empower communities and drive inclusive growth.
					</p>

					<h2>Implementation</h2>
					<p>
						Each concept is being implemented through specific programs and initiatives, designed to create
						measurable impact and lasting change in our society.
					</p>
				</motion.div>
			</div>
		</main>
	);
}
