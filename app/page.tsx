import {
  AboutSection,
  FeaturesSection,
  HeroSection,
} from "@/components/shared";
import { MarketingShell } from "@/components/layout";

export default function Home() {
  return (
    <MarketingShell>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </MarketingShell>
  );
}
