import FeaturedProjectsSection from "@/components/sections/FeaturedProjectSections";
import HeroSection from "@/components/sections/HeroSection";
import ProfessionalJourneySection from "@/components/sections/ProfessionalJourneySection";
import ProfileShowcaseSection from "@/components/sections/ProfileShowcaseSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <HeroSection />
        <ProfileShowcaseSection />
        <FeaturedProjectsSection />
        <ProfessionalJourneySection />
        <ContactFormSection />
      </main>
    </>
  );
}
