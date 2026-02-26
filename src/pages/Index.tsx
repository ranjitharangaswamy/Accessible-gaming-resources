import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import WhyItMatters from '@/components/WhyItMatters';
import ResourcesSection from '@/components/ResourcesSection';
import FooterSection from '@/components/FooterSection';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <AccessibilityToolbar />
      <HeroSection />
      <StatsBar />
      <WhyItMatters />
      <ResourcesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
