'use client';

import PageTitle from '@/components/layout/page-title';
import { axiosIns } from '@/config/axios';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useLanguage } from '@/context/language/language-context';
import { useTranslation } from '@/hooks/use-translation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Binoculars, Target } from 'lucide-react';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

const MissionVisionPage = () => {
	const [mv, setMV] = useState<{
		mission_bn: string;
		mission_en: string;
		vision_bn: string;
		vision_en: string;
	}>();
	const { language } = useLanguage();
	const { t } = useTranslation();

	useEffect(() => {
		axiosIns.get('/get-mission-vision').then((resp) => setMV(resp?.data?.[0]));
	}, []);

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);

	return (
		<main className='min-h-screen pt-24' ref={ref}>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('menu.missionAndVision')} subTitle={t('cabinetMemberSubtitle')} />
				<section className='relative w-full py-24 overflow-hidden'>
					<motion.div style={{ y }} className='absolute inset-0'>
						<Image src={DEFAULT_LINKS.GOV_LOGO_BN} alt='' fill className='object-cover opacity-20' />
						<div className='absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background' />
					</motion.div>

					<div className='container mx-auto px-4'>
						<div className='relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
							{/* Vision Section */}
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className='relative'
							>
								<div className='bg-amber-500 text-white p-12 rounded-2xl relative overflow-hidden'>
									<div className='absolute right-4 bottom-4 opacity-10'>
										<Binoculars className='w-32 h-32' />
									</div>
									<h3 className='text-3xl font-bold mb-4'>{t('ourVision')}</h3>
									<div
										className='text-lg leading-relaxed'
										dangerouslySetInnerHTML={{
											__html: (language === 'en' ? mv?.vision_en : mv?.vision_bn) || '',
										}}
									/>
								</div>
							</motion.div>

							<div className='absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10'>
								<div className='w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg'>
									<Image
										src={DEFAULT_LINKS.GOV_LOGO_BN}
										alt='Logo'
										width={90}
										height={90}
										className='rounded-full'
									/>
								</div>
							</div>

							{/* Mission Section */}
							<motion.div
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className='relative'
							>
								<div className='bg-purple-600 text-white p-12 rounded-2xl relative overflow-hidden'>
									<div className='absolute right-4 bottom-4 opacity-10'>
										<Target className='w-32 h-32' />
									</div>
									<h3 className='text-3xl font-bold mb-4'>{t('ourMission')}</h3>
									<div
										className='text-lg leading-relaxed'
										dangerouslySetInnerHTML={{
											__html: (language === 'en' ? mv?.mission_en : mv?.mission_bn) || '',
										}}
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default MissionVisionPage;
