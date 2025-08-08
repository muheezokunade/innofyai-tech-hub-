import type { Request, Response } from "express";
import nodemailer from "nodemailer";

// SMTP configuration strictly from environment variables
let cachedTransporter: nodemailer.Transporter | null = null;

function getMailer(): nodemailer.Transporter {
  if (cachedTransporter) return cachedTransporter;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.toLowerCase() === "true"
    : smtpPort === 465; // default to secure only for port 465

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    throw new Error("SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.");
  }

  cachedTransporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return cachedTransporter;
}

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

    // Resolve sender identities from env
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.SMTP_FROM_NAME || "InnofyAI";

    if (!fromEmail) {
      throw new Error("SMTP_FROM_EMAIL or SMTP_USER must be configured.");
    }

    const transporter = getMailer();

    // Create email content
    const mailOptions = {
      from: `${fromName} <${fromEmail}>`,
      to: process.env.CONTACT_TO_EMAIL || "info@innofyai.com",
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
              IP: ${req.ip || (req as any).connection?.remoteAddress || ''}<br>
              User Agent: ${req.get('User-Agent')}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              This email was sent from the InnofyAI contact form
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
- IP: ${req.ip || (req as any).connection?.remoteAddress || ''}
- User Agent: ${req.get('User-Agent')}

This email was sent from the InnofyAI contact form.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: `${fromName} <${fromEmail}>`,
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
              <li><a href="https://innofyai.com/services" style="color: #2563eb;">Our Services</a></li>
              <li><a href="https://innofyai.com/portfolio" style="color: #2563eb;">Portfolio</a></li>
              <li><a href="https://innofyai.com/about" style="color: #2563eb;">About Us</a></li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              <strong>InnofyAI</strong><br>
              Transforming businesses through intelligent automation and creative excellence<br>
              <a href="https://innofyai.com" style="color: #2563eb;">innofyai.com</a>
            </p>
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
- Our Services: https://innofyai.com/services
- Portfolio: https://innofyai.com/portfolio
- About Us: https://innofyai.com/about

Best regards,
The InnofyAI Team

InnofyAI
Transforming businesses through intelligent automation and creative excellence
https://innofyai.com
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours."
    });

  } catch (error) {
    console.error("Contact form error:", error);
    // Avoid leaking internal errors
    res.status(500).json({
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact us directly."
    });
  }
} 