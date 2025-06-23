import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: Users,
      title: "User Responsibilities",
      description: "Your obligations when using our services"
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      description: "Rights and ownership of content and deliverables"
    },
    {
      icon: CreditCard,
      title: "Fees & Payment",
      description: "Payment terms and billing information"
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      description: "Legal limitations and disclaimers"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="pb-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">Terms of Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-space text-foreground leading-tight mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              These terms govern your use of our website and services. Please read them carefully.
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
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-space text-foreground mb-4">{section.title}</h3>
                  <p className="text-muted-foreground text-sm">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              
              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using our website and Services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our website or Services. These Terms constitute a legally binding agreement between you and InnofyAI.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">2. Our Services</h2>
                <p className="text-muted-foreground">
                  InnofyAI provides a range of technology consulting and creative services, including but not limited to, Automation & AI, Data Collection & Analytics, Cybersecurity, Internet of Things (IoT), UI/UX Design, Social Media Management, Software Development, and Branding & Merchandise services ("Services"). The specific scope, fees, and timeline for any project will be detailed in a separate Statement of Work (SOW) or client agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  By using our Services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate, current, and complete information as may be required for any registration or communication.</li>
                  <li>Use our website and Services for lawful purposes only and not to engage in any activity that is fraudulent, harmful, or infringes on the rights of others.</li>
                  <li>Maintain the confidentiality of any account information and be fully responsible for all activities that occur under your account.</li>
                  <li>Cooperate with us in all matters relating to the Services and provide timely access to any materials or information we may reasonably require.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">4. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Content:</h3>
                <p className="text-muted-foreground mb-4">
                  All content on our website, including text, graphics, logos, icons, images, and the compilation thereof, and any software used on the site, is the property of InnofyAI or its suppliers and is protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the website for personal, non-commercial purposes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Client Content:</h3>
                <p className="text-muted-foreground mb-4">
                  You (or your licensors) will retain all intellectual property rights in any materials you provide to us for the purpose of receiving Services ("Client Content"). You grant InnofyAI a non-exclusive, worldwide, royalty-free license to use, reproduce, and modify the Client Content solely for the purpose of providing the Services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Deliverables:</h3>
                <p className="text-muted-foreground">
                  Intellectual property rights in the final work products ("Deliverables") created by us for you will be transferred to you upon full and final payment of all fees, as outlined in the applicable SOW. We retain the right to use the Deliverables and a description of the Services in our portfolio and for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">5. Fees and Payment</h2>
                <p className="text-muted-foreground">
                  The fees for our Services will be set forth in the applicable SOW or client agreement. Unless otherwise stated, all fees are due as specified in the agreement. Late payments may be subject to interest charges.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">6. Confidentiality</h2>
                <p className="text-muted-foreground">
                  Both parties agree to keep confidential all non-public information received from the other party that is marked as confidential or would reasonably be considered confidential. This obligation will survive the termination of our engagement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">7. Termination</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Termination for Convenience:</h3>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate a project or service agreement by providing written notice as specified in the SOW.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Termination for Cause:</h3>
                <p className="text-muted-foreground mb-4">
                  We may terminate our agreement with you immediately if you breach these Terms or fail to make payments when due.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Effect of Termination:</h3>
                <p className="text-muted-foreground">
                  Upon termination, you agree to pay for all Services performed up to the termination date. Sections concerning Intellectual Property, Confidentiality, Disclaimers, and Limitation of Liability shall survive termination.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">8. Disclaimers</h2>
                <p className="text-muted-foreground">
                  Our website and Services are provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. While we strive to provide high-quality Services, we do not guarantee any specific results or outcomes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the fullest extent permitted by law, in no event shall InnofyAI, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Your access to or use of or inability to access or use the Services</li>
                  <li>Any conduct or content of any third party on the Services</li>
                  <li>Any content obtained from the Services</li>
                </ul>
                <p className="text-muted-foreground">
                  Our total liability to you for any and all claims arising out of or relating to these Terms or the Services shall not exceed the amount of fees paid by you to us for the Services in the six (6) months preceding the claim.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Lagos, Nigeria to resolve any legal matter arising from the Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-space text-foreground mb-6">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <Card className="p-8 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">12. Contact Us</h3>
                      <p className="text-muted-foreground mb-2">
                        If you have any questions about these Terms, please contact us at:
                      </p>
                      <div className="text-muted-foreground">
                        <p><strong>InnofyAI</strong></p>
                        <p>Lagos, Nigeria</p>
                        <p>Email: legal@innofyai.com</p>
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