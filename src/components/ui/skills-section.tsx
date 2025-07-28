export default function SkillsSection() {
  const technologies = [
    "TypeScript", "AWS", "React", "Go", "Java", "Node.js", 
    "Python", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", 
    "Firebase", "WordPress", "Shopify", "HTML", "CSS"
  ];

  return (
    <section id="skills" className="relative z-10 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-portfolio-text mb-8">
              My<br />
              <span className="text-portfolio-primary">Skills</span>
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="tech-tag px-4 py-2 bg-portfolio-secondary text-white rounded-full text-sm font-medium cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Professional headshot" 
              className="w-64 h-64 rounded-2xl shadow-lg mx-auto lg:mx-0 mb-8 object-cover" 
            />
            
            <h3 className="font-serif text-2xl font-semibold text-portfolio-text mb-4">
              I love building stuff 📱
            </h3>
            <p className="text-portfolio-muted leading-relaxed mb-6">
              I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-portfolio-primary hover:text-portfolio-secondary transition-colors font-medium"
            >
              Keep reading my bio →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
