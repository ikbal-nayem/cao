'use client';

import { LanguageSwitch } from '@/components/language/language-switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslation } from '@/hooks/use-translation';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { menuItems } from './menu-items';

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const { theme } = useTheme();
	const { t } = useTranslation();

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
						<Image src='/static/logo/ca.png' alt='CAO Logo' width={40} height={40} className='rounded-full' />
						<span
							className='text-xl sm:text-2xl font-bold'
							style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
						>
							{t('pmo')}
						</span>
					</Link>

					{/* Desktop Menu */}
					<nav className='hidden md:flex items-center space-x-8'>
						{menuItems.map((item) => (
							<div
								key={item?.key}
								className='relative'
								onMouseEnter={() => setActiveDropdown(item?.key)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								{item.items ? (
									<Button
										variant='ghost'
										size='sm'
										className='flex items-center space-x-1 text-foreground hover:bg-inherit hover:text-gray-800'
										style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
									>
										<span>{t(item?.key)}</span>
										<ChevronDown className='w-4 h-4' />
									</Button>
								) : (
									<Link
										href={item.href || '#'}
										className='text-foreground hover:text-gray-800'
										style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
									>
										{t(item?.key)}
									</Link>
								)}
								{item.items && activeDropdown === item?.key && (
									<div className='absolute left-0 w-max rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
										<div className='py-1'>
											{item.items.map((subItem) => (
												<div key={subItem?.key}>
													{subItem.items ? (
														<div className='relative group'>
															<button className='w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>
																{t(subItem?.key)}
																<ChevronRight className='inline-block w-4 h-4 ml-2' />
															</button>
															<div className='absolute left-full top-0 hidden group-hover:block'>
																<div className='ml-2 w-max rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
																	<div className='py-1'>
																		{subItem.items.map((nestedItem) => (
																			<Link
																				key={t(nestedItem?.key)}
																				href={nestedItem.href || '#'}
																				className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
																			>
																				{t(nestedItem?.key)}
																			</Link>
																		))}
																	</div>
																</div>
															</div>
														</div>
													) : (
														<Link
															href={subItem.href || '#'}
															className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
														>
															{t(subItem?.key)}
														</Link>
													)}
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						))}
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
														<AccordionTrigger className='text-lg'>{t(item?.key)}</AccordionTrigger>
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
														{t(item?.key)}
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
