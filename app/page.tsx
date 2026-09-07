import FeaturedProjectsSection from "@/components/sections/FeaturedProjectSections";
import HeroSection from "@/components/sections/HeroSection";
import ProfessionalJourneySection from "@/components/sections/ProfessionalJourneySection";
import ProfileShowcaseSection from "@/components/sections/ProfileShowcaseSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProfileShowcaseSection />
      <FeaturedProjectsSection />
      <ProfessionalJourneySection />
      <ContactFormSection />
    </main>
  );
}
