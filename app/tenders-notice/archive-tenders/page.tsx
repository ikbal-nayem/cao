'use client';

import { useTanderList } from '@/api/notice';
import { useLanguage } from '@/components/language/language-context';
import PageTitle from '@/components/layout/page-title';
import NoDataFound from '@/components/ui/no-data-found';
import { Pagination } from '@/components/ui/pagination';
import { useTranslation } from '@/hooks/use-translation';
import { ITender } from '@/interface/notice.interface';
import { format } from 'date-fns';
import { bn, enUS } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Calendar, FileText, User } from 'lucide-react';
import { useState } from 'react';

const ITEMS_PER_PAGE = 10;

export default function ArchiveTendersPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const { data: tenders, isFetching } = useTanderList(currentPage, ITEMS_PER_PAGE, 'closed');
	const { t, tNumber } = useTranslation();
	const { language } = useLanguage();

	const totalPages = Math.ceil(tenders?.totalRecords / ITEMS_PER_PAGE);

	return (
		<main className='min-h-screen pt-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('menu.archiveTenders')} subTitle={t('archivedTenderSubtitle')} />

				<div className='space-y-8'>
					{!isFetching && tenders?.data?.length === 0 ? <NoDataFound /> : null}

					{tenders?.data?.map((tender: ITender, index: number) => (
						<motion.div
							key={tender.reference}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-card border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-colors'
						>
							<div className='space-y-4'>
								<div className='flex items-center gap-4'>
									<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm'>
										{tender?.tender_type}
									</span>
									<span className='text-sm text-muted-foreground'>
										{t('reference')}: {tender.reference}
									</span>
								</div>

								<h3 className='text-xl font-bold flex items-center gap-2'>
									<FileText className='w-5 h-5 text-primary' />
									{language === 'en' ? tender.title_en : tender.title_bn}
								</h3>

								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
									<div className='flex items-center gap-2'>
										<Calendar className='w-4 h-4 text-primary' />
										<div>
											<div className='text-sm font-medium'>{t('published')}</div>
											<div className='text-sm text-muted-foreground'>
												{tNumber(
													format(new Date(tender.publish_date), 'MMMM dd, yyyy', {
														locale: language === 'en' ? enUS : bn,
													})
												)}
											</div>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										<Calendar className='w-4 h-4 text-primary' />
										<div>
											<div className='text-sm font-medium'>{t('closedDate')}</div>
											<div className='text-sm text-muted-foreground'>
												{tNumber(
													format(tender.closing_date, 'MMMM dd, yyyy', {
														locale: language === 'en' ? enUS : bn,
													})
												)}
											</div>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										<Calendar className='w-4 h-4 text-primary' />
										<div>
											<div className='text-sm font-medium'>{t('awardedDate')}</div>
											<div className='text-sm text-muted-foreground'>{tender?.awarded_date}</div>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										<User className='w-4 h-4 text-primary' />
										<div>
											<div className='text-sm font-medium'>{t('awardedTo')}</div>
											<div className='text-sm text-muted-foreground'>{tender?.awarded_to}</div>
										</div>
									</div>
								</div>

								<div className='pt-4 border-t border-border/50'>
									<div className='text-sm'>
										<span className='font-medium'>{t('contractValue')}:</span>{' '}
										<span className='text-muted-foreground'>{tender?.contact_value} BDT</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			{totalPages > 1 && (
				<div className='mt-8'>
					<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
				</div>
			)}
		</main>
	);
}
