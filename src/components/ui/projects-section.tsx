import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      category: "FULL STACK DEVELOPER / TECH LEAD",
      title: "Refy: AI powered mortgage broker",
      technologies: ["nextjs", "typescript", "graphql", "apollo", "react"],
      description: "Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Refy mortgage broker application dashboard"
    },
    {
      category: "FULL STACK DEVELOPER / TECH LEAD",
      title: "Glee Factor",
      technologies: ["gleefactor", "gatsby", "typescript", "redux", "wordpress", "JavaScript", "google pay"],
      description: "I took their existing wordpress site and turned it into a headless CMS with React on the frontend. The site features e-commerce, downloads and a seamless bilingual experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Glee Factor e-commerce website",
      reversed: true
    },
    {
      category: "FULL STACK DEVELOPER / TECH LEAD",
      title: "ING Creatives",
      technologies: ["ing", "ingcreatives", "gatsby", "shopify", "JavaScript"],
      description: "I built the latest version of the site to improve speed and performance. It features statically generated pages, cloud image resizing and a custom CMS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "ING Creatives agency website"
    },
    {
      category: "PERSONAL PROJECT",
      title: "Moving day",
      technologies: ["movingday", "montreal", "react", "JavaScript", "google maps"],
      description: "Looking for an apartment in Montreal is quite a pain. Since Kijiji doesn't provide a public API, I made one that runs on a local server.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Moving Day apartment finder application",
      reversed: true
    },
    {
      category: "PERSONAL PROJECT",
      title: "Wodly: Home fitness app",
      technologies: ["react", "firebase", "JavaScript"],
      description: "Save your home workouts and display them in a friendly manner. Share with your friends!",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Wodly home fitness application"
    }
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
                  
                  <button className="inline-flex items-center px-6 py-3 bg-portfolio-primary text-white rounded-full font-medium hover:bg-portfolio-accent transition-colors">
                    View project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
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
