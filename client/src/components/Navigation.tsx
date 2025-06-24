import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "./ThemeProvider";
import { Brain, Menu, Moon, Sun, Zap, Shield, Palette, BarChart3, Code, Megaphone } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const techServices = [
    { icon: Zap, title: "Automation & AI", description: "Intelligent workflow automation", href: "/services/automation-ai" },
    { icon: Shield, title: "Cybersecurity", description: "Advanced threat protection", href: "/services/cybersecurity" },
    { icon: BarChart3, title: "Data Analytics", description: "Data-driven insights", href: "/services/data-analytics" },
    { icon: Code, title: "Software Development", description: "Custom applications", href: "/services#development" },
  ];

  const creativeServices = [
    { icon: Palette, title: "UI/UX Design", description: "User-centered design", href: "/services/ui-ux-design" },
    { icon: Megaphone, title: "Branding & Merch", description: "Brand identity systems", href: "/services/branding-merch" },
    { icon: BarChart3, title: "Social Media", description: "Strategic social growth", href: "/services#social" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-space gradient-text">InnofyAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold text-tech-blue dark:text-primary mb-4">Tech Solutions</h3>
                          <div className="space-y-3">
                            {techServices.map((service) => (
                              <NavigationMenuLink asChild key={service.title}>
                                <Link
                                  href={service.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                >
                                  <service.icon className="h-5 w-5 text-primary" />
                                  <div>
                                    <div className="font-medium text-foreground">{service.title}</div>
                                    <div className="text-sm text-muted-foreground">{service.description}</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-secondary mb-4">Creative & Growth</h3>
                          <div className="space-y-3">
                            {creativeServices.map((service) => (
                              <NavigationMenuLink asChild key={service.title}>
                                <Link
                                  href={service.href}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                >
                                  <service.icon className="h-5 w-5 text-secondary" />
                                  <div>
                                    <div className="font-medium text-foreground">{service.title}</div>
                                    <div className="text-sm text-muted-foreground">{service.description}</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Link href="/contact">
              <Button className="hidden sm:inline-flex gradient-bg border-0 text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gradient-bg border-0 text-white">
                      View Services
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
