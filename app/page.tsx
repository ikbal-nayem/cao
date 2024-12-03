import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/ui/loading';

// Dynamic imports with loading fallbacks
const Header = dynamic(() => import('@/components/layout/header'), {
  loading: () => <Loading />
});

const HeroSection = dynamic(() => import('@/components/home/hero-section'), {
  loading: () => <Loading />
});

// const ServicesSection = dynamic(() => import('../components/home/services-section'), {
//   loading: () => <Loading />
// });

const LeadershipSection = dynamic(() => import('@/components/home/leadership/leadership-section'), {
  loading: () => <Loading />
});

const StatsSection = dynamic(() => import('@/components/home/stats-section'), {
  loading: () => <Loading />
});

const NewsSection = dynamic(() => import('@/components/home/news-section'), {
  loading: () => <Loading />
});

const PartnersSection = dynamic(() => import('@/components/home/partners/partners-section'), {
  loading: () => <Loading />
});

const Footer = dynamic(() => import('@/components/layout/footer'), {
  loading: () => <Loading />
});

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Header />
        <HeroSection />
        {/* <ServicesSection /> */}
        <LeadershipSection />
        <StatsSection />
        <NewsSection />
        <PartnersSection />
        <Footer />
      </Suspense>
    </main>
  );
}