import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/content";
import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Blog() {
  const [email, setEmail] = useState("");
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-space text-foreground mb-6">
              Tech <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with the latest trends, insights, and innovations in technology, AI, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden gradient-bg text-white">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                      Featured Article
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-space mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-white/90 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6 text-white/80">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link href="/blog/ai-transform-business">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="rounded-xl shadow-lg w-full h-auto" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Categories */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="gradient-bg border-0 text-white">All Articles</Button>
            <Button variant="outline">AI & Automation</Button>
            <Button variant="outline">Cybersecurity</Button>
            <Button variant="outline">Design & Branding</Button>
            <Button variant="outline">Industry Trends</Button>
          </div>

          {/* Blog Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => {
              const blogRoutes: { [key: number]: string } = {
                2: "/blog/practical-ai-smes",
                3: "/blog/cybersecurity-trends-2024", 
                4: "/blog/brand-identity-digital-age"
              };
              
              return (
                <Link key={post.id} href={blogRoutes[post.id] || "/blog"}>
                  <Card className="hover-lift cursor-pointer overflow-hidden">
                    <div className="h-48 bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{post.category}</Badge>
                      <h3 className="text-xl font-bold text-space text-foreground mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="gradient-bg border-0 text-white px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-space text-foreground mb-4">
            Stay Updated with <span className="gradient-text">Tech Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest articles, trends, and exclusive insights delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="gradient-bg border-0 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
