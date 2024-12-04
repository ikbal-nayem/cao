import Loading from '@/components/ui/loading';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const NewsHero = dynamic(() => import('@/components/news/news-hero'), {
  loading: () => <Loading />,
});

const NewsList = dynamic(() => import('@/components/news/news-list'), {
  loading: () => <Loading />,
});

export default function NewsPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <NewsHero />
        <NewsList />
      </Suspense>
    </main>
  );
}