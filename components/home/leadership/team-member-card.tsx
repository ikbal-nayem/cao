'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface TeamMemberCardProps {
	name: string;
	role: string;
	organization: string;
	image: string;
	index: number;
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ name, role, organization, image, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className='group relative overflow-hidden rounded-2xl'
		>
			<div className='relative h-[400px]'>
				<Image
					src={image}
					alt={name}
					fill
					className='object-cover transition-transform duration-300 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
			</div>

			<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
				<h3 className='text-2xl font-bold mb-1'>{name}</h3>
				<p className='text-lg text-blue-200 mb-1'>{role}</p>
				<p className='text-sm text-blue-300'>{organization}</p>
			</div>
		</motion.div>
	);
};

export default TeamMemberCard;
