import Navbar from "@/components/ui/Navbar";
import ScrollyVideo from "@/components/features/hero/ScrollyVideo";
import HeroOverlay from "@/components/features/hero/HeroOverlay";
import ScrollIndicator from "@/components/features/hero/ScrollIndicator";
import AboutSplit from "@/components/features/about/AboutSplit";
import BeaconShowcase from "@/components/features/beacon/BeaconShowcase";
import ProjectsGrid from "@/components/features/projects/ProjectsGrid";
import TechRadar from "@/components/features/skills/TechRadar";
import MusicShowcase from "@/components/features/music/MusicShowcase";
import LinkedInBanner from "@/components/features/social/LinkedInBanner";
import ContactSection from "@/components/features/contact/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-void min-h-screen">
      <Navbar />
      <ScrollIndicator />

      {/*
        Scroll Container Height: 500vh
        This is the "track" that allows us to scroll through the animation.
      */}
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden relative">
          <ScrollyVideo />
          <HeroOverlay />
        </div>
      </div>

      <AboutSplit />
      <BeaconShowcase />
      <ProjectsGrid />
      <TechRadar />
      <MusicShowcase />
      <LinkedInBanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
