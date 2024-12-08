'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeroSection from '../components/home/hero-section';
import Loading from '../components/ui/loading';

const LeadershipSection = dynamic(
  () => import('@/components/home/leadership/leadership-section'),
  {
    loading: () => <Loading />,
  }
);

const MissionVisionSection = dynamic(
  () => import('@/components/home/mission-vision-section'),
  {
    loading: () => <Loading />,
  }
);

const NewsSection = dynamic(() => import('@/components/home/news-section'), {
  loading: () => <Loading />,
});

const PrioritiesSection = dynamic(
  () => import('@/components/home/priorities-section'),
  {
    loading: () => <Loading />,
  }
);

const EmergencyContacts = dynamic(
  () => import('@/components/home/emergency-contacts'),
  {
    loading: () => <Loading />,
  }
);

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <LeadershipSection />
        <MissionVisionSection />
        <NewsSection />
        <PrioritiesSection />
        <EmergencyContacts />
      </Suspense>
    </main>
  );
}
