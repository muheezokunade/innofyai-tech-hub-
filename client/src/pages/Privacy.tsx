import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, FileText, Users, AlertCircle } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      items: [
        "Personal information you provide (name, email, phone, company)",
        "Device and usage information",
        "Cookies and similar technologies"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      items: [
        "Provide and manage our services",
        "Communicate with you",
        "Improve our website and services",
        "Security and fraud prevention"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      items: [
        "Technical and organizational security measures",
        "Protection from unauthorized access",
        "Regular security assessments"
      ]
    },
    {
      icon: Users,
      title: "Your Rights",
      items: [
        "Right to access your data",
        "Right to rectification",
        "Right to erasure",
        "Right to data portability"
      ]
    }
  ];

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">Privacy Policy</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-space text-foreground leading-tight mb-6">
              Your Privacy <span className="gradient-text">Matters</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We are committed to protecting your privacy and handling your personal data with transparency and care.
            </p>
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> June 23, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sections.map((section) => (
              <Card key={section.title} className="text-center p-6 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-space text-foreground mb-4">{section.title}</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              
              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to InnofyAI ("we," "our," "us"). We are committed to protecting your privacy and handling your personal data in an open and transparent manner. This Privacy Policy explains how we collect, use, process, and disclose your information when you access or use our website and services. Our services include tech consulting (Automation, Data Collection, Cybersecurity, IoT, UI/UX, Social Media Management, Software Development) and branding services ("Services").
                </p>
                <p className="text-muted-foreground">
                  This policy is designed to comply with applicable data protection laws, including the Nigerian Data Protection Act (NDPA).
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information to provide and improve our Services. The types of information we collect are:
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information You Provide to Us:</h3>
                <p className="text-muted-foreground mb-4">
                  This includes information you voluntarily provide when you fill out our contact form, subscribe to our newsletter, or otherwise communicate with us. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Any other information you choose to provide in your messages</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect Automatically:</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our website, we may automatically collect certain information about your device and usage. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Log Data:</strong> Your IP address, browser type and settings, the date and time of your request, and how you interacted with our website.</li>
                  <li><strong>Device Information:</strong> Information about the device you are using, such as the hardware model, operating system, and unique device identifiers.</li>
                  <li><strong>Cookies and Similar Technologies:</strong> We use cookies to operate and administer our site and to improve your experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>To Provide and Manage Our Services:</strong> To fulfill our contracts with you, including responding to your inquiries and providing you with our tech and branding solutions.</li>
                  <li><strong>To Communicate With You:</strong> To send you administrative information, marketing communications, updates, and information about our services.</li>
                  <li><strong>To Improve Our Website and Services:</strong> To analyze how users interact with our website, which helps us improve its functionality, design, and content.</li>
                  <li><strong>For Security and Fraud Prevention:</strong> To protect our website, our users, and our business from fraudulent or illegal activity.</li>
                  <li><strong>To Comply with Legal Obligations:</strong> To comply with applicable laws, legal processes, or government regulations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">4. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> We may share your information with third-party vendors and service providers who perform services on our behalf.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in good faith belief that such action is necessary.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, use, disclosure, alteration, or destruction. However, no internet or email transmission is ever fully secure or error-free. While we strive to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Under applicable data protection laws, you have certain rights with respect to your personal data. These may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                  <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">7. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">8. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page indicates when this Privacy Policy was last revised. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>

              <Card className="p-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">9. Contact Us</h3>
                      <p className="text-muted-foreground mb-2">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                      </p>
                      <div className="text-muted-foreground">
                        <p><strong>InnofyAI</strong></p>
                        <p>Lagos, Nigeria</p>
                        <p>Email: privacy@innofyai.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}