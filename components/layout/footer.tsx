'use client';

import { ThemeSwitcher } from '@/context/theme/theme-switcher';
import { ROUTES } from '@/constants/routes.constants';
import { useTranslation } from '@/hooks/use-translation';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import twitterIcon from '../../static/icons/x-twitter.svg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Footer: FC = () => {
	const { t } = useTranslation();

	return (
		<footer className='bg-primary text-white border-t-4 border-gray-500'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
					<div className='col-span-3'>
						<h3 className='text-xl font-extrabold mb-4'>{t('contact')}</h3>
						<Accordion type='single' collapsible>
							<AccordionItem value={t('contactUs')} className='border-none'>
								<AccordionTrigger className='max-w-max space-x-3'>
									<h5 className='text-gray-100 hover:text-gray-300'>{t('contactUs')}</h5>
								</AccordionTrigger>
								<AccordionContent className='text-muted'>
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
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<ul className='space-y-2'>
							<li>
								<Link href={ROUTES.CONTACT.FEEDBACK} className='text-gray-100 hover:text-gray-300'>
									{t('feedback')}
								</Link>
							</li>
							<li>
								<Link href={ROUTES.CONTACT.ADDRESS} className='text-gray-100 hover:text-gray-300'>
									{t('map')}
								</Link>
							</li>
						</ul>
					</div>

					<div className='col-span-3'>
						<h3 className='text-xl font-extrabold mb-4'>{t('quickLinks')}</h3>
						<ul className='space-y-2'>
							<li>
								<Link href={'#'} className='text-gray-100 hover:text-gray-300'>
									{t('webMail')}
								</Link>
							</li>
							<li>
								<Link
									href={'https://n-doptor-accounts.nothi.gov.bd/'}
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('dNothi')}
								</Link>
							</li>
							<li>
								<Link
									href={'https://gems.gov.bd/'}
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('gems')}
								</Link>
							</li>
							<li>
								<Link href={'#'} className='text-gray-100 hover:text-gray-300'>
									{t('hotline')}
								</Link>
							</li>
							<li>
								<Link
									href={'https://www.mygov.bd/'}
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('myGov')}
								</Link>
							</li>
						</ul>
					</div>

					<div className='col-span-4'>
						<h3 className='text-xl font-extrabold mb-4'>{t('importantLinks')}</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='http://www.bangabhaban.gov.bd/'
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('po')}
								</Link>
							</li>
							<li>
								<Link
									href='https://cabinet.gov.bd/'
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('cd')}
								</Link>
							</li>
							<li>
								<Link
									href='https://mopa.gov.bd/'
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('mopa')}
								</Link>
							</li>
							<li>
								<Link
									href='https://bangladesh.gov.bd/'
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('np')}
								</Link>
							</li>
							<li>
								<Link
									href='https://www.eprocure.gov.bd/'
									target='_blank'
									className='text-gray-100 hover:text-gray-300'
								>
									{t('egp')}
								</Link>
							</li>
						</ul>
					</div>

					<div className='col-span-2'>
						<h3 className='text-xl font-extrabold mb-4'>{t('followUs')}</h3>
						<div className='flex space-x-4 mb-6'>
							<a href='#' className='text-gray-100 hover:text-gray-300'>
								<Facebook className='w-6 h-6' />
							</a>
							<a href='#' className='text-gray-100 hover:text-gray-300'>
								<Image src={twitterIcon} alt='' className='w-6 h-6' />
							</a>
							<a href='#' className='text-gray-100 hover:text-gray-300'>
								<Linkedin className='w-6 h-6' />
							</a>
							<a href='#' className='text-gray-100 hover:text-gray-300'>
								<Instagram className='w-6 h-6' />
							</a>
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-sm'>{t('theme')}:</span>
							<ThemeSwitcher />
						</div>
					</div>
				</div>
				<div className='border-t border-gray-700 mt-8 pt-8 text-center'>
					<p className='text-gray-300'>
						© {new Date().getFullYear()} {t('pmo')}. {t('allRightsReserved')}.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
