import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (target: string) => {
    if (target === 'about') {
      // Navigate to about page using Wouter
      window.history.pushState({}, '', '/about');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      // For other sections, check if we're on home page
      if (location !== '/') {
        // Navigate to home page first, then scroll
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => scrollToSection(target), 100);
      } else {
        // We're on home page, just scroll
        scrollToSection(target);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="font-serif font-semibold text-xl text-portfolio-text hover:text-portfolio-primary transition-colors cursor-pointer">
              Portfolio
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('skills')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavigation('projects')} 
              className="text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
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
              onClick={() => handleNavigation('about')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('skills')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavigation('projects')} 
              className="block w-full text-left py-2 text-portfolio-muted hover:text-portfolio-text transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
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
