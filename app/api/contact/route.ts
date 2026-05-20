import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, phoneNumber, facebookAccount, tiktokAccount } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Store contact query in database (if Supabase is configured)
    if (supabase) {
      const { error } = await supabase
        .from('contact_queries')
        .insert({
          name,
          email,
          message,
          phone_number: phoneNumber || null,
          facebook_account: facebookAccount || null,
          tiktok_account: tiktokAccount || null,
          status: 'new',
          created_at: new Date().toISOString(),
        })
        .select('id')
        .single()

      if (error) {
        console.error('Contact query creation error:', error)
        // Continue anyway - we can still send emails
      }
    } else {
      console.log('[v0] Supabase not configured, skipping database storage for contact form')
    }

    // Send email to admin
    if (process.env.ADMIN_EMAIL) {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phoneNumber ? `<p><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          ${facebookAccount ? `<p><strong>Facebook:</strong> ${escapeHtml(facebookAccount)}</p>` : ''}
          ${tiktokAccount ? `<p><strong>TikTok:</strong> ${escapeHtml(tiktokAccount)}</p>` : ''}
        `,
      })
    }

    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: 'Thank You for Your Message - Mommy Louise Budget PH',
      html: `
        <h2>Thank You, ${escapeHtml(name)}!</h2>
        <p>We received your message and appreciate you reaching out to us.</p>
        <p>We will review your budget goals and get back to you within 24-48 hours with personalized recommendations.</p>
        <p>Best regards,<br>Mommy Louise Budget PH Team</p>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. We will get back to you soon.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      {
        error: 'Failed to submit contact query',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
