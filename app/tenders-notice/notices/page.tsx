'use client';

import { useNoticeList } from '@/api/notice';
import { useLanguage } from '@/components/language/language-context';
import PageTitle from '@/components/layout/page-title';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Pagination } from '@/components/ui/pagination';
import { SearchBar } from '@/components/ui/SearchBar';
import { useTranslation } from '@/hooks/use-translation';
import { INotice } from '@/interface/notice.interface';
import { debounce, formatFileSize, isNull, makePreviewURL } from '@/lib/utils';
import { format } from 'date-fns';
import { bn, enUS } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Download, FileText, ScanEye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CategoryFilter } from './category-filter';

const ITEMS_PER_PAGE = 10;

export default function NoticesPage() {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const previewFile = useRef({ file: '', title: '' });
	const { data: notices } = useNoticeList(
		currentPage,
		ITEMS_PER_PAGE,
		searchQuery,
		selectedCategory as string
	);

	const { t, tNumber } = useTranslation();
	const { language } = useLanguage();

	useEffect(() => {
		setCurrentPage(1);
	}, [searchQuery, selectedCategory]);

	const handlePreview = (title: string, file: string) => {
		previewFile.current = { file, title };
		setIsPreviewOpen(true);
	};

	const handleClosePreview = () => {
		setIsPreviewOpen(false);
	};

	const totalPages = Math.ceil(notices?.totalRecords / ITEMS_PER_PAGE);

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('noticeTitle')} subTitle={t('noticeSubtitle')} />

				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
					<div className='md:col-span-3'>
						<div className='mb-6'>
							<SearchBar
								placeholder={t('noticeSearch')+' ...'}
								defaultValue={searchQuery}
								onChange={debounce((val) => setSearchQuery(val), 500)}
							/>
						</div>

						<div className='space-y-6'>
							{notices?.data?.map((notice: INotice, index: number) => (
								<motion.div
									key={notice?.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='bg-card border border-border/60 rounded-lg p-3 hover:border-primary/50 hover:shadow-md transition-colors'
								>
									<div className='flex items-start justify-between gap-4'>
										<div className='flex-1'>
											<div className='flex items-center gap-4 mb-3'>
												<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm uppercase'>
													{notice.notice_type}
												</span>
												<span className='text-sm text-muted-foreground'>
													{tNumber(
														format(new Date(notice.notice_date), 'MMMM d, yyyy', {
															locale: language === 'en' ? enUS : bn,
														})
													)}
												</span>
											</div>
											<h3 className='text-xl font-bold mb-2 flex items-center gap-2'>
												<FileText className='w-5 h-5 text-primary hidden sm:inline' />
												{language === 'en' ? notice.title_en : notice.title_bn}
											</h3>
											<p className='text-muted-foreground mb-4'>
												{language === 'en' ? notice?.description_en : notice?.description_bn}
											</p>
											{!isNull(notice?.document?.[0]?.relativepath) && (
												<div className='text-sm text-muted-foreground'>
													{t('fileSize')}: {formatFileSize(notice?.document?.[0]?.filesize)}
												</div>
											)}
										</div>
										{!isNull(notice?.document?.[0]?.relativepath) && (
											<div className='flex flex-col gap-2'>
												<Button
													variant='outline'
													size='sm'
													className='text-primary shrink-0'
													onClick={() =>
														handlePreview(
															language === 'en' ? notice.title_en : notice.title_bn,
															notice?.document?.[0]?.relativepath
														)
													}
												>
													<ScanEye className='w-4 h-4 sm:mr-2' />
													<div className='hidden sm:inline'>{t('preview')}</div>
												</Button>
												<Button variant='outline' size='sm' className='text-green-600 shrink-0'>
													<Download className='w-4 h-4 sm:mr-2' />
													<div className='hidden sm:inline'>{t('download')}</div>
												</Button>
											</div>
										)}
									</div>
								</motion.div>
							))}
						</div>

						{totalPages > 1 && (
							<div className='mt-8'>
								<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
							</div>
						)}
					</div>

					<div className='md:col-span-1'>
						<CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
					</div>
				</div>
			</div>

			<Dialog open={isPreviewOpen} onOpenChange={handleClosePreview}>
				<DialogContent className='max-w-5xl p-0 border-none'>
					<h4 className='pt-3 pl-3 font-bold mb-0'>{previewFile.current?.title}</h4>
					<object
						data={makePreviewURL(previewFile.current?.file) + '#toolbar=0&navpanes=0'}
						type='application/pdf'
						title='Preview'
						className='w-full h-[80vh]'
					/>
				</DialogContent>
			</Dialog>
		</main>
	);
}
