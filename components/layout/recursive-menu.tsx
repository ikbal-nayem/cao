'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { IObject } from '@/interface/common.interface';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../language/language-context';
import { IMenuItem } from './menu-items';

interface RecursiveMenuProps {
	items: IMenuItem[] | any[];
	level?: number;
	isFromAPI?: boolean;
	apiFunc?: () => IObject;
	titleProps?: string;
	urlProps?: string;
}

export const RecursiveMenu: React.FC<RecursiveMenuProps> = ({
	items,
	level = 0,
	apiFunc,
	isFromAPI,
	titleProps,
	urlProps,
}) => {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const { t } = useTranslation();
	const { language } = useLanguage();

	const handleMouseEnter = (key: string) => {
		setActiveDropdown(key);
	};

	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	const apiData = apiFunc?.();

	if (isFromAPI) items = apiData?.data;

	return (
		<>
			{items.map((item, idx) => (
				<div
					key={item.key || idx}
					className='relative'
					onMouseEnter={() => handleMouseEnter(item.key || '')}
					onMouseLeave={handleMouseLeave}
				>
					{item.items ? (
						<>
							<Button
								variant='ghost'
								size='sm'
								className={clsx(
									'flex items-center justify-between space-x-1 text-foreground w-full hover:text-primary',
									{ 'hover:bg-transparent': level === 0 }
								)}
							>
								<span className='text-sm'>{t(item.key)}</span>
								{level === 0 ? <ChevronDown className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />}
							</Button>

							{activeDropdown === item.key && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={cn(
										'absolute z-50 min-w-max rounded-md shadow-lg bg-white dark:bg-gray-800',
										level === 0 ? 'left-0 top-full' : 'left-full top-0'
									)}
								>
									<div className='py-1'>
										<RecursiveMenu
											items={item.items}
											level={level + 1}
											apiFunc={item?.apiFunc}
											isFromAPI={item?.isFromAPI}
											titleProps={item?.titleProps}
											urlProps={item?.urlProps}
										/>
									</div>
								</motion.div>
							)}
						</>
					) : (
						<Link
							href={(isFromAPI ? item?.[urlProps || ''] : item?.href) || '#'}
							target={item?.isExternal ? '_blank' : undefined}
							className='flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
						>
							<span className='text-sm'>
								{isFromAPI ? item?.[`${titleProps}_${language}`] : t(item?.key)}
							</span>
							{item?.isExternal && <ExternalLink className='w-3 h-3 min-w-min' />}
						</Link>
					)}
				</div>
			))}
		</>
	);
};
