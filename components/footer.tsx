import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Name */}
          <h3 className="text-lg font-semibold text-foreground">Evan Rama Firjatullah</h3>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="mailto:john.doe@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">evan.firjatullah@binus.ac.id</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/evan-rama-firjatullah-142785306/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/Evan-Rama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-border w-full">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Evan Rama Firjatullah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
