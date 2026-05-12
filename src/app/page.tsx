import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Hero } from "@/components/portfolio/Hero";
import { MarqueeStrip } from "@/components/portfolio/MarqueeStrip";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <div className="font-body relative min-h-screen bg-surface-50 text-surface-900">
      <div
        className="noise-overlay pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />

      <SiteNav />

      <main>
        <Hero />
        <MarqueeStrip />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
