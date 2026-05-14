import { sendEmail, emailTemplates } from '@/lib/email'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      packageName,
      customerName,
      customerEmail,
      customerPhone,
      binderType,
      colors,
      inserts,
      challenges,
      specialRequests
    } = body

    if (!packageName || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const orderDetailsHtml = `
      <p><strong>Package:</strong> ${packageName}</p>
      ${customerPhone ? `<p><strong>Phone:</strong> ${customerPhone}</p>` : ''}
      ${binderType ? `<p><strong>Binder Type:</strong> ${binderType}</p>` : ''}
      ${colors ? `<p><strong>Colors:</strong> ${colors}</p>` : ''}
      ${inserts && inserts.length > 0 ? `<p><strong>Inserts:</strong> ${inserts.join(', ')}</p>` : ''}
      ${challenges ? `<p><strong>Challenges:</strong> ${challenges}</p>` : ''}
      ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
    `

    // Send branded thank you email to customer
    await sendEmail({
      to: customerEmail,
      subject: `Thank You for Your Order - ${packageName}`,
      html: emailTemplates.thankYou(customerName, orderDetailsHtml, packageName),
    })

    // Send admin notification with full order details
    if (process.env.ADMIN_EMAIL) {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: `New Order: ${packageName} from ${customerName}`,
        html: emailTemplates.adminNotification(customerName, customerEmail, packageName, orderDetailsHtml),
      })
    }

    return NextResponse.json(
      { success: true, message: 'Order submitted successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Order submission error:', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: 'Failed to submit order. Please try again.' },
      { status: 500 }
    )
  }
}
