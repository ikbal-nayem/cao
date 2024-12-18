'use client';

import Loading from '@/components/ui/loading';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense, useRef } from 'react';

const NewsList = dynamic(() => import('@/components/news/news-list'), {
	loading: () => <Loading />,
});

export default function NewsPage() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

	return (
		<main>
			<section ref={ref} className='relative min-h-[60vh] flex items-center'>
				<motion.div style={{ y }} className='absolute inset-0'>
					<Image src='/static/image/cao.jpg' alt='News Background' fill className='object-cover' />
					<div className='absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60' />
				</motion.div>

				<div className='container relative mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='max-w-3xl'
					>
						<h1 className='text-5xl md:text-7xl font-bold mb-6'>Latest News</h1>
						<p className='text-xl text-muted-foreground'>
							Stay updated with the latest announcements, policies, and developments from the Chief
							Adviser&apos;s Office
						</p>
					</motion.div>
				</div>
			</section>
			<Suspense fallback={<Loading />}>
				<NewsList />
			</Suspense>
		</main>
	);
}
