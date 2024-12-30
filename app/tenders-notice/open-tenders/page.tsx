'use client';

import { useTanderList } from '@/api/notice';
import { useLanguage } from '@/components/language/language-context';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useTranslation } from '@/hooks/use-translation';
import { ITender } from '@/interface/notice.interface';
import { isNull, makePreviewURL } from '@/lib/utils';
import { format } from 'date-fns';
import { bn, enUS } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { Calendar, FileText, ScanEye } from 'lucide-react';
import { useRef, useState } from 'react';

export default function OpenTendersPage() {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const { data: tenders } = useTanderList();
	const { t, tNumber } = useTranslation();
	const { language } = useLanguage();
	const previewFile = useRef({ file: '', title: '' });

	const handlePreview = (title: string, file: string) => {
		previewFile.current = { file, title };
		setIsPreviewOpen(true);
	};

	return (
		<main className='min-h-screen pt-24'>
			<div className='cotNumberntainer mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h1 className='text-4xl font-bold mb-6'>{t('menu.openTenders')}</h1>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>{t('openTenderSubtitle')}</p>
				</motion.div>

				<div className='space-y-8'>
					{tenders?.data?.map((tender: ITender, index: number) => (
						<motion.div
							key={tender.reference}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors'
						>
							<div className='flex items-start justify-between gap-4'>
								<div className='flex-1'>
									<div className='flex items-center gap-4 mb-3'>
										<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm uppercase'>
											{tender.tender_type}
										</span>
										<span className='text-sm text-muted-foreground'>
											{t('reference')}: {tender.reference}
										</span>
									</div>
									<h3 className='text-xl font-bold mb-2 flex items-center gap-2'>
										<FileText className='w-5 h-5 text-primary' />
										{language === 'en' ? tender.title_en : tender.title_bn}
									</h3>
									<p className='text-muted-foreground mb-4'>
										{language === 'en' ? tender.description_en : tender.description_bn}
									</p>

									<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
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
												<div className='text-sm font-medium'>{t('closingDate')}</div>
												<div className='text-sm text-muted-foreground'>
													{tNumber(
														format(tender.closing_date, 'MMMM dd, yyyy', {
															locale: language === 'en' ? enUS : bn,
														})
													)}
												</div>
											</div>
										</div>
										{!isNull(tender?.budget) && (
											<div className='flex items-center gap-2'>
												<span className='text-primary'>৳</span>
												<div>
													<div className='text-sm font-medium'>{t('estimatedBudget')}</div>
													<div className='text-sm text-muted-foreground'>{tender?.budget} BDT</div>
												</div>
											</div>
										)}
									</div>
								</div>
								<Button
									variant='outline'
									size='sm'
									className='text-primary shrink-0'
									onClick={() =>
										handlePreview(
											language === 'en' ? tender.title_en : tender.title_bn,
											tender?.document?.[0]?.relativepath
										)
									}
								>
									<ScanEye className='w-4 h-4 sm:mr-2' />
									<div className='hidden sm:inline'>{t('preview')}</div>
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			<Dialog open={isPreviewOpen} onOpenChange={() => setIsPreviewOpen(false)}>
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
