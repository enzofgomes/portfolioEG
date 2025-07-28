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
      <section id="about" className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-portfolio-text mb-8">
            About <span className="text-portfolio-primary">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-portfolio-muted leading-relaxed mb-8">
            I'm a passionate software engineer with over a decade of experience building digital experiences that matter. 
            I started playing with computers when I was 11 years old, and since then I've been exploring technologies 
            across music, photography, engineering, automation, and more.
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors font-medium text-lg"
          >
            Read my full story →
          </a>
        </div>
      </section>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
