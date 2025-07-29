import { ArrowRight, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      category: "Personal Project",
      title: "Stock Tracker",
      technologies: ["Python", "Flask", "API Integration", "CSS", "JavaScript", "HTML"],
      description: "A Flask-based web application that allows users to search for detailed stock market data using the Yahoo Finance API. Built with Python and Flask, the app retrieves real-time stock information and displays it in a clean, user-friendly interface.",
      image: "assets/Stock-tracker.png",
      imageAlt: "Stock Tracker APP screenshot",
      link: "https://stocktracker-dcyg.onrender.com",
      githubLink: "https://github.com/enzofgomes/StockTracker"
    },
    {
      category: "Personal Project",
      title: "Asteroidz.io",
      technologies: ["JavaScript", "HTML"],
      description: "A browser-based version of the classic Asteroids arcade game, built entirely with vanilla JavaScript, HTML5 Canvas, and custom audio effects. The game features smooth animations, collision detection, modular code structure, and an interactive start menu.",
      image: "assets/Asteroids-game.png",
      imageAlt: "Asteroids game screenshot",
      link: "https://asteroids-java-script-azfqje1bw-enzofgomes-projects.vercel.app",
      githubLink: "https://github.com/enzofgomes/Asteroids_JavaScript",
      reversed: true
    },
    // {
     // category: "Personal Project",
     // title: "#",
     // technologies: [],
     // description: "#",
     // image: "#",
     // imageAlt: "#",
     // link: "#",
     // githubLink: "#"
    // },
    // {
     // category: "Personal Project",
     // title: "#",
     // technologies: [],
     // description: "#",
     // image: "#",
     // imageAlt: "#",
     // link: "#",
     // githubLink: "#",
     // reversed: true
    // },
  ];

  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-portfolio-text mb-16 text-center">
          Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-2xl p-8 shadow-lg">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${project.reversed ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={project.reversed ? 'lg:col-start-2' : ''}>
                  <p className="text-portfolio-muted text-sm font-medium uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-portfolio-text mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-portfolio-secondary text-white rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-portfolio-muted leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-portfolio-primary text-white rounded-full font-medium hover:bg-portfolio-accent transition-colors"
                    >
                      View project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-portfolio-text font-medium hover:text-portfolio-primary transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />                     
                    </a>
                  </div>
                </div>
                
                <div className={project.reversed ? 'lg:col-start-1' : ''}>
                  <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
