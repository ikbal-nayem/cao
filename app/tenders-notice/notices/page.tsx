'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Download, FileText, ScanEye } from 'lucide-react';
import { useState } from 'react';

const notices = [
	{
		title: 'Dr. Khalilur Rahman, High Representative to the Chief Adviser',
		date: '2024-12-15',
		category: 'GO',
		description: '',
		file: 'https://cao.gov.bd/sites/default/files/files/cao.portal.gov.bd/notices/821ed99f_aed6_44c1_bbca_978e185e77dc/go_usa_hr-rohingya_khalilur-1193_151224.pdf',
		fileSize: '1.2 MB',
	},
	{
		title: 'Mohammad Mizanur Rahman, Deputy Director, NSDA +3',
		date: '2024-12-15',
		category: 'GO',
		description: '',
		file: 'https://cao.gov.bd/sites/default/files/files/cao.portal.gov.bd/notices/713f1d97_f54b_47d9_94fb_f6119c13ff96/go_nepal_dd_NSDA_mizanur-156_151224.pdf',
		fileSize: '850 KB',
	},
	{
		title: 'Md. Hasmat Ali, Office Assistant cum-computer typist',
		date: '2024-12-08',
		category: 'Ex Bangladesh leave',
		description: 'Treatment [India] [Md. Hasmat Ali, Office Assistant cum-computer typist] – 1157',
		file: 'https://cao.gov.bd/sites/default/files/files/cao.portal.gov.bd/notices/12e32458_9a52_4cca_8adb_56f27a444cf2/ex_bdlv_india_cao_hasmat-1157_081224.pdf',
		fileSize: '500 KB',
	},
];

export default function NoticesPage() {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [previewFile, setPreviewFile] = useState('');

	const handlePreview = (file: string) => {
		setPreviewFile(file);
		setIsPreviewOpen(true);
	};

	const handleClosePreview = () => {
		setIsPreviewOpen(false);
	};

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h1 className='text-4xl font-bold mb-6'>Notices</h1>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Stay updated with the latest notices, announcements, and circulars from the Chief Adviser&apos;s
						Office
					</p>
				</motion.div>

				<div className='space-y-6'>
					{notices.map((notice, index) => (
						<motion.div
							key={notice.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors'
						>
							<div className='flex items-start justify-between gap-4'>
								<div className='flex-1'>
									<div className='flex items-center gap-4 mb-3'>
										<span className='px-3 py-1 rounded-full bg-primary/10 text-primary text-sm'>
											{notice.category}
										</span>
										<span className='text-sm text-muted-foreground'>
											{format(notice.date, 'MMMM d, yyyy')}
										</span>
									</div>
									<h3 className='text-xl font-bold mb-2 flex items-center gap-2'>
										<FileText className='w-5 h-5 text-primary hidden sm:inline' />
										{notice.title}
									</h3>
									<p className='text-muted-foreground mb-4'>{notice.description}</p>
									<div className='text-sm text-muted-foreground'>File size: {notice.fileSize}</div>
								</div>
								<div className='flex flex-col gap-2'>
									<Button
										variant='outline'
										size='sm'
										className='text-primary shrink-0'
										onClick={() => handlePreview(notice.file)}
									>
										<ScanEye className='w-4 h-4 mr-2' />
										<div className='hidden sm:inline'>Preview</div>
									</Button>
									<Button variant='outline' size='sm' className='text-green-600 shrink-0'>
										<Download className='w-4 h-4 mr-2' />
										<div className='hidden sm:inline'>Download</div>
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			<Dialog open={isPreviewOpen} onOpenChange={handleClosePreview}>
				<DialogContent className='max-w-5xl p-0 border-none'>
					<h4 className='pt-3 pl-3 font-bold mb-0'>Notice</h4>
					<iframe src={previewFile + '#toolbar=0&navpanes=0'} title='Preview' className='w-full h-[80vh]' />
				</DialogContent>
			</Dialog>
		</main>
	);
}
