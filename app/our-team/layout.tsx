'use client';

import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function OurTeamLayout({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
	return (
		<main className='min-h-screen'>
			<section ref={ref} className='relative h-[40vh]'>
				<motion.div style={{ y }} className='absolute inset-0'>
					<Image src={DEFAULT_LINKS.CAO_1} alt='Office' fill className='object-cover' />
					<div className='absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60' />
				</motion.div>
				<div className='relative container mx-auto px-4 h-full flex items-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='max-w-3xl'
					>
						<h1 className='text-5xl md:text-7xl font-bold mb-6'>{t('menu.ourTeam')}</h1>
						<p className='text-xl text-muted-foreground'>{t('ourStaffSubtitle')}</p>
					</motion.div>
				</div>
			</section>
			{children}
		</main>
	);
}
