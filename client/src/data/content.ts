export const services = [
  {
    id: "automation",
    title: "Automation & AI",
    description:
      "Streamline operations with intelligent automation solutions that reduce manual tasks by up to 80% and eliminate human error.",
    image: "/assets/automation-ai-hero.svg",
    features: [
      "Custom workflow automation",
      "AI-powered decision making",
      "Process optimization",
      "Real-time monitoring & alerts",
    ],
    category: "tech",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security solutions designed to prevent, detect, and respond to cyber threats.",
    image: "/assets/cybersecurity-hero.svg",
    features: [
      "Advanced threat detection",
      "24/7 security monitoring",
      "Incident response planning",
      "Compliance management",
    ],
    category: "tech",
  },
  {
    id: "data",
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    image: "/assets/data-analytics-hero.svg",
    features: [
      "Predictive analytics",
      "Real-time dashboards",
      "Custom reporting",
      "Data visualization",
    ],
    category: "tech",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Create exceptional user experiences with intuitive interfaces that delight users and drive engagement.",
    image: "/assets/ui-ux-design-hero.svg",
    features: [
      "User research & testing",
      "Interface design & prototyping",
      "Usability optimization",
      "Mobile-first approach",
    ],
    category: "creative",
  },
  {
    id: "branding",
    title: "Branding & Merch",
    description:
      "Build powerful brand identities that resonate with your audience and create lasting impressions through cohesive design.",
    image: "/assets/branding-merch-hero.svg",
    features: [
      "Logo & identity design",
      "Brand guidelines & assets",
      "Custom merchandise",
      "Brand strategy consulting",
    ],
    category: "creative",
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description:
      "Custom software solutions for web, mobile, and cloud. Scalable, secure, and high-performance applications tailored to your business goals.",
    image: "/assets/software-engineering-hero.svg",
    features: [
      "Full-stack web & mobile development",
      "Cloud-native architecture",
      "Agile & DevOps practices",
      "Ongoing support & optimization",
    ],
    category: "tech",
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "Grow your brand and engage your audience with expert social media marketing, content creation, and analytics across all major platforms.",
    image: "/assets/social-media-hero.svg",
    features: [
      "Strategic campaigns & content",
      "Community management",
      "Analytics & reporting",
      "Influencer partnerships",
    ],
    category: "creative",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Commerza Automation",
    category: "automation",
    industry: "E-commerce",
    description:
      "Complete automation solution for inventory management, order processing, and customer service, resulting in 45% cost reduction and improved efficiency.",
    image: "/assets/commerza-automation.jpg",
    metric: "+65%",
    metricLabel: "Efficiency",
    duration: "6 months",
    slug: "commerza-automation",
    challenge: "Commerza, a growing e-commerce platform, was struggling with manual inventory management, slow order processing, and overwhelmed customer service team. They needed a comprehensive automation solution to scale their operations efficiently.",
    solution: "We implemented a full-stack automation system including AI-powered inventory prediction, automated order processing workflows, and intelligent customer service chatbots. The solution integrated seamlessly with their existing systems.",
    technologies: ["Python", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "OpenAI API"],
    features: [
      "AI-powered inventory forecasting",
      "Automated order processing pipeline",
      "Intelligent customer service chatbots",
      "Real-time analytics dashboard",
      "Multi-channel integration",
      "Predictive maintenance alerts"
    ],
    results: [
      "65% increase in operational efficiency",
      "45% reduction in operational costs",
      "80% faster order processing time",
      "90% reduction in customer service response time",
      "Zero inventory stockouts for 8 months",
      "ROI of 320% within first year"
    ],
    testimonial: {
      name: "Ridwan Olalekan",
      title: "CEO, Commerza",
      content: "InnofyAI's automation solution transformed our entire operation. We went from struggling to keep up with orders to scaling efficiently. The ROI was incredible, and the team was professional throughout the entire process.",
      image: "/assets/placeholder.svg"
    },
    gallery: [
      "/assets/placeholder.svg",
      "/assets/placeholder.svg",
      "/assets/placeholder.svg"
    ]
  },
  {
    id: 2,
    title: "SpicePop E-commerce Platform",
    category: "web",
    industry: "Food & Beverage",
    description:
      "Complete brand transformation and e-commerce platform for authentic Nigerian spices and foodstuffs, including website, mobile app, and comprehensive social media management.",
    image: "/assets/spicepop-project-screenshot.jpg",
    metric: "+250%",
    metricLabel: "Sales Growth",
    duration: "6 months",
    slug: "spicepop-ecommerce",
    challenge: "SpicePop, a Nigerian spice and foodstuff business, needed a complete digital transformation from local markets to nationwide presence. They required comprehensive branding, e-commerce platform, and social media management to establish their brand and connect with customers across Nigeria.",
    solution: "We delivered a complete brand transformation including visual identity, e-commerce platform, mobile app, and comprehensive social media management across multiple platforms. This included Instagram, Facebook, Twitter, WhatsApp Business, TikTok, and YouTube content creation and management.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Paystack", "AWS", "Firebase", "Tailwind CSS"],
    features: [
      "Complete brand identity design",
      "Responsive e-commerce website",
      "Mobile app for iOS and Android",
      "Social media management (6 platforms)",
      "Content creation and strategy",
      "Inventory management system",
      "Multi-payment gateway integration",
      "Real-time delivery tracking",
      "Farmer partnership portal"
    ],
    results: [
      "250% increase in sales growth",
      "15K+ Instagram followers",
      "8K+ Facebook page likes",
      "5K+ Twitter followers",
      "Nationwide delivery within 2-3 days",
      "90% customer satisfaction rate",
      "Support for 50+ local farmers",
      "Tripled product range",
      "Successful expansion to 15 states"
    ],
    testimonial: {
      name: "Iman Fasasi",
      title: "Founder, SpicePop",
      content: "InnofyAI delivered a complete transformation - from our brand identity to our e-commerce platform and social media presence. Their comprehensive approach helped us establish a strong digital presence and connect with customers nationwide. The results have been phenomenal.",
      image: "/assets/placeholder.svg"
    },
    gallery: [
      "/assets/spicepop-project-screenshot.jpg",
      "/assets/spicepop-logo.svg",
      "/assets/spicepop-branding.svg",
      "/assets/spicepop-website.svg",
      "/assets/spicepop-mobile.svg",
      "/assets/spicepop-social-media.svg"
    ]
  },
  {
    id: 3,
    title: "Osinachi Renewable Energy",
    category: "branding",
    industry: "Renewable Energy",
    description:
      "Complete brand transformation including UI/UX redesign, logo creation, and marketing materials that boosted user engagement by 180%.",
    image: "/assets/osinachi-renewable-screenshot.jpg",
    metric: "+180%",
    metricLabel: "Engagement",
    duration: "8 months",
    slug: "osinachi-renewable-energy",
    challenge: "Osinachi Renewable Energy, a clean energy startup, had an outdated brand that didn't reflect their innovative sustainable solutions. They needed a complete brand transformation to compete with established players and attract modern users.",
    solution: "We created a comprehensive brand strategy including new visual identity, user experience redesign, marketing materials, and digital presence overhaul that positioned them as a modern, trustworthy renewable energy leader.",
    technologies: ["Figma", "Adobe Creative Suite", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Contentful CMS"],
    features: [
      "Complete brand identity redesign",
      "User experience optimization",
      "Marketing materials creation",
      "Digital presence overhaul",
      "Brand guidelines development",
      "Social media strategy"
    ],
    results: [
      "180% increase in user engagement",
      "45% improvement in brand recognition",
      "60% increase in app downloads",
      "35% reduction in user acquisition cost",
      "90% positive brand sentiment",
      "Tripled social media following"
    ],
    testimonial: {
      name: "Alex Osinachi",
      title: "CEO, Osinachi Renewable Energy",
      content: "InnofyAI's rebranding work was transformative. They didn't just redesign our logo - they reimagined our entire brand experience. The results speak for themselves - our user engagement skyrocketed.",
      image: "/assets/placeholder.svg"
    },
    gallery: [
      "/assets/osinachi-renewable-screenshot.jpg",
      "/assets/osinachi-renewable-gallery1.jpg",
      "/assets/osinachi-renewable-gallery2.jpg",
      "/assets/osinachi-renewable-gallery3.jpg",
      "/assets/osinachi-renewable-gallery4.jpg"
    ]
  },
  {
    id: 4,
    title: "GrowWise Financial App",
    category: "design",
    industry: "Financial Technology",
    description:
      "Comprehensive financial management app for small business owners, helping them track profits, allocate resources, and achieve growth goals with confidence.",
    image: "/assets/growwise-project-screenshot.jpg",
    metric: "+300%",
    metricLabel: "Profit Growth",
    duration: "6 months",
    slug: "growwise-financial-app",
    challenge: "Small business owners struggled with financial management, lacking tools to track profits, allocate resources wisely, and plan for growth. They needed an intuitive app that could help them master their finances and fuel business growth.",
    solution: "We designed and developed GrowWise, a comprehensive financial management app that provides smart profit allocation, growth goal planning, and financial security features specifically tailored for small business owners.",
    technologies: ["Figma", "React Native", "TypeScript", "Redux", "Stripe API", "Firebase", "Chart.js", "Financial APIs"],
    features: [
      "Smart profit allocation algorithms",
      "Growth goal planning tools",
      "Financial security monitoring",
      "Real-time financial tracking",
      "Resource allocation optimization",
      "Business growth analytics"
    ],
    results: [
      "300% increase in profit growth for users",
      "85% improvement in financial decision-making",
      "90% user satisfaction score",
      "60% reduction in financial stress",
      "Tripled user retention rate",
      "Successful Series A funding round"
    ],
    testimonial: {
      name: "Ridwan Olalekan",
      title: "CEO, GrowWise",
      content: "GrowWise has transformed how small business owners manage their finances. Our users are seeing incredible growth in their profits and feel more confident about their financial decisions. InnofyAI's expertise in financial app design is unmatched.",
      image: "/assets/placeholder.svg"
    },
    gallery: [
      "/assets/growwise-project-screenshot.jpg",
      "/assets/growwise-gallery1.jpg",
      "/assets/growwise-gallery2.jpg",
      "/assets/growwise-gallery3.jpg"
    ]
  },
  {
    id: 5,
    title: "SmartFactory IoT",
    category: "automation",
    industry: "Manufacturing",
    description:
      "IoT-enabled smart manufacturing system with predictive maintenance and real-time monitoring, increasing productivity by 65%.",
    image:
      "/assets/smartfactory-project.jpg",
    metric: "+65%",
    metricLabel: "Productivity",
    duration: "12 months",
    slug: "smartfactory-iot",
    challenge: "A major manufacturing company was experiencing frequent equipment failures, production delays, and inefficient resource utilization. They needed an IoT solution to modernize their operations and implement predictive maintenance.",
    solution: "We implemented a comprehensive IoT ecosystem with sensors, real-time monitoring, predictive analytics, and automated maintenance scheduling that transformed their manufacturing operations.",
    technologies: ["Python", "TensorFlow", "AWS IoT", "React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    features: [
      "IoT sensor network deployment",
      "Predictive maintenance algorithms",
      "Real-time production monitoring",
      "Automated quality control",
      "Energy optimization systems",
      "Supply chain integration"
    ],
    results: [
      "65% increase in overall productivity",
      "80% reduction in unplanned downtime",
      "40% decrease in maintenance costs",
      "30% improvement in energy efficiency",
      "95% accuracy in defect detection",
      "ROI of 280% within 18 months"
    ],
    testimonial: {
      name: "Muheez Okunade",
      title: "CEO, Commerza",
      content: "InnofyAI's IoT solution revolutionized our manufacturing process. The predictive maintenance alone has saved us millions in downtime costs. Their expertise in industrial automation is world-class.",
      image: "/assets/placeholder.svg"
    },
    gallery: [
      "/assets/smartfactory-project.jpg",
      "/assets/placeholder.svg",
      "/assets/placeholder.svg"
    ]
  },
  {
    id: 6,
    title: "Osinachi Humanity Impact Initiative",
    category: "branding",
    industry: "Non-Profit",
    description:
      "Complete brand identity for humanitarian impact initiative, including logo, website, and marketing materials leading to 320% funding increase.",
    image:
      "/assets/osinachi-initiative-screenshot.jpg",
    metric: "+320%",
    metricLabel: "Funding",
    duration: "3 months",
    slug: "osinachi-humanity-impact-initiative",
    challenge: "Osinachi Humanity Impact Initiative, a humanitarian organization, had a compelling mission but lacked a strong brand presence to attract donors and volunteers. They needed a complete brand identity that communicated their humanitarian mission and impact.",
    solution: "We created a comprehensive brand strategy that positioned Osinachi Humanity Impact Initiative as a leader in humanitarian work, including visual identity, messaging, website, and donor materials that resonated with their target audience.",
    technologies: ["Figma", "Adobe Creative Suite", "React", "Next.js", "Tailwind CSS", "Contentful CMS", "Mailchimp"],
    features: [
      "Complete brand identity design",
      "Donor presentation materials",
      "Website and digital presence",
      "Marketing collateral creation",
      "Social media strategy",
      "Brand guidelines development"
    ],
    results: [
      "320% increase in funding raised",
      "500% increase in website traffic",
      "200% growth in social media following",
      "85% improvement in brand recognition",
      "Tripled donor inquiries",
      "Successful fundraising campaign"
    ],
    testimonial: {
      name: "Alex Monueke",
      title: "Founder & CEO, Osinachi Humanity Impact Initiative",
      content: "InnofyAI's branding work was instrumental in our fundraising success. They perfectly captured our mission and created a brand that donors and volunteers immediately connected with. Our funding increased by 320%!",
      image: "/assets/placeholder.svg"
    },
    gallery: [
      "/assets/osinachi-initiative-screenshot.jpg",
      "/assets/osinachi-initiative-gallery1.jpg",
      "/assets/osinachi-initiative-gallery2.jpg",
      "/assets/osinachi-initiative-gallery3.jpg",
      "/assets/osinachi-initiative-gallery4.jpg"
    ]
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Monueke",
    title: "Founder & CEO, Osinachi Humanity Impact Initiative",
    content:
      "InnofyAI's branding work was instrumental in our fundraising success. They perfectly captured our mission and created a brand that donors and volunteers immediately connected with. Our funding increased by 320%!",
    image:
      "/assets/placeholder.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Muheez Okunade",
    title: "CEO, Commerza",
    content:
      "InnofyAI's IoT solution revolutionized our manufacturing process. The predictive maintenance alone has saved us millions in downtime costs. Their expertise in industrial automation is world-class.",
    image:
      "/assets/placeholder.svg",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Osinachi",
    title: "CEO, Osinachi Renewable Energy",
    content:
      "InnofyAI's rebranding work was transformative. They didn't just redesign our logo - they reimagined our entire brand experience. The results speak for themselves - our user engagement skyrocketed.",
    image:
      "/assets/placeholder.svg",
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Can Transform Your Business Operations",
    category: "AI & Automation",
    excerpt:
      "Exploring how artificial intelligence is reshaping business processes and what leaders need to know to stay ahead of the curve.",
    image:
      "/assets/blog-ai-transform-business.jpg",
    author: "Fawaz Ibrahim",
    date: "December 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Beyond the Hype: Practical AI Applications for SMEs",
    category: "AI & Automation",
    excerpt:
      "Discover how small and medium enterprises can leverage affordable AI tools to operate smarter and more efficiently.",
    image:
      "/assets/blog-practical-ai-smes.jpg",
    author: "Fawaz Ibrahim",
    date: "December 12, 2024",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "2024 Cybersecurity Trends Every CEO Should Know",
    category: "Security",
    excerpt:
      "Stay ahead of evolving cyber threats with insights into the most critical security trends shaping the digital landscape.",
    image:
      "/assets/blog-cybersecurity-trends.jpg",
    author: "Fawaz Ibrahim",
    date: "December 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Building Brand Identity in the Digital Age",
    category: "Design",
    excerpt:
      "Discover how to create compelling brand identities that resonate across digital platforms and drive customer engagement.",
    image:
      "/assets/blog-brand-identity.jpg",
    author: "Islamiyyah Adebayo",
    date: "December 8, 2024",
    readTime: "6 min read",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Muheez Okunade",
    title: "CEO & Founder",
    description: "AI Strategy & Business Development",
    image:
      "/assets/placeholder.svg",
  },
  {
    id: 2,
    name: "Islamiyyah Adebayo",
    title: "Creative Director",
    description: "Brand Strategy & Design",
    image:
      "/assets/placeholder.svg",
  },
  {
    id: 3,
    name: "Fawaz Ibrahim",
    title: "CTO",
    description: "AI Engineering & Automation",
    image:
      "/assets/placeholder.svg",
  },
  {
    id: 4,
    name: "Faruq Ibrahim",
    title: "Head of Operations",
    description: "Project Management & Client Success",
    image:
      "/assets/placeholder.svg",
  },
];
