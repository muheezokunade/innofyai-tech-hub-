import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/content";
import { Lightbulb, Handshake, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground mb-6">
              About <span className="gradient-text">InnofyAI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate innovators, technologists, and creatives dedicated to transforming businesses through cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-space text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in Lagos, Nigeria, InnofyAI emerged from a simple yet powerful vision: to democratize access to advanced technology solutions while maintaining the human touch that makes brands memorable.
              </p>
              <p className="text-muted-foreground mb-6">
                What started as a small team of tech enthusiasts has grown into a comprehensive platform offering everything from AI automation to creative branding solutions. We believe that the future belongs to businesses that can seamlessly blend technological innovation with authentic brand storytelling.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve clients across the globe, helping them navigate the complex intersection of technology and creativity.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-space gradient-text mb-2">2019</div>
                  <div className="text-muted-foreground">Founded in Lagos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-space gradient-text mb-2">150+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="InnofyAI team collaboration in modern office environment" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with intelligent automation and compelling brand experiences that drive growth, efficiency, and lasting impact in an increasingly digital world.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-to-br from-secondary/10 to-accent/10">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in integrated tech-creative solutions, setting new standards for how businesses leverage technology while building authentic human connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-space text-foreground mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The brilliant minds behind InnofyAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <img 
                  src={member.image} 
                  alt={`Professional headshot of ${member.name}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform" 
                />
                <h3 className="font-bold text-space text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-space text-foreground mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Innovation First</h3>
                <p className="text-muted-foreground">We constantly push boundaries, exploring new technologies and creative approaches to solve complex challenges.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Partnership</h3>
                <p className="text-muted-foreground">We believe in true collaboration, working alongside our clients as partners in their success journey.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-space text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground">We deliver exceptional quality in everything we do, from code to creative, from strategy to execution.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
