'use client';

import { LanguageSwitch } from '@/components/language/language-switch';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { menuItems } from './menu-items';
import { RecursiveMenu } from './recursive-menu';
import { RecursiveMobileMenu } from './recursive-mobile-menu';
import clsx from 'clsx';

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
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
			className={clsx(
				`fixed w-full z-50 transition-all duration-300`,
				'bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60'
			)}
			// className={clsx(`fixed w-full z-50 transition-all duration-300`, {
			// 	'bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60': isScrolled,
			// })}
		>
			<div className={clsx('container mx-auto px-4')}>
				<div className='flex items-center justify-between h-14'>
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							src={DEFAULT_LINKS.GOV_LOGO_BN}
							alt='BD Gov'
							width={40}
							height={40}
							className='rounded-full'
						/>
						<span className='text-xl sm:text-2xl font-bold text-primary dark:text-primary/95'>{t('pmo')}</span>
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
							<SheetContent side='right' className='w-80 overflow-auto'>
								<div className='mt-6'>
									<RecursiveMobileMenu items={menuItems} />
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
