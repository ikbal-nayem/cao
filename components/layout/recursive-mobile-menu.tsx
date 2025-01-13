'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from '@/hooks/use-translation';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { IMenuItem } from './menu-items';
import clsx from 'clsx';

interface RecursiveMobileMenuProps {
	items: IMenuItem[];
}

export function RecursiveMobileMenu({ items }: RecursiveMobileMenuProps) {
	const { t } = useTranslation();

	return (
		<Accordion type='single' collapsible className='w-full'>
			{items.map((item, index) => (
				<AccordionItem key={index} value={`item-${index}`}>
					{item.items ? (
						<>
							<AccordionTrigger>
								{item?.key ? t(item?.key) : item?.title}
							</AccordionTrigger>
							<AccordionContent>
								<div className='pl-4'>
									<RecursiveMobileMenu items={item.items} />
								</div>
							</AccordionContent>
						</>
					) : (
						<Link
							href={item.href || '#'}
							target={item.isExternal ? '_blank' : undefined}
							className='flex items-center justify-between py-4 hover:text-primary'
						>
							<span className={clsx({ 'text-xs': item?.isExternal })}>
								{item?.key ? t(item?.key) : item?.title}
							</span>
							{item.isExternal && <ExternalLink className='w-3 h-3 min-w-min' />}
						</Link>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
}
