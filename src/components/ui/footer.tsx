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
        <div className="mx-auto w-fit">                    
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/enzofgomes" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/enzo-gomes07" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:enzoogo07@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Enzo Gomes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
