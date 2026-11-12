import FeaturedProjectsSection from "@/components/sections/FeaturedProjectSections";
import IntroSection from "@/components/sections/IntroSection";
import StackMarquee from "@/components/sections/StackMarquee";
import TunnelIntro from "@/components/sections/TunnelIntro";
import ProfessionalJourneySection from "@/components/sections/ProfessionalJourneySection";
import ProfileShowcaseSection from "@/components/sections/ProfileShowcaseSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <TunnelIntro />

      <main>
        <IntroSection />
        <StackMarquee />
        <ProfileShowcaseSection />
        <FeaturedProjectsSection />
        <ProfessionalJourneySection />
        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
}
