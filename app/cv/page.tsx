"use client";

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CVPage() {
  const [showCV, setShowCV] = useState(false)

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Curriculum Vitae</h1>
          <div className="flex justify-center gap-4">
            {/* Download PDF */}
            <a href="/CV_EvanRama.pdf" download>
              <Button className="bg-accent hover:bg-accent/90">Download PDF</Button>
            </a>
            {/* View CV */}
            <Button
              variant="outline"
              className="bg-transparent"
              onClick={() => setShowCV(true)}
            >
              View CV
            </Button>
          </div>
        </div>

        {/* Personal Info */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src="/professional-headshot.png"
                alt="Professional headshot"
                className="w-32 h-32 rounded-full border-4 border-accent/20"
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Evan Rama Firjatullah</h2>
                <p className="text-xl text-accent mb-4">Software Engineering Student</p>
                <div className="space-y-1 text-card-foreground">
                  <p>evan.firjatullah@binus.ac.id</p>
                  <p>+62 813-1854-5947</p>
                  <p>Kota Bekasi, Indonesia</p>
                  <p>https://www.linkedin.com/in/evan-rama-firjatullah-142785306/</p>
                  <p>https://github.com/Evan-Rama</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Professional Summary</h3>
            <p className="text-card-foreground text-pretty leading-relaxed">
              A motivated fifth-semester Computer Science student majoring in Software Engineering with a strong interest in building efficient and user-friendly software solutions. Skilled in programming, problem-solving, and working with modern development tools, with hands-on experience in academic projects and collaborative team environments. Eager to apply technical knowledge, learn new technologies, and contribute to innovative projects while developing both professional and personal growth.

            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Organization Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-accent/20 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Documentation Staff Burncup</h4>
                    <p className="text-accent font-medium">Binus University</p>
                  </div>
                  <div className="text-muted-foreground">2025</div>
                </div>
              </div>

              <div className="border-l-2 border-accent/20 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Freshmen Partner</h4>
                    <p className="text-accent font-medium">Binus University</p>
                  </div>
                  <div className="text-muted-foreground">2024</div>
                </div>                
              </div>

              <div className="border-l-2 border-accent/20 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Freshmen Leader</h4>
                    <p className="text-accent font-medium">Binus University</p>
                  </div>
                  <div className="text-muted-foreground">2024</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Education</h3>
            <div className="border-l-2 border-accent/20 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold">Bachelor of Computer Science - Software Engineering</h4>
                  <p className="text-accent font-medium">Binus University</p>
                </div>
                <div className="text-muted-foreground">2023 - now</div>
              </div>
              <p className="text-card-foreground mb-2">GPA: 3.34/4.00</p>
              <p className="text-card-foreground">
                Relevant Coursework: Algorithms ,Data Structures, Software Engineering, Database Systems, Machine Learning, Human-Computer Interaction.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["C", "Python", "Java", "MySQL", "Cisco Networking"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Github", "Vercel", "Figma", "VSCode"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Leadership", "Public Speaking", "Problem Solving", "Collaboration"].map(
                    (skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "DQLab Data Analyst",
                "English Beelingua",
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-card-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Languages</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Indonesian</span>
                <span className="text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">English</span>
                <span className="text-muted-foreground">Conversational</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal for CV Image */}
        {showCV && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 max-w-2xl w-full relative">
              <button
                className="absolute top-2 right-2 text-black"
                onClick={() => setShowCV(false)}
              >
                ✕
              </button>
              <img
                src="CV_EvanRama.jpg"
                alt="CV Evan Rama Firjatullah"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
