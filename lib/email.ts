import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

interface SendEmailProps {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailProps) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn('Email credentials not configured')
      return { success: false, error: 'Email service not configured' }
    }

    await transporter.sendMail({
      from: `"Mommy Louise's Budget PH" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    })

    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' }
  }
}

export const emailTemplates = {
  orderConfirmation: (customerName: string, orderDetails: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; color: white; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">Order Confirmation</h1>
      </div>
      <div style="padding: 20px; background: #f9f9f9;">
        <p>Hi ${customerName},</p>
        <p>Thank you for your order! We've received your order and will process it shortly.</p>
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Order Details</h3>
          ${orderDetails}
        </div>
        <p>We'll send you an email update once your order is shipped.</p>
        <p>Best regards,<br/>Mommy Louise's Budget PH Team</p>
      </div>
      <div style="padding: 20px; background: #f0f0f0; text-align: center; color: #666; font-size: 12px; border-radius: 0 0 8px 8px;">
        <p style="margin: 0;">If you have any questions, please reply to this email.</p>
      </div>
    </div>
  `,

  emailVerification: (verificationLink: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; color: white; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">Verify Your Email</h1>
      </div>
      <div style="padding: 20px; background: #f9f9f9;">
        <p>Thank you for placing an order with us!</p>
        <p>Please verify your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationLink}" style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">Verify Email</a>
        </div>
        <p style="color: #666; font-size: 12px;">Or copy this link: <br/>${verificationLink}</p>
        <p>This link expires in 24 hours.</p>
      </div>
    </div>
  `,

  adminNotification: (customerName: string, customerEmail: string, packageName: string, orderDetails: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #333; padding: 20px; text-align: center; color: white; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">New Order Received</h1>
      </div>
      <div style="padding: 20px; background: #f9f9f9;">
        <h3>Order Details:</h3>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Customer Email:</strong> ${customerEmail}</p>
        <p><strong>Package:</strong> ${packageName}</p>
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          ${orderDetails}
        </div>
        <p><a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin" style="color: #667eea;">View in Admin Dashboard</a></p>
      </div>
    </div>
  `,
}
