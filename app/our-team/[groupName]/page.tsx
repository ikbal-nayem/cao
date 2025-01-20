'use client';

import { useOurTeamGrpList, useOurTeamList } from '@/api/who-we-are';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { ROUTES } from '@/constants/routes.constants';
import { useLanguage } from '@/context/language/language-context';
import { IOurStaffs, IStaffMember } from '@/interface/administration.interface';
import { IObject } from '@/interface/common.interface';
import { makePreviewURL, makeSlug } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { use, useState } from 'react';

type OurtTeamProps = {
	params: Promise<{ groupName: string }>;
};

export default function OurTeamPage({ params }: OurtTeamProps) {
	const { groupName } = use(params);

	const [selectedStaff, setSelectedStaff] = useState<IStaffMember | null>(null);
	const { data: ourTeamGrpList } = useOurTeamGrpList();
	const { data: ourTeam, isFetching } = useOurTeamList();
	const { language } = useLanguage();

	return (
		<>
			<section className='pb-24 bg-gradient-to-b from-background to-blue-950/10'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-wrap gap-4 my-10'>
						{ourTeamGrpList?.map((grp: IObject) => (
							<Link key={grp?.id} href={ROUTES.WHO_WE_ARE.OUR_TEAM + makeSlug(grp?.group_name_en)}>
								<Button
									variant={groupName === makeSlug(grp?.group_name_en) ? 'default' : 'outline'}
									className='px-4 py-2 rounded-xl'
								>
									{language === 'en' ? grp?.group_name_en : grp?.group_name_bn}
								</Button>
							</Link>
						))}
					</div>

					{isFetching && <StaffSkeleton />}
					{ourTeam?.map(
						(grp: IOurStaffs) =>
							(groupName === makeSlug(grp?.group_name_en) || groupName === 'all-officers') && (
								<section key={grp?.id}>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8 }}
										className='my-16'
									>
										<h2 className='text-4xl font-bold mb-4'>
											{language === 'en' ? grp?.group_name_en : grp?.group_name_bn}
										</h2>
									</motion.div>
									<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
										{grp?.staff_list?.map((member, index) => (
											<motion.div
												key={member?.id}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.5, delay: index * 0.1 }}
												className='group cursor-pointer'
												onClick={() => setSelectedStaff(member)}
											>
												<div className='relative h-[400px] rounded-2xl overflow-hidden'>
													<Image
														src={
															makePreviewURL(member?.photo_path?.[0]?.relativepath) ||
															DEFAULT_LINKS.BLANK_PROFILE
														}
														alt={language === 'en' ? member?.name_en : member.name_bn}
														fill
														className='object-cover transition-transform duration-300 group-hover:scale-105'
													/>
													<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
													<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
														<h3 className='text-base font-bold mb-1'>
															{language === 'en' ? member?.name_en : member.name_bn}
														</h3>
														<p className='text-sm text-blue-200 mb-2'>
															{language === 'en' ? member?.designation_en : member.designation_bn}
														</p>
														<div className='space-y-1'>
															{!!member?.email && (
																<p className='flex items-center text-xs text-blue-300'>
																	<Mail className='w-4 h-4 mr-2' />
																	{member.email}
																</p>
															)}
															{!!member?.contact_no && (
																<p className='flex items-center text-xs text-blue-300'>
																	<Phone className='w-4 h-4 mr-2' />
																	{member.contact_no}
																</p>
															)}
														</div>
													</div>
												</div>
											</motion.div>
										))}
									</div>
								</section>
							)
					)}
				</div>
			</section>

			<Dialog open={!!selectedStaff} onOpenChange={() => setSelectedStaff(null)}>
				<DialogContent className='max-w-3xl'>
					{selectedStaff && (
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div className='relative aspect-[3/4] rounded-lg overflow-hidden'>
								<Image
									src={
										makePreviewURL(selectedStaff?.photo_path?.[0]?.relativepath) ||
										DEFAULT_LINKS.BLANK_PROFILE
									}
									alt={language === 'en' ? selectedStaff.name_en : selectedStaff.name_bn}
									fill
									className='object-cover'
								/>
							</div>
							<div className='space-y-6'>
								<div>
									<h2 className='text-3xl font-bold'>
										{language === 'en' ? selectedStaff?.name_en : selectedStaff?.name_bn}
									</h2>
									<p className='text-xl text-primary'>
										{language === 'en' ? selectedStaff?.designation_en : selectedStaff?.designation_bn}
									</p>
									<p className='text-muted-foreground'>
										{language === 'en' ? selectedStaff?.office_en : selectedStaff?.office_bn}
									</p>
								</div>

								<div className='space-y-2'>
									<p className='flex items-center'>
										<Mail className='w-4 h-4 mr-2' />
										{selectedStaff.email}
									</p>
									{!!selectedStaff?.contact_no && (
										<p className='flex items-center'>
											<Phone className='w-4 h-4 mr-2' />
											{selectedStaff?.contact_no}
										</p>
									)}
								</div>

								<div>
									<h3 className='text-xl font-semibold mb-2'>Profile</h3>
									<p className='text-muted-foreground'>
										{language === 'en' ? selectedStaff.designation_en : selectedStaff.designation_bn}
									</p>
								</div>
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}

const StaffSkeleton: React.FC = () => {
	return (
		<div className='my-16 space-y-16 animate-pulse'>
			<div className='h-11 bg-gray-300 rounded mb-4 w-1/3' />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className='bg-gray-300 rounded-xl w-full h-[400px]' />
				))}
			</div>
		</div>
	);
};
