'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from '@/hooks/use-translation';
import { IObject } from '@/interface/common.interface';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../language/language-context';
import Loading from '../ui/loading';
import { IMenuItem } from './menu-items';

interface RecursiveMobileMenuProps {
	items: IMenuItem[] | any[];
	isFromAPI?: boolean;
	apiFunc?: () => IObject;
	titleProps?: string;
	urlProps?: string;
}

export function RecursiveMobileMenu({
	items,
	apiFunc,
	isFromAPI,
	titleProps,
	urlProps,
}: RecursiveMobileMenuProps) {
	const { t } = useTranslation();
	const { language } = useLanguage();

	const apiData = apiFunc?.();

	if (isFromAPI) {
		items = apiData?.data;
		if (apiData?.isFetching)
			return (
				<div className='w-[100px]'>
					<Loading />
				</div>
			);
	}

	return (
		<Accordion type='single' collapsible className='w-full'>
			{items?.map((item, index) => (
				<AccordionItem key={index} value={`item-${index}`}>
					{item.items ? (
						<>
							<AccordionTrigger className='text-sm'>{t(item?.key)}</AccordionTrigger>
							<AccordionContent>
								<div className='pl-4'>
									<RecursiveMobileMenu
										items={item.items}
										apiFunc={item?.apiFunc}
										isFromAPI={item?.isFromAPI}
										titleProps={item?.titleProps}
										urlProps={item?.urlProps}
									/>
								</div>
							</AccordionContent>
						</>
					) : (
						<Link
							href={(isFromAPI ? item?.[urlProps || ''] : item?.href) || '#'}
							target={item.isExternal ? '_blank' : undefined}
							className='flex items-center justify-between py-4 hover:text-primary'
						>
							<span className='text-sm'>
								{isFromAPI ? item?.[`${titleProps}_${language}`] : t(item?.key)}
							</span>
							{item.isExternal && <ExternalLink className='w-3 h-3 min-w-min' />}
						</Link>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
}
