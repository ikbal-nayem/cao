'use client';

import { LanguageSwitch } from '@/components/language/language-switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useLanguage } from '../language/language-context';
import { menuItems } from './menu-items';
import { RecursiveMenu } from './recursive-menu';

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { theme } = useTheme();
	const { t } = useTranslation();
	const { language } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
					: 'bg-transparent'
			}`}
		>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							src={language === 'en' ? DEFAULT_LINKS.GOV_LOGO_EN : DEFAULT_LINKS.GOV_LOGO_BN}
							alt='BD Gov'
							width={40}
							height={40}
							className='rounded-full'
						/>
						<span
							className='text-xl sm:text-2xl font-bold'
							style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
						>
							{t('pmo')}
						</span>
					</Link>

					{/* Desktop Menu */}
					<nav className='hidden md:flex items-center space-x-8'>
						<RecursiveMenu items={menuItems} level={0} />
						<div className='flex items-center space-x-4'>
							<LanguageSwitch />
						</div>
					</nav>

					{/* Mobile Menu */}
					<div className='md:hidden flex items-center space-x-4'>
						<LanguageSwitch />
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='ghost' size='icon'>
									<Menu className='w-6 h-6' />
								</Button>
							</SheetTrigger>
							<SheetContent side='right' className='w-80'>
								<div className='mt-6'>
									<Accordion type='single' collapsible className='w-full'>
										{menuItems.map((item, index) => (
											<AccordionItem key={index} value={`item-${index}`}>
												{item.items ? (
													<>
														<AccordionTrigger className='text-lg'>
															{item?.key ? t(item?.key) : item?.title}
														</AccordionTrigger>
														<AccordionContent>
															<div className='pl-4'>
																{item.items.map((subItem, subIndex) => (
																	<div key={subIndex}>
																		{subItem.items ? (
																			<Accordion type='single' collapsible>
																				<AccordionItem value={`subitem-${subIndex}`}>
																					<AccordionTrigger className='text-base'>
																						{t(subItem?.key)}
																					</AccordionTrigger>
																					<AccordionContent>
																						<div className='pl-4 space-y-2'>
																							{subItem.items.map((nestedItem, nestedIndex) => (
																								<Link
																									key={nestedIndex}
																									href={nestedItem.href || '#'}
																									className='block py-2 text-sm text-muted-foreground hover:text-primary'
																								>
																									{t(nestedItem?.key)}
																								</Link>
																							))}
																						</div>
																					</AccordionContent>
																				</AccordionItem>
																			</Accordion>
																		) : (
																			<Link
																				href={subItem.href || '#'}
																				className='block py-2 text-base text-muted-foreground hover:text-primary'
																			>
																				{t(subItem?.key)}
																			</Link>
																		)}
																	</div>
																))}
															</div>
														</AccordionContent>
													</>
												) : (
													<Link href={item.href || '#'} className='block py-4 text-lg hover:text-primary'>
														{item?.key ? t(item?.key) : item?.title}
													</Link>
												)}
											</AccordionItem>
										))}
									</Accordion>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
