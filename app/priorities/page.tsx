import Loading from '@/components/ui/loading';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const PrioritiesHero = dynamic(() => import('@/components/priorities/priorities-hero'), {
	loading: () => <Loading />,
});

const PrioritiesList = dynamic(() => import('@/components/priorities/priorities-list'), {
	loading: () => <Loading />,
});

export default function PrioritiesPage() {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<PrioritiesHero />
				<PrioritiesList />
			</Suspense>
		</main>
	);
}
