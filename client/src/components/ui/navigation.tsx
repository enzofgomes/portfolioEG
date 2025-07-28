import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-serif font-semibold text-xl text-portfolio-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-portfolio-text" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
