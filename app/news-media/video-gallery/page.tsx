'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { IVideoGallery } from '@/interface/news-media.interface';
import { axiosIns } from '@/config/axios';
import { useLanguage } from '@/components/language/language-context';
import { makePreviewURL } from '@/lib/utils';
import { format } from 'date-fns';
import { IFile } from '@/interface/common.interface';
import { bn, enUS } from 'date-fns/locale';
import PageTitle from '@/components/layout/page-title';

export default function VideoGalleryPage() {
	const [gallery, setGallery] = useState<Array<IVideoGallery>>([]);
	const [isLoading, setLoading] = useState<boolean>(true);
	const [selectedVideo, setSelectedVideo] = useState<IFile | null>(null);
	const { t, tNumber } = useTranslation();
	const { language } = useLanguage();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get('/get-video-gallery-list')
			.then((resp) => setGallery(resp.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<main className='min-h-screen pt-24'>
			<div className='container mx-auto px-4'>
				<PageTitle title={t('videoGallery')} subTitle={t('videoGallerySubtitle')} />

				{isLoading ? <VideoGallerySkeleton /> : null}

				{gallery?.map((group, groupIndex) => (
					<div key={group?.id} className='mb-16'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
							className='mb-8'
						>
							<h2 className='text-3xl font-bold mb-2'>
								{language === 'en' ? group.title_en : group.title_bn}
							</h2>
							<p className='text-muted-foreground'>
								{language === 'en' ? group.caption_en : group.caption_bn}
							</p>
						</motion.div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{group?.file_path?.map((video, videoIndex) => (
								<motion.div
									key={video?.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: (groupIndex + videoIndex) * 0.1 }}
									className='group cursor-pointer'
									onClick={() => setSelectedVideo(video)}
								>
									<div className='relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300'>
										<video
											src={makePreviewURL(video?.relativepath)}
											preload='metadata'
											className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
										/>
										<div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
											<div className='w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center'>
												<Play className='w-8 h-8 text-white' />
											</div>
										</div>
										{/* <div className='absolute bottom-4 right-4 px-2 py-1 rounded bg-black/70 text-white text-sm'>
											{video.duration}
										</div> */}
									</div>

									<div className='p-4'>
										<h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
											{language === 'en' ? video?.caption_en : video?.caption_bn}
										</h3>
										<p className='text-sm text-muted-foreground'>
											{tNumber(
												format(new Date(video?.upload_date), 'MMMM d, yyyy', {
													locale: language === 'en' ? enUS : bn,
												})
											)}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				))}

				<Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
					<DialogContent className='max-w-4xl p-0 border-0 bg-transparent'>
						{selectedVideo && (
							<div className='rounded-xl overflow-hidden aspect-video w-full'>
								<video
									className='w-full h-full'
									src={makePreviewURL(selectedVideo?.relativepath)}
									controls
									autoPlay
								>
									<source src={makePreviewURL(selectedVideo?.relativepath)} type='video/*' />
								</video>
								{/* <iframe
									width='100%'
									height='100%'
									src={makePreviewURL(selectedVideo?.relativepath)}
									// title={selectedVideo.title}
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe> */}
							</div>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</main>
	);
}

const VideoGallerySkeleton: React.FC = () => {
	return (
		<div className='space-y-10'>
			<div className='flex-1 space-y-5 animate-pulse'>
				<div className='h-7 bg-gray-300 rounded w-1/4' />
				<div className='h-5 bg-gray-300 rounded w-1/2' />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{Array.from({ length: 3 }).map((_, index) => (
					<div key={index} className='space-y-3 animate-pulse'>
						<div className='bg-gray-300 rounded-xl w-full h-52' />
						<div className='flex-1 space-y-4'>
							<div className='h-4 bg-gray-300 rounded w-1/2' />
							<div className='h-5 bg-gray-300 rounded w-1/3' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
