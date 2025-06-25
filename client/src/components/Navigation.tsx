import { useState, useEffect } from "react";
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
import { Brain, Menu, Moon, Sun, Zap, Shield, Palette, BarChart3, Code, Megaphone, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const techServices = [
    { icon: Zap, title: "Automation & AI", description: "Intelligent workflow automation", href: "/services/automation-ai", color: "from-blue-600 to-purple-600" },
    { icon: Shield, title: "Cybersecurity", description: "Advanced threat protection", href: "/services/cybersecurity", color: "from-red-600 to-orange-600" },
    { icon: BarChart3, title: "Data Analytics", description: "Data-driven insights", href: "/services/data-analytics", color: "from-green-600 to-blue-600" },
    { icon: Code, title: "Software Development", description: "Custom applications", href: "/services/software-engineering", color: "from-purple-600 to-pink-600" },
  ];

  const creativeServices = [
    { icon: Palette, title: "UI/UX Design", description: "User-centered design", href: "/services/ui-ux-design", color: "from-pink-600 to-red-600" },
    { icon: Megaphone, title: "Branding & Merch", description: "Brand identity systems", href: "/services/branding-merch", color: "from-yellow-600 to-orange-600" },
    { icon: BarChart3, title: "Social Media", description: "Strategic social growth", href: "/services/social-media", color: "from-indigo-600 to-purple-600" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const menuItemVariants = {
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const themeToggleVariants = {
    hover: { 
      scale: 1.1,
      rotate: 180,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
              variants={logoVariants}
              whileHover="hover"
            >
              <Brain className="h-5 w-5 text-white" />
            </motion.div>
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              InnofyAI
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <motion.div variants={menuItemVariants} whileHover="hover">
                      <Link 
                        href="/" 
                        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          location === "/" 
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-white/20' 
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        Home
                      </Link>
                    </motion.div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.div 
                      className="w-[600px] p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-4">Tech Solutions</h3>
                          <div className="space-y-3">
                            {techServices.map((service, index) => (
                              <NavigationMenuLink asChild key={service.title}>
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1, duration: 0.2 }}
                                  whileHover={{ x: 10 }}
                                >
                                  <Link
                                    href={service.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                                  >
                                    <motion.div
                                      className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <service.icon className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <div>
                                      <div className="font-medium text-white group-hover:text-blue-300 transition-colors">{service.title}</div>
                                      <div className="text-sm text-gray-300">{service.description}</div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors ml-auto" />
                                  </Link>
                                </motion.div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-purple-400 mb-4">Creative & Growth</h3>
                          <div className="space-y-3">
                            {creativeServices.map((service, index) => (
                              <NavigationMenuLink asChild key={service.title}>
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1, duration: 0.2 }}
                                  whileHover={{ x: 10 }}
                                >
                                  <Link
                                    href={service.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                                  >
                                    <motion.div
                                      className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <service.icon className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <div>
                                      <div className="font-medium text-white group-hover:text-purple-300 transition-colors">{service.title}</div>
                                      <div className="text-sm text-gray-300">{service.description}</div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors ml-auto" />
                                  </Link>
                                </motion.div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.slice(1).map((item, index) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <motion.div 
                        variants={menuItemVariants} 
                        whileHover="hover"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.2 }}
                      >
                        <Link 
                          href={item.href} 
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            location === item.href 
                              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-white/20' 
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <motion.div
              variants={themeToggleVariants}
              whileHover="hover"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-white hover:bg-white/10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px] bg-white/10 backdrop-blur-md border-l border-white/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-all duration-300 ${
                          location === item.href 
                            ? 'text-blue-400' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link href="/services" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-white transition-all duration-300">
                        View Services
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
