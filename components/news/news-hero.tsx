'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewsHero() {
	return (
		<section className='relative min-h-[60vh] flex items-center'>
			<div className='absolute inset-0'>
				<Image src='/static/image/cao.jpg' alt='News Background' fill className='object-cover' />
				<div className='absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60' />
			</div>

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
						Advisor&apos;s Office
					</p>
				</motion.div>
			</div>
		</section>
	);
}
