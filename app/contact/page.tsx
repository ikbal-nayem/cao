'use client';

import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import MapSection from '@/components/contact/map-section';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ContactPage() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

	return (
		<main className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative py-24'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='text-center'
				>
					<h1 className='text-6xl font-bold text-gray-700 dark:text-white mb-6'>Contact Us</h1>
					<p className='text-lg text-gray-400 max-w-2xl mx-auto'>
						Please feel free to reach out to us with any questions or inquiries you may have. We look forward
						to hearing from you and assisting you in any way possible.
					</p>
				</motion.div>
			</section>

			{/* Contact Form and Info Section */}
			<section ref={ref} className='relative py-24 overflow-hidden'>
				<motion.div style={{ y, opacity }} className='absolute inset-0'>
					<Image src='/static/image/cao.jpg' alt='Contact Background' fill className='object-cover' />
					<div className='absolute inset-0 bg-slate-200/90 dark:bg-black/80' />
				</motion.div>

				<div className='container relative mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<ContactInfo />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							style={{
								backdropFilter: 'blur(10px)',
								WebkitBackdropFilter: 'blur(10px)',
							}}
							className='shadow-xl bg-white/10 dark:bg-slate-900/50 rounded-lg p-8'
						>
							<h2 className='text-center text-3xl font-bold text-gray-600 mb-6'>Send Message</h2>
							<ContactForm />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className='py-12'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='container mx-auto px-4'
				>
					<MapSection />
				</motion.div>
			</section>
		</main>
	);
}
