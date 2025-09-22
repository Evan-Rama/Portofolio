"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X } from "lucide-react"

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const certificates = [
    {
      title: "Data Analyst",
      issuer: "DQLab",
      credentialId: "#DQLABBDASPGPB17BWMEHN",
      description:
        "",
      skills: ["SQL", "Python"],
      image: "/sertif1.png",
      verifyUrl: "#",
    },
    {
      title: "English B-Level",
      issuer: "Beelingua",
      credentialId: "2024-B-feorrv9wgKv76",
      description:
        "",
      skills: ["English"],
      image: "/sertif2.png",
      verifyUrl: "#",
    },
    {
      title: "Freshmen Leader",
      issuer: "Binus University",
      credentialId: "2025",
      description:
        "",
      skills: ["Leadership"],
      image: "/sertif7.png",
      verifyUrl: "#",
    },
    {
      title: "English C-Level",
      issuer: "Beelingua",
      credentialId: "2024-C-K67efBO4nlDdi",
      description:
        "",
      skills: ["English"],
      image: "/sertif3.png",
      verifyUrl: "#",
    },
    {
      title: "English C1.2-Level",
      issuer: "Beelingua",
      credentialId: "2024-C-sz47Yn4gimKfl",
      description:
        "",
      skills: ["English"],
      image: "/sertif4.png",
      verifyUrl: "#",
    },
    {
      title: "English C2.1-Level",
      issuer: "Beelingua",
      credentialId: "2024-C-cYmPSa8SfBosX",
      description:
        "",
      skills: ["English"],
      image: "/sertif5.png",
      verifyUrl: "#",
    },
    {
      title: "English C2.2-Level",
      issuer: "Beelingua",
      credentialId: "2024-C-DNd0j0yPElq6i",
      description:
        "",
      skills: ["English"],
      image: "/sertif6.png",
      verifyUrl: "#",
    },
    {
      title: "Certificate Of Appreciation",
      issuer: "NUNI",
      credentialId: "2024",
      description:
        "",
      skills: ["Seminar"],
      image: "/sertif10.png",
      verifyUrl: "#",
    },
    {
      title: "1st Winner Mobile Legends Campus Tournament",
      issuer: "Mie Sedap",
      credentialId: "2023",
      description:
        "",
      skills: ["E-Sport"],
      image: "/miesedap.png",
      verifyUrl: "#",
    },
    {
      title: "2nd Winner Mobile Legends Burncup Tournament",
      issuer: "Binus University",
      credentialId: "2023",
      description:
        "",
      skills: ["E-Sport"],
      image: "/bc1.jpg",
      verifyUrl: "#",
    },
    {
      title: "Cracking the Code: How Business Analysts is Shaping the Workfore of Tomorrow",
      issuer: "Binus University",
      credentialId: "2023",
      description:
        "",
      skills: ["Seminar"],
      image: "/sertif8.png",
      verifyUrl: "#",
    },
    {
      title: "A Holistic Perspective on Accessibility, Inclusion and Design for All",
      issuer: "Binus University",
      credentialId: "2023",
      description:
        "",
      skills: ["Seminar"],
      image: "/sertif9.png",
      verifyUrl: "#",
    },
    {
      title: "Best Short Movie Competition",
      issuer: "Global Islamic School",
      credentialId: "2021",
      description:
        "",
      skills: ["Videography"],
      image: "/alter.jpg",
      verifyUrl: "#",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Certificates & Achievements</h1>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">{certificates.length}</div>
            <div className="text-muted-foreground">Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2025</div>
            <div className="text-muted-foreground">Latest Year</div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{cert.title}</h3>
                  <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">ID: {cert.credentialId}</p>

                  <p className="text-card-foreground mb-4 text-pretty">{cert.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-accent/10 text-accent text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">{selectedCertificate.title}</h2>
              <Button variant="ghost" size="sm" onClick={() => setSelectedCertificate(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <div className="text-center">
                <img
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
                <div className="mt-6 space-y-2">
                  <p className="text-lg font-semibold">{selectedCertificate.issuer}</p>
                  <p className="text-sm text-muted-foreground">ID: {selectedCertificate.credentialId}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
