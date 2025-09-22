import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Documentation Staff Burncup",
      company: "Binus University",
      period: "2025",
      description:
        "Documentation Staff and Cameraman for BurnCup, responsible for capturing event activities and producing promotional materials including trailers and teasers.",
      icon: "📸",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Photography", "Video Editing", "Event Documentation"]
    },
    {
      title: "Freshmen Partner",
      company: "Binus University", 
      period: "2024",
      description:
        "Guiding Student in creating BGA Project, help solve student's campus problem and giving tips how to survive in campus.",
      icon: "🤝",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Mentoring", "Project Management"]
    },
    {
      title: "Freshmen Leader",
      company: "Binus University",
      period: "2024",
      description:
        "Guiding new students about life at binus, leading students in creating projects.",
      icon: "👑",
      gradient: "from-orange-500 to-yellow-500",
      skills: ["Leadership", "Team Management", "Public Speaking"]
    },
  ]

  return (
    <div className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg dark:animated-bg-dark opacity-90 z-[-2]"></div>
      <div className="fixed inset-0 particles z-[-1]"></div>

      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-20 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text sparkle">
            💼 Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl text-accent font-medium">
            My journey in organizations and leadership roles ✨
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary rounded-full md:transform md:-translate-x-0.5 shadow-lg"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 md:mb-20 slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Enhanced Timeline dot */}
              <div className={`absolute left-2 md:left-1/2 w-8 h-8 bg-gradient-to-r ${exp.gradient} rounded-full md:transform md:-translate-x-4 timeline-dot flex items-center justify-center text-white font-bold shadow-xl z-10`}>
              </div>

              

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <Card className="enhanced-card border-0 hover:shadow-2xl transition-all duration-500 hover-float group overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold gradient-text group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                            <span className="text-3xl">{exp.icon}</span>
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-accent mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2">
                          <Badge className={`bg-gradient-to-r ${exp.gradient} text-white border-0 px-3 py-1 text-sm font-medium`}>
                            📅 {exp.period}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-card-foreground mb-6 text-pretty leading-relaxed text-lg">
                        {exp.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🛠️ Key Skills Developed:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary" 
                              className="bg-white/10 text-card-foreground border border-white/20 hover:bg-white/20 transition-colors duration-300 px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
            🎓 Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Education Card */}
            <Card className="enhanced-card border-0 hover-float group overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">Bachelor of Computer Science</h3>
                      <p className="text-accent font-semibold">Software Engineering</p>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-accent mb-2">Binus University</p>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1">
                      📅 2023 - Present
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 px-3 py-1">
                      📊 GPA: 3.34/4.00
                    </Badge>
                  </div>
                  
                  <p className="text-card-foreground text-pretty leading-relaxed">
                    Focused on software engineering principles, algorithms, and modern web development technologies.
                  </p>
                  
                </div>
              </CardContent>
            </Card>

            {/* Coursework Card */}
            <Card className="enhanced-card border-0 hover-float group overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">Relevant Coursework</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      "Algorithms",
                      "Data Structure", 
                      "Software Engineering",
                      "Database Systems",
                      "Machine Learning",
                      "Human-Computer Interaction"
                    ].map((course, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                        <span className="text-card-foreground font-medium">{course}</span>
                      </div>
                    ))}
                  </div>

                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-32 left-5 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-4 h-4 bg-accent rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-10 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-primary rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-5 opacity-25 animate-ping" style={{ animationDelay: '1.5s' }}>
          <div className="w-3 h-3 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  )
}