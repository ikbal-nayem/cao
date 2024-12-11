import Loading from '@/components/ui/loading';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Overview = dynamic(() => import('@/components/about/overview-section'), {
	loading: () => <Loading />,
});

const Biography = dynamic(() => import('@/components/about/biography-section'), {
	loading: () => <Loading />,
});

const Organization = dynamic(() => import('@/components/about/organization-section'), {
	loading: () => <Loading />,
});

const ExecutiveOffices = dynamic(() => import('@/components/about/executive-offices-section'), {
	loading: () => <Loading />,
});

export default function AboutPage() {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<Overview />
				<Biography />
				<Organization />
				<ExecutiveOffices />
			</Suspense>
		</main>
	);
}
