'use client';

import { PhotoGroupCard } from '@/components/gallery/photo-group-card';
import { PhotoPreview } from '@/components/gallery/photo-preview';
import { useLanguage } from '@/components/language/language-context';
import { axiosIns } from '@/config/axios';
import { DEFAULT_LINKS } from '@/constants/common.constant';
import { useTranslation } from '@/hooks/use-translation';
import { IImageGallery } from '@/interface/news-media.interface';
import { makePreviewURL } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PhotoGalleryPage() {
	const [photoGroups, setPhotoGroups] = useState<IImageGallery[]>([]);
	const [selectedGroup, setSelectedGroup] = useState<IImageGallery | null>(null);
	const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
	const [isLoading, setLoading] = useState<boolean>(true);
	const { language } = useLanguage();
	const { t } = useTranslation();

	useEffect(() => {
		setLoading(true);
		axiosIns
			.get('/get-image-gallery-list')
			.then((resp) => setPhotoGroups(resp?.data))
			.finally(() => setLoading(false));
	}, []);

	const recentPhotos = photoGroups
		?.flatMap((group) =>
			group.file_path.map((photo) => ({
				...photo,
				caption: language === 'en' ? group.caption_en : group.caption_bn,
			}))
		)
		.slice(0, 5);

	return (
		<main className='min-h-screen py-24'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h1 className='text-4xl font-bold mb-6'>{t('photoGallery')}</h1>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>{t('photoGallerySubtitle')}</p>
				</motion.div>

				{/* Recent Photos Slider */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='mb-16'
				>
					<Swiper
						modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
						effect='coverflow'
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						navigation
						pagination={{ clickable: true }}
						loop={true}
						className='aspect-[21/9] rounded-2xl overflow-hidden'
					>
						{recentPhotos.map((photo, index) => (
							<SwiperSlide key={index}>
								<div className='relative w-full h-full'>
									<Image
										src={makePreviewURL(photo.relativepath) || DEFAULT_LINKS.NOT_AVAILABLE}
										alt={photo.caption}
										fill
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
									<div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
										{/* <h3 className='text-3xl font-bold mb-2'>{photo.groupTitle}</h3> */}
										<p className='text-lg text-gray-200'>{photo.caption}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>

				{/* Photo Groups Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{photoGroups.map((group, index) => (
						<PhotoGroupCard
							key={group?.id}
							description={language === 'en' ? group.caption_en : group.caption_bn}
							coverImage={
								makePreviewURL(group.thumbnail_path?.[0].relativepath) || DEFAULT_LINKS.NOT_AVAILABLE
							}
							photoCount={group.file_path?.length}
							onClick={() => {
								setSelectedGroup(group);
								setSelectedPhotoIndex(0);
							}}
							index={index}
						/>
					))}
				</div>

				{selectedGroup && (
					<PhotoPreview
						isOpen={!!selectedGroup}
						onClose={() => setSelectedGroup(null)}
            caption={language === 'en' ? selectedGroup.caption_en : selectedGroup.caption_bn}
						photos={selectedGroup.file_path}
						currentIndex={selectedPhotoIndex}
						onIndexChange={setSelectedPhotoIndex}
					/>
				)}
			</div>
		</main>
	);
}
