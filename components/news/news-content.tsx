'use client';

import { motion } from 'framer-motion';

interface NewsContentProps {
	description: string;
}

export function NewsContent({ description }: NewsContentProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			className='lg:col-span-7'
		>
			<div className='prose prose-lg dark:prose-invert max-w-none'>
				<p className='text-lg leading-relaxed text-muted-foreground'>{description}</p>

				<h2 className='text-2xl font-bold mt-8 mb-4'>Background</h2>
				<p className='text-lg leading-relaxed text-muted-foreground'>
					The interim government, led by Chief Adviser Muhammad Yunus, has been implementing various reforms
					and initiatives to address the country&apos;s pressing challenges. These efforts span across
					multiple sectors, including economic development, social welfare, and institutional governance.
				</p>

				<h2 className='text-2xl font-bold mt-8 mb-4'>Key Points</h2>
				<ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
					<li>Implementation of transparent governance mechanisms</li>
					<li>Focus on economic stability and growth</li>
					<li>Enhancement of social welfare programs</li>
					<li>Strengthening of democratic institutions</li>
				</ul>

				<h2 className='text-2xl font-bold mt-8 mb-4'>Future Implications</h2>
				<p className='text-lg leading-relaxed text-muted-foreground'>
					These developments are expected to have lasting impacts on Bangladesh&apos;s political and economic
					landscape. The initiatives undertaken by the interim government aim to establish a foundation for
					sustainable progress and inclusive growth.
				</p>
			</div>
		</motion.div>
	);
}
