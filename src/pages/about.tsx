import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Calendar, MapPin, Code, Heart } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Enzo Gomes";
  }, []);
  const milestones = [
    {
      year: "2018",
      title: "Started Learning Programming",
      description: "Began my journey with programming at age 14, falling in love with the endless possibilities of code."
    },
    {
      year: "2022",
      title: "Began my Bachelor's Degree in IT",
      description: "Started my formal education in Information Technology deepening my understanding of software development with the coursework."
    },
    {
      year: "2024",
      title: "Participated in my First Team Project",
      description: "Transitioned my focus to full-stack development, apliying both frontend and backend technologies."
    },
    {
      year: "2025",
      title: "Research Lab",
      description: "Learned the importance of mentorship and collaborative problem-solving in a real-life scenario."
    },
    {
      year: "2025",
      title: "Portfolio Expansion",
      description: "Worked in a series of personal projects to showcase myskills and creativity"
    }
  ];

  const interests = [
    {
      icon: Code,
      title: "Teamwork",
      description: "Writing maintainable, readable code along with a professional team."
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Building a user focused experience with clean UI Designs."
    },
    {
      icon: MapPin,
      title: "Remote Collaboration",
      description: "Building strong relationships across spaces."
    },
    {
      icon: Calendar,
      title: "Continuous Learning",
      description: "Always exploring new frameworks, tools to stay at the cutting edge."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-portfolio-text">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-portfolio-text mb-8">
              About <span className="text-portfolio-primary">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-muted leading-relaxed">
             I like to come up with a solution to every problem I face.
            </p>
          </div>
        </section>

        {/* Detailed Bio Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="public/assets/profile-picture.png"
                  alt="My picture"
                  className="w-full max-w-md rounded-2xl shadow-xl mx-auto object-cover" 
                />
              </div>
              <div>
                <div className="space-y-6 text-portfolio-muted leading-relaxed">
                  <p>
                    I'm a highly dedicated software developer currently completing my bachelor's degree in IT at Florida International University. I have always had a deep
                    fascination with how things worked. I started 
                    playing with computers when I was little, and since then I've been exploring the world of software. Making solutions has always felt second nature to me.
                  </p>
                  <p>
                    What fascinates me the most about software development are the edless possibilities. Every project is a puzzle waiting to be solved, and door 
                    to new learning opportunities. 
                    I believe that the best software is the one built with genuine empathy for the people who will use it.
                  </p>
                  <p>
                    In my free time, away from the screen, I like to enjoy myself by playing some music, reading random curiosities or just relaxing with my friends
                    and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-portfolio-text mb-16 text-center">
              My Journey
            </h2>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-portfolio-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-portfolio-text mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-portfolio-muted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Interests */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-portfolio-text mb-16 text-center">
              What Interests Me
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-portfolio-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-portfolio-text mb-3">
                      {interest.title}
                    </h3>
                    <p className="text-portfolio-muted leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Personal Philosophy */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-portfolio-text mb-8">
              My Philosophy
            </h2>
            <blockquote className="text-xl md:text-2xl text-portfolio-muted leading-relaxed italic mb-8">
              "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
            </blockquote>
            <p className="text-portfolio-muted leading-relaxed max-w-2xl mx-auto">
               I believe the best developers aren’t born experts, they become great by diving into challenges they weren’t yet ready for and figuring 
               things out along the way. To me, every problem is an opportunity to grow, every bug is a lesson, and every project is a chance to create
               something that matters.            
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}