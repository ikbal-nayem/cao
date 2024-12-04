import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeroSection from '../components/home/hero-section';
import Loading from '../components/ui/loading';

const LeadershipSection = dynamic(() => import('@/components/home/leadership/leadership-section'), {
	loading: () => <Loading />,
});

const StatsSection = dynamic(() => import('@/components/home/stats-section'), {
	loading: () => <Loading />,
});

const NewsSection = dynamic(() => import('@/components/home/news-section'), {
	loading: () => <Loading />,
});

const PrioritiesSection = dynamic(() => import('@/components/home/priorities-section'), {
	loading: () => <Loading />,
});

const PartnersSection = dynamic(() => import('@/components/home/partners/partners-section'), {
	loading: () => <Loading />,
});

export default function Home() {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<HeroSection />
				<LeadershipSection />
				<StatsSection />
				<NewsSection />
				<PrioritiesSection />
				<PartnersSection />
			</Suspense>
		</main>
	);
}
