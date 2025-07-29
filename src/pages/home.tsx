import FloatingClouds from "@/components/ui/floating-clouds";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import SkillsSection from "@/components/ui/skills-section";
import ProjectsSection from "@/components/ui/projects-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-portfolio-text">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
