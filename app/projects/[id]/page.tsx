import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData = {
  "medipath": {
    title: "Medipath App",
    description:
      "Create a health web and android application that can provide health advice to users.",
    longDescription:
      "Developed a comprehensive health web and Android application that provides personalized health advice to users, integrating user-friendly interfaces and reliable health information delivery.",
    technologies: ["Flutter", "Figma"],
    features: [
      "Homepage",
      "Login",
      "Signup",
      "Chat With AI",
      "Location Services",
      "News & Articles",
      "Personal Information",
    ],
    liveUrl: "https://www.figma.com/proto/qCEQB1fOq8NnWTn4662N0p/SoftwareEngineering-Project?content-scaling=fixed&kind=proto&node-id=281-627&page-id=0%3A1&scaling=scale-down&starting-point-node-id=4%3A2",
    githubUrl: "https://github.com/NotchG/medipath",
    gallery: [
      "/medipathfull.png",
      "/medipathfull2.png",
      "/medipath3.png",
      "/medipath4.png",
      "/medipath5.png",
    ],
  },
  "healthdetector": {
    title: "Health Detector",
    description:
      "Create a health detector for heart disease using the XGBoost machine learning method.",
    longDescription:
      "Built a health detection system for heart disease utilizing the XGBoost machine learning algorithm, focusing on predictive accuracy, data preprocessing, and model evaluation to support early diagnosis.",
    technologies: ["Machine Learning", "Python", "XGBoost", "Pandas", "Streamlit", "Supabase"],
    features: [
      "Heart Disease Prediction",
      "Form Input",
      "Save To Database",
      "View History",
    ],
    liveUrl: "https://drive.google.com/file/d/1ct85SUdPJ4BPa8gdFNDMTWbGnN5Yeb93/view",
    githubUrl: "https://github.com/gabriellaawidd/Health-Detector",
    gallery: [
      "/hd1.png",
      "/hd2.png",
      "/hd3.png",
      "/hd4.png",
      "/hd5.png",
      "/hd6.png",
    ],
  },
  "vstravel": {
    title: "VSTravel Website",
    description:
      "Create a travel website project using HTML, CSS, and JavaScript.",
    longDescription:
      "Created a fully functional travel website using HTML, CSS, and JavaScript, featuring interactive design elements and responsive layouts to enhance user experience across devices",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    features: [
      "HomePage",
      "Destination",
      "Contact Us",
      "About US",
      "Book",
    ],
    liveUrl: "https://vs-travel-website.vercel.app",
    githubUrl: "https://github.com/Evan-Rama/VSTravelWebsite",
    gallery: [
      "/vstravel.png",
      "/vstravel2.png",
      "/vstravel3.png",
      "/vstravel4.png",
      "/vstravel5.png",
      "/vstravel6.png",
    ],
  },
  "sweeneybarber": {
    title: "Sweeney Barber",
    description:
      "Create a website for haircuts, which includes membership and rewards features.",
    longDescription:
      "Designed and implemented a haircut service website with integrated membership and rewards features, enabling customer engagement and loyalty management.",
    technologies: ["Figma", "TypeScript"],
    features: [
      "Homepage",
      "View Haircuts",
      "About Us",
      "Contact Us",
      "Profile Page",
      "Membership",
    ],
    liveUrl: "https://sweeny-barbers.vercel.app/",
    githubUrl: "https://github.com/AditiyaMaulanaSandy/SweenyBarbers",
    gallery: [
      "/sb1.png",
      "/sb2.png",
      "/sb3.png",
      "/sb4.png",
      "/sb5.png",
      "/sb6.png",
    ],
  },
  "jarakjari": {
    title: "Jarak Jari",
    description:
      "Create a program to measure the distance of an object based on the tip of the fingers.",
    longDescription:
      "Programmed a distance measurement application that calculates the distance of an object based on fingertip detection, combining computer vision techniques with practical real-world usability.",
    technologies: ["Python", "Mediapipe", "CV2"],
    features: [
      "Use Camera",
      "Measure Distance",
    ],
    liveUrl: "https://docs.google.com/presentation/d/1UZacx62G531gdod9JaExNuKZRGSVQDOCpBzMz__SkP8/edit?slide=id.p#slide=id.p",
    githubUrl: "https://github.com/Evan-Rama/Jarak-Jari",
    gallery: [
      "/jarakjari.png",
      "/jarakjari2.png",
      "/jarakjari3.png",
    ],
  },
  "ciscoproject": {
    title: "Cisco Network Simulation Project",
    description:
      "Designed and simulated a Cisco-based enterprise network for a three-floor office building at BINUS University Bekasi.",
    longDescription:
      "Designed and simulated an enterprise-grade Cisco-based network infrastructure for a three-floor office building at BINUS University Bekasi, applying hierarchical network design principles.",
    technologies: ["Cisco Packet Tracer", "Network Design"],
    features: [
      "Star Topology",
      "Ring Topology",
      "Network Cost and Media Calculation",
      "IP Addressing and Subnetting",
    ],
    liveUrl: "https://www.canva.com/design/DAGYhWoFeeQ/UcfqyTjY9xoDRVPFu2eOOw/edit",
    githubUrl: "https://github.com/Evan-Rama/CiscoNetworkBinus",
    gallery: [
      "/cp1.png",
      "/cp2.png",
      "/cp3.png",
      "/cp4.png",
      "/cp5.png",
      "/cp6.png",
      "/cp7.png",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="hover:bg-accent">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">{project.longDescription}</p>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg group">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent/10 text-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
