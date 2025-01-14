'use client';

import PageTitle from '@/components/layout/page-title';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function MessagePage() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	const { t } = useTranslation();

	return (
		<main className='min-h-screen py-24' ref={ref}>
			<motion.div style={{ y }} className='absolute inset-0 -z-10'>
				<Image src={DEFAULT_LINKS.CA_LOGO} alt='News Background' fill className='object-cover' />
				<div className='absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background' />
			</motion.div>

			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='max-w-4xl mx-auto'
				>
					<Image
						src={DEFAULT_LINKS.CA_LOGO}
						alt='Chief Adviser Office'
						className='mx-auto mb-5'
						width={100}
						height={100}
					/>
				</motion.div>

				<PageTitle title={t('messageTitle')} subTitle={t('messageSubTitle')} />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='max-w-4xl mx-auto'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
						<div className='relative aspect-[3/4] rounded-xl overflow-hidden'>
							<Image
								src='https://www.dailymessenger.net/media/imgAll/2024February/en/02-2408101027.jpg'
								alt='Dr. Muhammad Yunus'
								fill
								className='object-cover'
							/>
						</div>

						<div className='space-y-6'>
							<blockquote className='text-xl italic border-l-4 border-primary pl-4'>
								"Our mission is to build a Bangladesh where every citizen has the opportunity to prosper
								through sustainable development and inclusive growth."
							</blockquote>

							<div className='prose prose-lg dark:prose-invert'>
								<p>
									As the Chief Adviser of Bangladesh, I am deeply committed to serving our nation and its
									people. Our focus is on implementing effective governance mechanisms, ensuring transparency,
									and driving sustainable development initiatives that benefit all citizens.
								</p>

								<p>
									We are working tirelessly to strengthen our democratic institutions, promote economic
									growth, and create opportunities for every Bangladeshi. Our vision encompasses digital
									transformation, environmental sustainability, and social equity.
								</p>

								<p>
									Together, we can build a prosperous and inclusive Bangladesh that stands as a model of
									development and progress in the global community.
								</p>
							</div>

							<div className='pt-6'>
								<h3 className='text-2xl font-bold'>Dr. Muhammad Yunus</h3>
								<p className='text-primary'>Chief Adviser of Bangladesh</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
