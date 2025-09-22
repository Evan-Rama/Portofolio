import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg dark:animated-bg-dark opacity-90 z-[-2]"></div>
      <div className="fixed inset-0 particles z-[-1]"></div>

      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-20 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text sparkle">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl text-accent font-medium">
            Get to know the person behind the code ✨
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="slide-in-left">
            <div className="relative group">
              <img
                src="/professional-headshot.png"
                alt="About me"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl enhanced-card hover-float transition-all duration-500 group-hover:shadow-accent/20"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full opacity-40 animate-ping"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="slide-in-right">
            <div className="enhanced-card p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                👋 Hello, I'm Evan Rama Firjatullah
              </h2>
              <p className="text-card-foreground mb-6 text-pretty leading-relaxed text-lg">
                A Binus University student majoring in Computer Science - Software Engineering who is passionate and responsible to bring positive energy to the professional world. With an educational background in computer science, I have gained an understanding of computer science and the practical skills needed to thrive in the working world.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl">
                  <div className="text-2xl font-bold gradient-text">3.34</div>
                  <div className="text-sm text-card-foreground">GPA</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl">
                  <div className="text-2xl font-bold gradient-text">2023</div>
                  <div className="text-sm text-card-foreground">Started</div>
                </div>
              </div>
              
              <Button asChild className="enhanced-button w-full text-lg py-3 rounded-full">
                <Link href="/experience" className="flex items-center justify-center gap-2">
                  View My Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
            🌟 Soft Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎤",
                title: "Public Speaking",
                description: "The ability to express ideas clearly and confidently in front of an audience, inspiring and engaging listeners through effective communication.",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: "👑",
                title: "Leadership",
                description: "The skill to guide, motivate, and influence others toward achieving common goals while making thoughtful decisions and setting a positive example.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: "🤝",
                title: "Teamwork",
                description: "The capacity to collaborate effectively with others, valuing diverse perspectives and working together to accomplish shared objectives.",
                gradient: "from-pink-500 to-orange-500"
              }
            ].map((skill, index) => (
              <Card key={index} className="enhanced-card border-0 overflow-hidden group hover-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{skill.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:text-accent transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-card-foreground text-pretty leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hard Skills Section */}
        <div className="enhanced-card p-10 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">
            💎 Hard Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              {[
                { name: "MySQL"},
                { name: "C Programming"},
                { name: "Cisco Networking"},
                { name: "HTML"},
                { name: "CSS"},
                { name: "Figma"},
                { name: "Ms Office"}
              ].map((skill, index) => (
                <div key={index} className="hover-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-card-foreground flex items-center gap-3">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {[
                { name: "Python"},
                { name: "Java"},
                { name: "JavaScript"},
                { name: "Machine Learning"},
                { name: "Git"},
                { name: "Vercel"}
              ].map((skill, index) => (
                <div key={index} className="hover-float" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-card-foreground flex items-center gap-3">
                      {skill.name}
                    </span>
                    
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="enhanced-button text-lg px-10 py-4 rounded-full">
              <Link href="/projects" className="flex items-center gap-2">
                🚀 See Skills in Action
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-5 opacity-30">
          <div className="w-4 h-4 bg-accent rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-6 h-6 bg-primary rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-1/2 right-0 opacity-25">
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}