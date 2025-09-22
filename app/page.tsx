import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const projects = [
  {
    title: "Medipath App",
    description: "Create a health web and android application that can provide health advice to users.",
    image: "/medipathfull.png",
  },
  {
    title: "Health Detector",
    description: "Create a health detector for heart disease using the XGBoost machine learning method.",
    image: "/heartdiseaseprediction.png",
  },
  {
    title: "VSTravel Website",
    description: "Create a travel website project using HTML, CSS, and JavaScript.",
    image: "/vstravel2.png",
  },
]
  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg dark:animated-bg-dark opacity-90 z-[-2]"></div>
      <div className="fixed inset-0 particles z-[-1]"></div>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative min-h-screen flex items-center">
        <div className="container mx-auto max-w-4xl">
          {/* Floating Profile Image */}
          <div className="mb-8 slide-in-up">
            <div className="relative inline-block">
              <img
                src="/professional-headshot.png"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-accent/50 shadow-2xl hover-float hover-glow enhanced-card"
              />
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
              <div className="absolute inset-[-10px] rounded-full border border-secondary/20 animate-pulse"></div>
            </div>
          </div>

          {/* Animated Text */}
          <div className="slide-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Hello, I'm{" "}
              <span className="gradient-text sparkle">
                Evan Rama Firjatullah
              </span>
            </h1>
          </div>
          
          <div className="slide-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-8 animate-pulse">
              ✨ Software Engineering Student ✨
            </p>
          </div>

          <div className="slide-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-card-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
              Passionate and responsible to bring positive energy to the professional world. 
              With an educational background in computer science, I have gained an understanding 
              of computer science and the practical skills needed to thrive in the working world.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-up" style={{ animationDelay: '0.8s' }}>
            <Button asChild size="lg" className="enhanced-button text-lg px-8 py-4 rounded-full">
              <Link href="/projects" className="flex items-center gap-2">
                🚀 View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass-effect text-lg px-8 py-4 rounded-full hover:bg-white/20 border-2 border-accent/50">
              <Link href="/about" className="flex items-center gap-2">
                💫 About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="enhanced-card rounded-3xl p-8 mb-8">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              🏆 Achievements Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="hover-float">
                <div className="text-6xl font-bold gradient-text mb-2 stat-number">2+</div>
                <p className="text-card-foreground text-lg">Years Experience</p>
                <div className="text-3xl mt-2">📚</div>
              </div>
              <div className="hover-float" style={{ animationDelay: '0.2s' }}>
                <div className="text-6xl font-bold gradient-text mb-2 stat-number">5+</div>
                <p className="text-card-foreground text-lg">Projects Completed</p>
                <div className="text-3xl mt-2">🎨</div>
              </div>
              <div className="hover-float col-span-2 md:col-span-1" style={{ animationDelay: '0.4s' }}>
                <div className="text-6xl font-bold gradient-text mb-2 stat-number">6+</div>
                <p className="text-card-foreground text-lg">Certifications</p>
                <div className="text-3xl mt-2">🏅</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
            🌟 Featured Projects
          </h2>
          <p className="text-xl text-center text-card-foreground mb-16">
            Discover my latest creations and innovations
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Card key={i} className="project-card group border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-0 flex flex-col h-full relative">
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full bg-gradient-to-br from-card to-card/80 relative z-10">
                    <h3 className="text-2xl font-bold mb-3 gradient-text group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-card-foreground mb-6 text-pretty leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="enhanced-button w-full rounded-full border-2 border-accent/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <Link href="/projects" className="flex items-center gap-2">
                        🎯 Explore Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="enhanced-button text-lg px-10 py-4 rounded-full">
              <Link href="/projects" className="flex items-center gap-2">
                🚀 View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Preview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Core Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Frontend", icon: "🎨", color: "from-blue-500 to-purple-500" },
              { name: "Backend", icon: "⚙️", color: "from-green-500 to-teal-500" },
              { name: "Design", icon: "🎯", color: "from-pink-500 to-rose-500" },
              { name: "Machine Learning", icon: "🧠", color: "from-orange-500 to-yellow-500" }
            ].map((skill, index) => (
              <div key={skill.name} className="hover-float hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="enhanced-card p-6 rounded-2xl text-center group cursor-pointer">
                  <div className={`w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{skill.icon}</span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg" className="enhanced-button text-lg px-10 py-4 rounded-full">
              <Link href="/about" className="flex items-center gap-2">
                💫 View All Skills
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-5 opacity-20">
          <div className="w-4 h-4 bg-accent rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-10 right-5 opacity-20">
          <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 left-0 opacity-20">
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="enhanced-card p-12 rounded-3xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent via-primary to-secondary"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                🚀 Ready to Collaborate?
              </h2>
              <p className="text-xl text-card-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on new projects 
                and explore innovative solutions together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="enhanced-button text-lg px-10 py-4 rounded-full">
                  <Link href="/cv" className="flex items-center gap-2">
                    📄 Download CV
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Floating Decorative Elements */}
      <div className="absolute top-1/4 right-10 opacity-30 animate-float">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-1/4 left-20 opacity-25 animate-pulse">
        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full blur-md"></div>
      </div>
      <div className="absolute top-3/4 left-10 opacity-20 animate-bounce">
        <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
      </div>
    </div>
  )
}