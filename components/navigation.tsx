"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "About", href: "/about", icon: "👨‍💻" },
  { name: "Experience", href: "/experience", icon: "💼" },
  { name: "Projects", href: "/projects", icon: "🚀" },
  { name: "Certificates", href: "/certificates", icon: "🏆" },
  { name: "CV", href: "/cv", icon: "📄" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
      isScrolled 
        ? "bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-2xl" 
        : "bg-transparent backdrop-blur-sm border-b border-white/10"
    )}>
      <div className="container flex h-20 items-center justify-between relative">
        {/* Enhanced background overlay for better blur effect */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isScrolled 
            ? "bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 opacity-100" 
            : "bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-teal-900/10 opacity-60"
        )}></div>
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group relative z-10">
          <div className="relative">
            <div className={cn(
              "w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110",
              isScrolled ? "shadow-accent/30" : "shadow-accent/20"
            )}>
              <span className="text-xl font-bold text-white">E</span>
            </div>
            <div className={cn(
              "absolute -inset-2 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500",
              isScrolled ? "opacity-50" : "opacity-30"
            )}></div>
          </div>
          <div>
            <span className={cn(
              "text-2xl font-bold gradient-text pl-2 transition-all duration-300",
              isScrolled ? "drop-shadow-lg" : ""
            )}>
              Portfolio
            </span>
            <div className={cn(
              "text-xs opacity-60 pl-2 transition-all duration-300",
              isScrolled ? "text-white/80" : "text-card-foreground"
            )}>
              Evan Rama Firjatullah
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 mr-4 relative z-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105",
                pathname === item.href 
                  ? cn(
                      "bg-gradient-to-r from-accent to-primary text-white shadow-xl backdrop-blur-sm",
                      isScrolled ? "shadow-accent/50" : "shadow-accent/30"
                    )
                  : cn(
                      "hover:bg-white/20 hover:text-accent backdrop-blur-sm",
                      isScrolled ? "text-white/90 hover:bg-white/30" : "text-card-foreground hover:bg-white/10"
                    )
              )}
            >
              {/* Enhanced active indicator */}
              {pathname === item.href && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl animate-pulse opacity-20"></div>
                  <div className={cn(
                    "absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-20 transition-opacity duration-300",
                    isScrolled ? "opacity-30" : "opacity-20"
                  )}></div>
                </>
              )}
              
              <span className="relative z-10 flex items-center gap-2">
                {item.name}
              </span>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
          ))}
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden relative z-10">
          <Button variant="ghost" size="sm" className={cn(
            "p-3 rounded-2xl transition-all duration-300 hover:scale-110",
            isScrolled 
              ? "bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20" 
              : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
          )}>
            <div className="space-y-1">
              <div className={cn(
                "w-6 h-0.5 rounded-full transition-all duration-300",
                isScrolled 
                  ? "bg-gradient-to-r from-accent to-primary shadow-lg" 
                  : "bg-gradient-to-r from-accent to-primary"
              )}></div>
              <div className={cn(
                "w-6 h-0.5 rounded-full transition-all duration-300",
                isScrolled 
                  ? "bg-gradient-to-r from-primary to-secondary shadow-lg" 
                  : "bg-gradient-to-r from-primary to-secondary"
              )}></div>
              <div className={cn(
                "w-6 h-0.5 rounded-full transition-all duration-300",
                isScrolled 
                  ? "bg-gradient-to-r from-secondary to-accent shadow-lg" 
                  : "bg-gradient-to-r from-secondary to-accent"
              )}></div>
            </div>
          </Button>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className={cn(
            "absolute top-3 left-1/4 w-2 h-2 bg-accent/40 rounded-full transition-all duration-500",
            isScrolled ? "animate-pulse opacity-60" : "animate-pulse opacity-30"
          )}></div>
          <div className={cn(
            "absolute top-5 right-1/3 w-1 h-1 bg-primary/50 rounded-full transition-all duration-500",
            isScrolled ? "animate-ping opacity-50" : "animate-ping opacity-30"
          )}></div>
          <div className={cn(
            "absolute bottom-4 left-2/3 w-1.5 h-1.5 bg-secondary/40 rounded-full transition-all duration-500",
            isScrolled ? "animate-bounce opacity-40" : "animate-bounce opacity-20"
          )}></div>
        </div>

        {/* Subtle gradient line at bottom */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-50"
        )}></div>
      </div>
    </header>
  )
}
  