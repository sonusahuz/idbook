import GSTLanding from '@/components/gst-landing';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
import ThatMore from '@/components/thats-more';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ThatMore />
      <GSTLanding />
    </div>
  );
}
