import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Me</h1>
          <p className="text-xl text-muted-foreground text-pretty">Get to know the person behind the code</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/professional-headshot.png"
              alt="About me"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hello, I'm Evan Rama Firjatullah</h2>
            <p className="text-card-foreground mb-4 text-pretty">
              A Binus University student majoring in Computer Science - Software Engineering who is passionate and responsible to bring positive energy to the professional world. With an educational background in computer science, I have gained an understanding of computer science and the practical skills needed to thrive in the working world.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/experience">View My Experience</Link>
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Soft Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Public Speaking</h3>
                <p className="text-card-foreground text-pretty">
                  The ability to express ideas clearly and confidently in front of an audience, inspiring and engaging listeners through effective communication.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">L</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership</h3>
                <p className="text-card-foreground text-pretty">
                  The skill to guide, motivate, and influence others toward achieving common goals while making thoughtful decisions and setting a positive example.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
                <p className="text-card-foreground text-pretty">
                  The capacity to collaborate effectively with others, valuing diverse perspectives and working together to accomplish shared objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-card rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Hard Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3"></h3>
              <ul className="space-y-2 text-card-foreground">
                <li>• MySQL</li>
                <li>• C Programming Language</li>
                <li>• Cisco Networking</li>
                <li>• HTML</li>
                <li>• CSS</li>
                <li>• Figma</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3"></h3>
              <ul className="space-y-2 text-card-foreground">
                <li>• Python</li>
                <li>• Java</li>
                <li>• JavaScript</li>
                <li>• Machine Learning</li>
                <li>• Git</li>
                <li>• Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
