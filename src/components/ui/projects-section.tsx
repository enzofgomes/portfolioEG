import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      category: "Personal Project",
      title: "Stock Tracker",
      technologies: ["Python", "Flask", "API Integration", "CSS", "JavaScript", "HTML"],
      description: "A Flask-based web application that allows users to search for detailed stock market data using the Yahoo Finance API. Built with Python and Flask, the app retrieves real-time stock information and displays it in a clean, user-friendly interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Refy mortgage broker application dashboard",
      link: ""
    },
    {
      category: "Personal Project",
      title: "Glee Factor",
      technologies: ["gleefactor", "gatsby", "typescript", "redux", "wordpress", "JavaScript", "google pay"],
      description: "I took their existing wordpress site and turned it into a headless CMS with React on the frontend. The site features e-commerce, downloads and a seamless bilingual experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Glee Factor e-commerce website",
      link: "#",
      reversed: true
    },
    {
      category: "Personal Project",
      title: "ING Creatives",
      technologies: ["ing", "ingcreatives", "gatsby", "shopify", "JavaScript"],
      description: "I built the latest version of the site to improve speed and performance. It features statically generated pages, cloud image resizing and a custom CMS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "ING Creatives agency website",
      link: "#"
    },
    {
      category: "PERSONAL PROJECT",
      title: "Moving day",
      technologies: ["movingday", "montreal", "react", "JavaScript", "google maps"],
      description: "Looking for an apartment in Montreal is quite a pain. Since Kijiji doesn't provide a public API, I made one that runs on a local server.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Moving Day apartment finder application",
      link: "#",
      reversed: true
    },
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
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-portfolio-primary text-white rounded-full font-medium hover:bg-portfolio-accent transition-colors"
                  >
                    View project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
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
