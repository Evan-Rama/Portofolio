import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "medipath",
      title: "Medipath App",
      description:
        "Create a health web and android application that can provide health advice to users.",
      image: "/medipathfull.png",
    },
    {
      id: "healthdetector",
      title: "Health Detector",
      description:
        "Create a health detector for heart disease using the XGBoost machine learning method.",
      image: "/heartdiseaseprediction.png",
    },
    {
      id: "vstravel",
      title: "VSTravel Website",
      description:
        "Create a travel website project using HTML, CSS, and JavaScript.",
      image: "/vstravel2.png",
    },
    {
      id: "sweeneybarber",
      title: "Sweeney Barber",
      description:
        "Create a website for haircuts, which includes membership and rewards features.",
      image: "/sweeneyhome.png",
    },
    {
      id: "jarakjari",
      title: "Jarak Jari",
      description:
        "Create a program to measure the distance of an object based on the tip of the fingers.",
      image: "/jarakjari.png",
    },
    {
      id: "ciscoproject",
      title: "Cisco Network Simulation Project",
      description:
        "Designed and simulated a Cisco-based enterprise network for a three-floor office building at BINUS University Bekasi.",
      image: "/project-management-team.png?height=300&width=400&query=analytics dashboard charts",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">My Projects</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            A showcase of my work, featuring web applications, tools, and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-card-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                      <Link href={`/projects/${project.id}`}>View Project</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
