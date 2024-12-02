import HeroSection from "@/src/components/home/hero-section";
import ServicesSection from "@/src/components/home/services-section";
import StatsSection from "@/src/components/home/stats-section";
import NewsSection from "@/src/components/home/news-section";
import LeadershipSection from "@/src/components/home/leadership-section";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <LeadershipSection />
      <StatsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}