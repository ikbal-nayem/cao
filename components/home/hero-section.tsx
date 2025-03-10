'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
	{
		image: '/static/image/cao.jpg',
		title: 'Office of the Chief Adviser',
		description:
			'Serving the nation through effective governance, transparent leadership, and sustainable development initiatives.',
		textAlign: 'center',
	},
	{
		image: '/static/image/yunus_0.png',
		title: 'Transforming Bangladesh',
		description: 'Leading the way towards digital innovation and economic growth.',
		textAlign: 'left',
	},
	{
		image: '/static/image/yunus_1.jpg',
		title: 'Building Tomorrow',
		description: 'Creating a sustainable and prosperous future for all citizens.',
		textAlign: 'right',
	},
];

const HeroSection: FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const scrollToContent = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth',
		});
	};

	return (
		<div className='relative min-h-screen'>
			<Swiper
				modules={[Autoplay, EffectFade]}
				effect='fade'
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				className='h-screen'
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className='relative h-screen'>
							<Image src={slide.image} alt={slide.title} fill className='object-cover object-top' priority />
							<div
								className={clsx('absolute inset-0 from-blue-700/20 to-transparent', {
									'bg-gradient-to-br': slide?.textAlign === 'left',
									'bg-gradient-to-b': slide?.textAlign === 'center',
									'bg-gradient-to-bl': slide?.textAlign === 'right',
								})}
							/>
							<div className='absolute inset-0 flex items-center'>
								<div className='container px-4'>
									<div
										className={clsx('max-w-4xl', {
											'ml-auto text-right': slide?.textAlign === 'right',
											'm-auto text-center': slide?.textAlign === 'center',
										})}
									>
										<motion.h1
											initial={{ opacity: 0, y: 20 }}
											animate={activeIndex === index ? { opacity: 1, y: 0 } : {}}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.8 }}
											className='text-5xl md:text-7xl font-bold text-white mb-6'
										>
											{slide.title.split(' ').map((word, i) => (
												<span
													key={i}
													className={clsx({
														'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-500':
															i === 1,
													})}
												>
													{word}{' '}
												</span>
											))}
										</motion.h1>
										<motion.p
											initial={{ opacity: 0, y: 20 }}
											animate={activeIndex === index ? { opacity: 1, y: 0 } : {}}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.8, delay: 0.2 }}
											className={clsx('text-xl text-blue-100 mb-8 max-w-2xl', {
												'ml-auto text-right': slide?.textAlign === 'right',
												'm-auto text-center': slide?.textAlign === 'center',
											})}
										>
											{slide.description}
										</motion.p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Scroll Down Indicator */}
			<motion.div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20'
				animate={{ y: [0, 10, 0] }}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				onClick={scrollToContent}
			>
				<ChevronDown className='w-8 h-8 dark:text-white text-slate-800' />
			</motion.div>

			<div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/50 to-transparent z-10' />
		</div>
	);
};

export default HeroSection;
