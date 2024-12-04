import { newsItems } from '@/lib/data';
import { NewsContent } from '@/components/news/news-content';
import { NewsHeader } from '@/components/news/news-header';
import { RelatedNews } from '@/components/news/related-news';
import { notFound } from 'next/navigation';

interface NewsDetailsPageProps {
  params: {
    id: string;
  };
}

export default function NewsDetailsPage({ params }: NewsDetailsPageProps) {
  const newsItem = newsItems[parseInt(params.id)];

  if (!newsItem) {
    notFound();
  }

  const relatedNews = newsItems
    .filter((item) => item.category === newsItem.category && item !== newsItem)
    .slice(0, 4);

  return (
    <main className="min-h-screen py-24">
      <div className="container px-4 mx-auto">
        <NewsHeader
          title={newsItem.title}
          date={newsItem.date}
          category={newsItem.category}
          image={newsItem.image}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <NewsContent description={newsItem.description} />
          <RelatedNews items={relatedNews} />
        </div>
      </div>
    </main>
  );
}