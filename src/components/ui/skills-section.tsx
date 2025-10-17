export default function SkillsSection() {
  const technologies = [
    "TypeScript", "React", "Node.js", "Flask", "Next.js", "Vite", "CSS", "JavaScript", "Java", 
    "Python", "HTML", "PostgreSQL", "MySQL", "Docker", "Tailwind CSS"
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
              src="/assets/profile-picture.png" 
              alt="My picture" 
              className="w-64 h-64 rounded-2xl shadow-lg mx-auto lg:mx-0 mb-8 object-cover" 
            />
            
            <h3 className="font-serif text-2xl font-semibold text-portfolio-text mb-4">
              I love creating ✎𓂃
            </h3>
            <p className="text-portfolio-muted leading-relaxed mb-6">
              I'm a highly dedicated software developer currently completing my bachelor's degree in IT at Florida International University. 
              I have always had a deep fascination with how things worked. I started playing with computers when I was little, and since then
              I've been exploring the world of software. Making solutions has always felt second nature to me.
            </p>
            <a
            href="/about"
            className="text-portfolio-primary hover:text-portfolio-text transition-colors font-semibold"
            >
              Keep reading about me →
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}
