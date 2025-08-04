import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import FloatingClouds from "@/components/ui/floating-clouds";

export default function HeroSection() {
  return (
    <section className="relative z-10 py-20 md:py-32 overflow-hidden">
      <FloatingClouds />
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-text mb-8 leading-tight">
            Hi,<br />
            I'm <span className="text-portfolio-primary">Enzo</span><br />
            <span className="font-sans font-normal text-3xl md:text-4xl">Software</span>
            <span className="font-sans font-normal text-3xl md:text-4xl">Developer</span>
          </h1>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/enzofgomes" 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/enzo-gomes07" 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors text-xl"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-lg md:text-xl text-portfolio-muted max-w-2xl mx-auto leading-relaxed">
            Nice to meet you! <br />
            I am always looking to learn new technologies to expand my skill set in building innovative software 🤓
          </p>
        </div>
      </div>
    </section>
  );
}
