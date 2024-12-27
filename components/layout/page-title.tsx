'use client';

import React from 'react';
import { motion } from 'framer-motion';

type pageTitleProps = {
	title: string;
	subTitle?: string;
};

const PageTitle = ({ title, subTitle }: pageTitleProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className='text-center mb-16'
		>
			<h1 className='text-4xl font-bold mb-6'>{title}</h1>
			<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>{subTitle}</p>
		</motion.div>
	);
};

export default PageTitle;
