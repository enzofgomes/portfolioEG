import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
  };

  return (
    <footer className="relative z-10 bg-portfolio-text text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Portfolio</h4>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer specializing in modern web technologies and user-centered design.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => handleNavigation('about')} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('skills')} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavigation('projects')} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Portfolio. Built with passion and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
