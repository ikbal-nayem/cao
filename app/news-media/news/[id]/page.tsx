import { NewsContent } from '@/components/news/news-content';
import { NewsHeader } from '@/components/news/news-header';
import { RelatedNews } from '@/components/news/related-news';
import { axiosIns } from '@/config/axios';
import { notFound } from 'next/navigation';

interface NewsDetailsPageProps {
	params: {
		id: string;
	};
}

export default async function NewsDetailsPage({ params }: NewsDetailsPageProps) {

	const newsItemReq = await axiosIns.get('/get-news-event-detail-by-id?eventid=' + params.id);
	const newsItem = newsItemReq.data;

	if (!newsItem) {
		notFound();
	}

	return (
		<main className='min-h-screen py-24'>
			<div className='container px-4 mx-auto'>
				<NewsHeader item={newsItem} />
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12'>
					<NewsContent descriptionEn={newsItem?.content_en} descriptionBn={newsItem?.content_bn} />
					<RelatedNews currentNewsId={newsItem.id} category={newsItem?.news_category} />
				</div>
			</div>
		</main>
	);
}
