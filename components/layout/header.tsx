'use client';

import { LanguageSwitch } from '@/components/language/language-switch';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { menuItems } from './menu-items';

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const { theme } = useTheme();

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
							className='text-2xl font-bold'
							style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
						>
							Chief Adviser's Office
						</span>
					</Link>

					{/* Desktop Menu */}
					<nav className='hidden md:flex items-center space-x-8'>
						{menuItems.map((item) => (
							<div
								key={item.title}
								className='relative'
								onMouseEnter={() => setActiveDropdown(item.title)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								{item.items ? (
									<button
										className='flex items-center space-x-1 text-foreground hover:text-gray-700'
										style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
									>
										<span>{item.title}</span>
										<ChevronDown className='w-4 h-4' />
									</button>
								) : (
									<Link
										href={item.href || '#'}
										className='text-foreground hover:text-gray-700'
										style={{ textShadow: `${theme === 'dark' ? '#000000' : '#ffffff'} 0px 1px 10px` }}
									>
										{item.title}
									</Link>
								)}
								{item.items && activeDropdown === item.title && (
									<div className='absolute left-0 w-max rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
										<div className='py-1'>
											{item.items.map((subItem) => (
												<Link
													key={subItem.title}
													href={subItem.href || '#'}
													className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
												>
													{subItem.title}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}
						<div className='flex items-center space-x-4'>
							<LanguageSwitch />
							<ThemeToggle />
						</div>
					</nav>

					{/* Mobile Menu Button */}
					<div className='md:hidden flex items-center space-x-4'>
						<LanguageSwitch />
						<ThemeToggle />
						<Button variant='ghost' onClick={() => setIsMenuOpen(!isMenuOpen)}>
							{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='md:hidden bg-background border-t border-border'>
						{menuItems.map((item) => (
							<div key={item.title} className='py-2'>
								{item.items ? (
									<div className='space-y-2'>
										<div className='font-medium px-4 py-2'>{item.title}</div>
										{item.items.map((subItem) => (
											<Link
												key={subItem.title}
												href={subItem.href || '#'}
												className='block px-8 py-2 text-sm text-muted-foreground hover:text-foreground'
												onClick={() => setIsMenuOpen(false)}
											>
												{subItem.title}
											</Link>
										))}
									</div>
								) : (
									<Link
										href={item.href || '#'}
										className='block px-4 py-2 text-foreground hover:text-primary'
										onClick={() => setIsMenuOpen(false)}
									>
										{item.title}
									</Link>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
