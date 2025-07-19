import type { Request, Response } from "express";
import nodemailer from "nodemailer";

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "muheezadedejiokunade@gmail.com",
    pass: process.env.SMTP_PASS || "lcla prtm bpxb loqk",
  },
});

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

export async function handleContactForm(req: Request, res: Response) {
  try {
    const { name, email, company, service, budget, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, email, service, and message are required"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    // Create email content
    const mailOptions = {
      from: `"InnofyAI Contact Form" <${process.env.SMTP_USER || "muheezadedejiokunade@gmail.com"}>`,
      to: "info@innofyai.com", // Company email
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Submission Details:</strong><br>
              Date: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}<br>
              IP: ${req.ip || req.connection.remoteAddress}<br>
              User Agent: ${req.get('User-Agent')}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              This email was sent from the InnofyAI contact form at ${req.get('origin') || 'innofyai.com'}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission - ${service}

Contact Information:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
- Service: ${service}
- Budget: ${budget}

Message:
${message}

Submission Details:
- Date: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}
- IP: ${req.ip || req.connection.remoteAddress}
- User Agent: ${req.get('User-Agent')}

This email was sent from the InnofyAI contact form.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: `"InnofyAI" <${process.env.SMTP_USER || "muheezadedejiokunade@gmail.com"}>`,
      to: email,
      subject: "Thank you for contacting InnofyAI!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; text-align: center;">
            Thank you for reaching out to InnofyAI!
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Dear ${name},</p>
            
            <p>Thank you for contacting InnofyAI! We have received your inquiry about our <strong>${service}</strong> services.</p>
            
            <p>Our team will review your message and get back to you within 24 hours with a detailed response and next steps.</p>
            
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #1e40af;">What happens next?</h4>
              <ul style="color: #1e40af;">
                <li>We'll review your requirements</li>
                <li>Schedule a consultation call</li>
                <li>Provide a detailed proposal</li>
                <li>Begin your project journey</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our services and portfolio:</p>
            <ul>
              <li><a href="https://innofyai.netlify.app/services" style="color: #2563eb;">Our Services</a></li>
              <li><a href="https://innofyai.netlify.app/portfolio" style="color: #2563eb;">Portfolio</a></li>
              <li><a href="https://innofyai.netlify.app/about" style="color: #2563eb;">About Us</a></li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              <strong>InnofyAI</strong><br>
              Transforming businesses through intelligent automation and creative excellence<br>
              <a href="https://innofyai.netlify.app" style="color: #2563eb;">innofyai.netlify.app</a>
            </p>
            
            <div style="margin-top: 20px;">
              <a href="https://www.linkedin.com/company/innofy-ai/" style="color: #0077b5; margin: 0 10px;">LinkedIn</a>
              <a href="https://x.com/innofyai?s=21" style="color: #1da1f2; margin: 0 10px;">X (Twitter)</a>
              <a href="https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr" style="color: #e4405f; margin: 0 10px;">Instagram</a>
              <a href="https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1" style="color: #000000; margin: 0 10px;">TikTok</a>
            </div>
          </div>
        </div>
      `,
      text: `
Thank you for reaching out to InnofyAI!

Dear ${name},

Thank you for contacting InnofyAI! We have received your inquiry about our ${service} services.

Our team will review your message and get back to you within 24 hours with a detailed response and next steps.

What happens next?
- We'll review your requirements
- Schedule a consultation call
- Provide a detailed proposal
- Begin your project journey

In the meantime, feel free to explore our services and portfolio:
- Our Services: https://innofyai.netlify.app/services
- Portfolio: https://innofyai.netlify.app/portfolio
- About Us: https://innofyai.netlify.app/about

Best regards,
The InnofyAI Team

InnofyAI
Transforming businesses through intelligent automation and creative excellence
https://innofyai.netlify.app

Follow us:
- LinkedIn: https://www.linkedin.com/company/innofy-ai/
- X (Twitter): https://x.com/innofyai?s=21
- Instagram: https://www.instagram.com/innofyai?igsh=dGI5MTE5a2xra28%3D&utm_source=qr
- TikTok: https://www.tiktok.com/@innofyai?_t=ZM-8y83dmNvGis&_r=1
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours."
    });

  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact us directly."
    });
  }
} 