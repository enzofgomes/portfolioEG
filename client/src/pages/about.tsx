import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import FloatingClouds from "@/components/ui/floating-clouds";
import { Calendar, MapPin, Code, Heart } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About - Portfolio | Full Stack Developer";
  }, []);
  const milestones = [
    {
      year: "2010",
      title: "Started Programming",
      description: "Began my journey with computers at age 11, falling in love with the endless possibilities of code."
    },
    {
      year: "2015",
      title: "First Professional Project",
      description: "Built my first commercial website, discovering the joy of bringing ideas to life through technology."
    },
    {
      year: "2018",
      title: "Full Stack Developer",
      description: "Transitioned to full-stack development, mastering both frontend and backend technologies."
    },
    {
      year: "2020",
      title: "Tech Lead",
      description: "Led my first development team, learning the importance of mentorship and collaborative problem-solving."
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Continuing to explore new technologies while building scalable solutions for complex problems."
    }
  ];

  const interests = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Passionate about writing maintainable, readable code that stands the test of time."
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Believe that great technology should be invisible - intuitive and delightful to use."
    },
    {
      icon: MapPin,
      title: "Remote Collaboration",
      description: "Expert at building strong relationships and delivering results across distributed teams."
    },
    {
      icon: Calendar,
      title: "Continuous Learning",
      description: "Always exploring new frameworks, tools, and methodologies to stay at the cutting edge."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-portfolio-text">
      <FloatingClouds />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-portfolio-text mb-8">
              About <span className="text-portfolio-primary">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-muted leading-relaxed">
              A passionate software engineer with over a decade of experience building digital experiences that matter.
            </p>
          </div>
        </section>

        {/* Detailed Bio Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="Professional headshot" 
                  className="w-full max-w-md rounded-2xl shadow-xl mx-auto object-cover" 
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-portfolio-text mb-6">
                  My Journey
                </h2>
                <div className="space-y-6 text-portfolio-muted leading-relaxed">
                  <p>
                    I started playing with computers when I was 11 years old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.
                  </p>
                  <p>
                    What fascinates me most about software development is the intersection of creativity and logic. Every project is a puzzle waiting to be solved, and every solution opens doors to new possibilities. I believe that the best software is built when technical excellence meets genuine empathy for the people who will use it.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or perfecting my Neapolitan pizza recipe. I'm a firm believer that the best ideas often come when you step away from the screen.
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
              Professional Timeline
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
              What Drives Me
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
              "Great software isn't just about the code you write—it's about the problems you solve and the people whose lives you make a little bit better."
            </blockquote>
            <p className="text-portfolio-muted leading-relaxed max-w-2xl mx-auto">
              I believe in building software that not only works flawlessly but also brings joy to the people who use it. Every line of code is an opportunity to create something meaningful, and every project is a chance to push the boundaries of what's possible.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}