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
    },
    {
      title: "Freshmen Partner",
      company: "Binus University",
      period: "2024",
      description:
        "Guiding Student in creating BGA Project, help solve student’s campus problem and giving tips how to survive in campus.",
    },
    {
      title: "Freshmen Leader",
      company: "Binus University",
      period: "2024",
      description:
        "Guiding new students about life at binus, leading students in creating projects.",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Experience</h1>
          <p className="text-xl text-muted-foreground text-pretty">Organization Experience</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-accent rounded-full md:transform md:-translate-x-2"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-card-foreground mb-4 text-pretty">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Bachelor of Computer Science - Software Engineering</h3>
                <p className="text-accent font-semibold mb-2">Binus University</p>
                <p className="text-sm text-muted-foreground mb-4">2023 - now • GPA: 3.34/4.00</p>
                <p className="text-card-foreground text-pretty">
                  Focused on software engineering, algorithms, and web development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Relevant Coursework</h3>
                <ul className="space-y-2 text-card-foreground">
                  <li>• Algorithms</li>
                  <li>• Data Structure</li>
                  <li>• Software Engineering</li>
                  <li>• Database Systems</li>
                  <li>• Machine Learning</li>
                  <li>• Human-Computer Interaction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
