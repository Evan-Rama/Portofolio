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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <img
              src="/professional-headshot.png"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance whitespace-nowrap">
              Hello, I'm <span className="text-accent">Evan Rama Firjatullah</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Software Engineering Student
            </p>
            <p className="text-lg text-card-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Passionate and responsible to bring positive energy to the professional world. With an educational background in computer science, I have gained an understanding of computer science and the practical skills needed to thrive in the working world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-accent mb-2">2+</h3>
              <p className="text-card-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent mb-2">5+</h3>
              <p className="text-card-foreground">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent mb-2">1+</h3>
              <p className="text-card-foreground">Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Card key={i} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0 flex flex-col h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-card-foreground mb-4 text-pretty">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent mt-auto"
                    >
                      <Link href="/projects">View Projects</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-balance">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Frontend", "Backend", "Design", "Machine Learning"].map((skill) => (
              <div key={skill} className="p-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-semibold">{skill[0]}</span>
                </div>
                <h3 className="font-semibold text-foreground">{skill}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/about">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
