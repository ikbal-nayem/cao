'use client';

import { useLanguage } from '@/components/language/language-context';
import PageTitle from '@/components/layout/page-title';
import { axiosIns } from '@/config/axios';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { ICabinetMembers } from '@/interface/administration.interface';
import { makePreviewURL } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CabinetPage() {
	const [members, setMembers] = useState<ICabinetMembers[]>();
	const [isLoading, setLoading] = useState<boolean>(true);

	const { t } = useTranslation();
	const { language } = useLanguage();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get('/get-advisory-member-list')
			.then((resp) => setMembers(resp?.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('cabinetMemberTitle')} subTitle={t('cabinetMemberSubtitle')} />

				<div className='space-y-8'>
					{isLoading && <CabinetListSkeleton />}

					{members?.map((member, index) => (
						<motion.div
							key={member?.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-card border border-border/90 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300'
						>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4'>
								<div className='relative h-[250px] rounded-lg overflow-hidden'>
									<Image
										src={makePreviewURL(member?.image_det?.[0]?.relativepath) || DEFAULT_LINKS.NOT_AVAILABLE}
										alt={language === 'en' ? member?.name_en : member?.name_bn}
										fill
										className='object-cover'
									/>
								</div>
								<div className='md:col-span-2 space-y-4'>
									<div>
										<h2 className='text-3xl font-bold'>
											{language === 'en' ? member?.name_en : member?.name_bn}
										</h2>
										<p className='text-xl text-primary mt-1'>
											{language === 'en' ? member?.designation_en : member?.designation_bn}
										</p>
									</div>

									<div className='space-y-4'>
										<h3 className='text-xl font-semibold'>{t('cabinetMinistry')}:</h3>
										<ul className='space-y-2'>
											{member?.ministry_list?.map((ministry, i) => (
												<li key={i} className='flex items-start gap-2'>
													<span className='text-primary'>•</span>
													<Link
														href={ministry?.external_url}
														target='_blank'
														className='text-muted-foreground hover:text-primary transition-colors'
													>
														{language === 'en' ? ministry?.ministry_name_en : ministry?.ministry_name_bn}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
}

const CabinetListSkeleton: React.FC = () => {
	return (
		<div className='space-y-4'>
			{Array.from({ length: 3 }).map((_, index) => (
				<div key={index} className='border border-border/90 rounded-xl'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4 space-x-4 animate-pulse'>
						<div className='bg-gray-300 rounded-xl h-[250px] w-full' />
						<div className='space-y-3'>
							<div className='h-10 bg-gray-300 rounded w-full' />
							<div className='h-5 bg-gray-300 rounded w-2/3' />
							<br />
							<div className='h-5 bg-gray-300 rounded w-1/3' />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
