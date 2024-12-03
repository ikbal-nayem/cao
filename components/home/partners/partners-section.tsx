'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import PartnerCard from './partner-card';

const partners = [
	{
		name: 'a2i Programme',
		logo: 'static/logo/a2i.png',
		url: 'https://a2i.gov.bd/',
	},
	{
		name: 'Cabinet Division',
		logo: 'static/logo/cd.png',
		url: 'https://cabinet.gov.bd/',
	},
	{
		name: 'ICT Division',
		logo: 'static/logo/ict.png',
		url: 'https://ictd.gov.bd/',
	},
	{
		name: 'UNDP Bangladesh',
		logo: 'static/logo/undp.png',
		url: 'https://www.undp.org/',
	},
];

const PartnersSection: FC = () => {
	return (
		<section className='py-24 bg-gradient-to-b from-background via-background/50 to-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4'>
						Strategic Partners
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Collaborating with key institutions to drive digital transformation and sustainable development
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{partners.map((partner, index) => (
						<PartnerCard key={index} {...partner} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PartnersSection;
