'use client';

import { motion } from 'framer-motion';

export default function MapSection() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className='relative rounded-2xl overflow-hidden border border-border/50 shadow-lg'
		>
			<div className='absolute inset-0 bg-primary/5' />
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4125620566856!2d90.38813422487756!3d23.76831881616332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70077941f29%3A0x23c70eb69a1b1daf!2sChief%20Advisor&#39;s%20Office!5e0!3m2!1sen!2sbd!4v1733672901301!5m2!1sen!2sbd'
				width='100%'
				height='500'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				className='relative z-10'
			></iframe>
		</motion.div>
	);
}
