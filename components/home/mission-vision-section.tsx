'use client';

import { motion } from 'framer-motion';
import { Binoculars, Target } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

const MissionVisionSection: FC = () => {
	return (
		<section className='relative w-full py-24 overflow-hidden'>
			<div className='absolute inset-0'>
				<Image src='/static/logo/gov-bn.png' alt='' fill className='object-cover opacity-20' />
				<div className='absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background' />
			</div>
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
							<h3 className='text-3xl font-bold mb-4'>OUR VISION</h3>
							<p className='text-lg leading-relaxed'>
								Creating carbon-free cities by accelerating clean and renewable energy solutions in every
								home.
							</p>
						</div>
					</motion.div>

					<div className='absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10'>
						<div className='w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg'>
							<Image
								src='static/logo/ca.png'
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
						<div className='bg-red-500 text-white p-12 rounded-2xl relative overflow-hidden'>
							<div className='absolute right-4 bottom-4 opacity-10'>
								<Target className='w-32 h-32' />
							</div>
							<h3 className='text-3xl font-bold mb-4'>OUR MISSION</h3>
							<p className='text-lg leading-relaxed'>
								Generating sustainable renewable energy solutions to cover the demand of every home and
								industry all over the world.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default MissionVisionSection;
