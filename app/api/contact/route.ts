import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to generate HTML email template
const generateEmailTemplate = (
  name: string,
  email: string,
  service: string,
  phone: string,
  message: string
) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                background-color: #f8fafc;
                color: #334155;
                line-height: 1.6;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 32px 24px;
                text-align: center;
            }
            
            .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
            }
            
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            
            .content {
                padding: 32px 24px;
            }
            
            .notification-badge {
                background-color: #10b981;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                display: inline-block;
                margin-bottom: 24px;
            }
            
            .info-grid {
                display: grid;
                gap: 20px;
                margin-bottom: 32px;
            }
            
            .info-item {
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 20px;
                transition: all 0.2s ease;
            }
            
            .info-item:hover {
                border-color: #667eea;
                box-shadow: 0 2px 4px rgba(102, 126, 234, 0.1);
            }
            
            .info-label {
                font-weight: 600;
                color: #475569;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
            }
            
            .info-value {
                color: #1e293b;
                font-size: 16px;
                word-break: break-word;
            }
            
            .message-section {
                background-color: #fefefe;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                padding: 24px;
                margin-bottom: 32px;
            }
            
            .message-section h3 {
                color: #475569;
                font-size: 16px;
                margin-bottom: 12px;
                font-weight: 600;
            }
            
            .message-content {
                color: #334155;
                font-size: 15px;
                line-height: 1.7;
                white-space: pre-wrap;
                background-color: #f8fafc;
                padding: 16px;
                border-radius: 6px;
                border-left: 4px solid #667eea;
            }
            
            .quick-actions {
                background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                border-radius: 8px;
                padding: 24px;
                margin-bottom: 32px;
            }
            
            .quick-actions h3 {
                color: #475569;
                font-size: 16px;
                margin-bottom: 16px;
                font-weight: 600;
            }
            
            .action-buttons {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
            
            .action-btn {
                background-color: #667eea;
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                text-decoration: none;
                font-weight: 500;
                font-size: 14px;
                transition: all 0.2s ease;
                border: none;
                cursor: pointer;
            }
            
            .action-btn:hover {
                background-color: #5a67d8;
                transform: translateY(-1px);
            }
            
            .action-btn.secondary {
                background-color: #64748b;
            }
            
            .action-btn.secondary:hover {
                background-color: #475569;
            }
            
            .footer {
                background-color: #f8fafc;
                border-top: 1px solid #e2e8f0;
                padding: 24px;
                text-align: center;
            }
            
            .footer p {
                color: #64748b;
                font-size: 14px;
                margin-bottom: 8px;
            }
            
            .timestamp {
                color: #94a3b8;
                font-size: 12px;
                font-style: italic;
            }
            
            .icon {
                width: 16px;
                height: 16px;
                margin-right: 8px;
                vertical-align: middle;
            }
            
            @media (max-width: 600px) {
                .container {
                    margin: 0 16px;
                }
                
                .header {
                    padding: 24px 16px;
                }
                
                .content {
                    padding: 24px 16px;
                }
                
                .action-buttons {
                    flex-direction: column;
                }
                
                .action-btn {
                    text-align: center;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📧 New Contact Inquiry</h1>
                <p>Someone is interested in your services</p>
            </div>
            
            <div class="content">
                <div class="notification-badge">
                    ✅ New Submission
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">
                            <span class="icon">👤</span>
                            Full Name
                        </div>
                        <div class="info-value">${name}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">
                            <span class="icon">📧</span>
                            Email Address
                        </div>
                        <div class="info-value">${email}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">
                            <span class="icon">🔧</span>
                            Service Requested
                        </div>
                        <div class="info-value">${service}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">
                            <span class="icon">📱</span>
                            Phone Number
                        </div>
                        <div class="info-value">${phone || "Not provided"}</div>
                    </div>
                </div>
                
                ${
                  message
                    ? `
                <div class="message-section">
                    <h3>💬 Message Details</h3>
                    <div class="message-content">${message}</div>
                </div>
                `
                    : ""
                }
                
                <div class="quick-actions">
                    <h3>⚡ Quick Actions</h3>
                    <div class="action-buttons">
                        <a href="mailto:${email}" class="action-btn">Reply via Email</a>
                        <a href="tel:${phone}" class="action-btn secondary">Call Customer</a>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Automatic Notification System</strong></p>
                <p>This email was automatically generated from your contact form</p>
                <p class="timestamp">Received on ${currentDate}</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, service, phone, message } = data;
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, or service" },
        { status: 400 }
      );
    }

    const { error: supabaseError } = await supabase
      .from("contact_form_submissions")
      .insert([
        {
          name,
          email,
          service,
          phone: phone || null,
          message: message || null,
          submitted_at: new Date().toISOString(),
        },
      ]);

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      return NextResponse.json(
        { error: "Failed to store form data" },
        { status: 500 }
      );
    }

    // Generate HTML email template
    const htmlTemplate = generateEmailTemplate(
      name,
      email,
      service,
      phone || "",
      message || ""
    );

    const mailOptions = {
      from: `"Jaynex IT" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: htmlTemplate,
      // Keep text version as fallback
      text: `You have received a new contact form submission:

Name: ${name}
Email: ${email}
Service: ${service}
Phone: ${phone || "N/A"}
Message: ${message || "N/A"}

Submitted at: ${new Date().toLocaleString()}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";