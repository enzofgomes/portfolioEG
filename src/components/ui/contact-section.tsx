import { ArrowRight } from "lucide-react";

export default function ContactSection() {

  return (
    <section id="contact" className="relative z-10 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-portfolio-text mb-8">
          Let's have a<br />
          <span className="text-portfolio-primary">chat</span>
        </h2>
        
        <div className="mb-12">
          <a 
            href="mailto:contact@example.com" 
            className="text-2xl md:text-3xl text-portfolio-muted hover:text-portfolio-text transition-colors mb-8 block"
          >
            contact@example.com
          </a>
          
          <a 
            href="mailto:contact@example.com" 
            className="inline-flex items-center px-8 py-4 bg-portfolio-primary text-white rounded-full font-medium text-lg hover:bg-portfolio-accent transition-colors"
          >
            Get in touch
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-semibold text-portfolio-text mb-6">
            Send me a message
          </h3>
          <p className="text-portfolio-muted mb-6">
            Contact form coming soon! For now, please reach out directly via email.
          </p>
        </div>
      </div>
    </section>
  );
}
