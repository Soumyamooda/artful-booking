import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedArtists } from "@/components/FeaturedArtists";
import { CategorySection } from "@/components/CategorySection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroCarousel />
      <StatsSection />
      <FeaturedArtists />
      <CategorySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
