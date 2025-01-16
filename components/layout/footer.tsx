'use client';

import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { ROUTES } from '@/constants/routes.constants';
import { useTranslation } from '@/hooks/use-translation';
import { Clock, Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
	const { t } = useTranslation();

	return (
		<footer className='bg-blue-500 text-white'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<h3 className='text-xl font-bold mb-4'>{t('contact')}</h3>
						<div className='mb-4'>
							<h5 className='text-md mb-2'>{t('contactUs')}</h5>
							<div className='ml-8 space-y-2'>
								<p className='flex items-center gap-2'>
									<MapPin className='w-4 h-4' />
									<span>{t('pmo')}, Tejgaon, Dhaka-1215</span>
								</p>
								<p className='flex items-center gap-2'>
									<Phone className='w-4 h-4' />
									<span>+880-2-XXXXXXXX</span>
								</p>
								<p className='flex items-center gap-2'>
									<Mail className='w-4 h-4' />
									<span>info@cao.gov.bd</span>
								</p>
								<p className='flex items-center gap-2'>
									<Clock className='w-4 h-4' />
									<span>
										Sunday - Thursday <br />
										9:00 AM - 5:00 PM
									</span>
								</p>
							</div>
						</div>
						<ul className='space-y-2'>
							<li>
								<Link href={ROUTES.CONTACT.FEEDBACK} className='text-gray-300 hover:text-white'>
									{t('feedback')}
								</Link>
							</li>
							<li>
								<Link href={ROUTES.CONTACT.ADDRESS} className='text-gray-300 hover:text-white'>
									{t('map')}
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-xl font-bold mb-4'>{t('quickLinks')}</h3>
						<ul className='space-y-2'>
							<li>
								<Link href={'#'} className='text-gray-300 hover:text-white'>
									{t('menu.webMail')}
								</Link>
							</li>
							<li>
								<Link
									href={'https://n-doptor-accounts.nothi.gov.bd/'}
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('dNothi')}
								</Link>
							</li>
							<li>
								<Link
									href={'https://gems.gov.bd/'}
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('gems')}
								</Link>
							</li>
							<li>
								<Link href={'#'} className='text-gray-300 hover:text-white'>
									{t('hotline')}
								</Link>
							</li>
							<li>
								<Link
									href={'https://www.mygov.bd/'}
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('myGov')}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-xl font-bold mb-4'>{t('importantLinks')}</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='http://www.bangabhaban.gov.bd/'
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('po')}
								</Link>
							</li>
							<li>
								<Link
									href='https://cabinet.gov.bd/'
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('cd')}
								</Link>
							</li>
							<li>
								<Link href='https://mopa.gov.bd/' target='_blank' className='text-gray-300 hover:text-white'>
									{t('mopa')}
								</Link>
							</li>
							<li>
								<Link
									href='https://bangladesh.gov.bd/'
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('np')}
								</Link>
							</li>
							<li>
								<Link
									href='https://www.eprocure.gov.bd/'
									target='_blank'
									className='text-gray-300 hover:text-white'
								>
									{t('egp')}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-xl font-bold mb-4'>{t('followUs')}</h3>
						<div className='flex space-x-4 mb-6'>
							<a href='#' className='text-gray-300 hover:text-white'>
								<Facebook className='w-6 h-6' />
							</a>
							<a href='#' className='text-gray-300 hover:text-white'>
								<Twitter className='w-6 h-6' />
							</a>
							<a href='#' className='text-gray-300 hover:text-white'>
								<Linkedin className='w-6 h-6' />
							</a>
							<a href='#' className='text-gray-300 hover:text-white'>
								<Instagram className='w-6 h-6' />
							</a>
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-sm'>{t('theme')}:</span>
							<ThemeSwitcher />
						</div>
					</div>
				</div>
				<div className='border-t border-gray-900 mt-8 pt-8 text-center'>
					<p className='text-gray-400'>
						© {new Date().getFullYear()} {t('pmo')}. {t('allRightsReserved')}.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
