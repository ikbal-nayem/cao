'use client';

import Loading from '@/components/ui/loading';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';

const PrioritiesList = dynamic(() => import('@/components/priorities/priorities-list'), {
	loading: () => <Loading />,
});

export default function PrioritiesPage() {
	return (
		<main>
			<section className='relative min-h-[60vh] flex items-center'>
				<div className='absolute inset-0'>
					<Image src='/static/image/cao.jpg' alt='Office Background' fill className='object-cover' />
					<div className='absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60' />
				</div>

				<div className='container relative mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='max-w-3xl'
					>
						<h1 className='text-5xl md:text-7xl font-bold mb-6'>Programs</h1>
						<p className='text-xl text-muted-foreground'>
							Discover the key initiatives and programs driving Bangladesh&apos;s development agenda under the
							leadership of the Chief Advisor&apos;s Office
						</p>
					</motion.div>
				</div>
			</section>
			<Suspense fallback={<Loading />}>
				<PrioritiesList />
			</Suspense>
		</main>
	);
}
