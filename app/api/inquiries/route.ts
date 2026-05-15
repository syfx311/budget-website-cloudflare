import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      productName,
      quantity,
      customerName,
      customerEmail,
      customerPhone,
      facebookAccount,
      tiktokAccount,
      orderNotes,
    } = body

    // Validate required fields
    if (!customerName || !customerEmail || !productName || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields: customerName, customerEmail, productName, quantity' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Store inquiry in database
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      )
    }

    const { data: inquiry, error } = await supabase
      .from('inquiries')
      .insert({
        product_name: productName,
        quantity,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone || null,
        facebook_account: facebookAccount || null,
        tiktok_account: tiktokAccount || null,
        order_notes: orderNotes || null,
        status: 'new',
      })
      .select('id')
      .single()

    if (error) {
      console.error('Inquiry creation error:', error)
      return NextResponse.json(
        { error: 'Failed to save inquiry', details: error.message },
        { status: 500 }
      )
    }

    if (!inquiry) {
      console.error('No inquiry returned from insert')
      return NextResponse.json(
        { error: 'Failed to save inquiry - no response from database' },
        { status: 500 }
      )
    }

    // Send email to admin
    if (process.env.ADMIN_EMAIL) {
      const phoneDisplay = customerPhone ? `<p><strong>Phone:</strong> ${escapeHtml(customerPhone)}</p>` : ''
      const facebookDisplay = facebookAccount ? `<p><strong>Facebook:</strong> ${escapeHtml(facebookAccount)}</p>` : ''
      const tiktokDisplay = tiktokAccount ? `<p><strong>TikTok:</strong> ${escapeHtml(tiktokAccount)}</p>` : ''
      const notesDisplay = orderNotes ? `<p><strong>Order Notes:</strong></p><p>${escapeHtml(orderNotes).replace(/\n/g, '<br>')}</p>` : ''

      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: `New Product Inquiry for ${productName} from ${customerName}`,
        html: `
          <h2>New Product Inquiry</h2>
          <p><strong>Product:</strong> ${escapeHtml(productName)}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Customer Name:</strong> ${escapeHtml(customerName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(customerEmail)}</p>
          ${phoneDisplay}
          ${facebookDisplay}
          ${tiktokDisplay}
          ${notesDisplay}
        `,
      })
    }

    // Send confirmation email to customer
    await sendEmail({
      to: customerEmail,
      subject: 'Thank You for Your Inquiry - Mommy Louise Budget PH',
      html: `
        <h2>Thank You, ${escapeHtml(customerName)}!</h2>
        <p>We received your inquiry for <strong>${escapeHtml(productName)}</strong> (Quantity: ${quantity}).</p>
        <p>We will review your inquiry and contact you within 24-48 hours with more information and pricing details.</p>
        <p>Best regards,<br>Mommy Louise Budget PH Team</p>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will get back to you soon.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Inquiry submission error:', error)
    return NextResponse.json(
      {
        error: 'Failed to submit inquiry',
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
