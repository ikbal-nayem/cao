'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { IMenuItem } from './menu-items';
import clsx from 'clsx';

interface RecursiveMenuProps {
	items: IMenuItem[];
	level?: number;
}

export const RecursiveMenu: React.FC<RecursiveMenuProps> = ({ items, level = 0 }) => {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const { theme } = useTheme();
	const { t } = useTranslation();

	const handleMouseEnter = (key: string) => {
		setActiveDropdown(key);
	};

	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	return (
		<>
			{items.map((item) => (
				<div
					key={item.key || item.title}
					className='relative'
					onMouseEnter={() => handleMouseEnter(item.key || item.title || '')}
					onMouseLeave={handleMouseLeave}
				>
					{item.items ? (
						<>
							<Button
								variant='ghost'
								size='sm'
								className='flex items-center justify-between space-x-1 text-foreground w-full hover:text-gray-800'
								style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
							>
								<span>{item.key ? t(item.key) : item.title}</span>
								{level === 0 ? <ChevronDown className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />}
							</Button>

							{activeDropdown === (item.key || item.title) && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`absolute ${
										level === 0 ? 'left-0 top-full' : 'left-full top-0'
									} min-w-[200px] rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
								>
									<div className='py-1'>
										<RecursiveMenu items={item.items} level={level + 1} />
									</div>
								</motion.div>
							)}
						</>
					) : (
						<Link
							href={item.href || '#'}
							target={item.isExternal ? '_blank' : undefined}
							className='flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
						>
							<span className={clsx({ 'text-xs': item?.isExternal })}>
								{item.key ? t(item.key) : item.title}
							</span>
							{item.isExternal && <ExternalLink className='w-3 h-3 min-w-min' />}
						</Link>
					)}
				</div>
			))}
		</>
	);
};
