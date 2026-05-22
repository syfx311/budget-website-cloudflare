import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail, emailTemplates } from '@/lib/resend'
import { updateEmailLog } from '@/lib/database'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params
    const body = await request.json()
    const { emailType } = body

    if (!emailType || !['customer_confirmation', 'admin_notification'].includes(emailType)) {
      return NextResponse.json(
        { error: 'Invalid email type' },
        { status: 400 }
      )
    }

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      )
    }

    // Fetch order details
    // @ts-ignore - Supabase typing issue
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single()

    if (orderError || !order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    // Fetch customer details
    // @ts-ignore - Supabase typing issue
    const { data: customer, error: customerError } = await supabase
      .from('customers')
      .select('id, name, email, phone')
      // @ts-ignore
      .eq('id', (order as any).customer_id)
      .single()

    if (customerError || !customer) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      )
    }

    let recipientEmail: string
    let subject: string
    let htmlContent: string
    const typedCustomer = customer as any
    const typedOrder = order as any

    if (emailType === 'customer_confirmation') {
      recipientEmail = typedCustomer.email

      htmlContent = emailTemplates.customerConfirmation(
        typedCustomer.name,
        typedOrder.order_number,
        typedOrder.package_name,
        {
          binderType: typedOrder.binder_type,
          colors: typedOrder.colors,
          inserts: typedOrder.inserts,
          challenges: typedOrder.challenges,
          specialRequests: typedOrder.special_requests,
        }
      )

      subject = `Thank You for Your Order - ${typedOrder.order_number}`
    } else {
      // admin_notification
      recipientEmail = process.env.ADMIN_EMAIL || ''

      if (!recipientEmail) {
        return NextResponse.json(
          { error: 'Admin email not configured' },
          { status: 400 }
        )
      }

      htmlContent = emailTemplates.adminNotification(
        typedCustomer.name,
        typedCustomer.email,
        typedCustomer.phone || undefined,
        typedOrder.order_number,
        typedOrder.package_name,
        {
          binderType: typedOrder.binder_type,
          colors: typedOrder.colors,
          inserts: typedOrder.inserts,
          challenges: typedOrder.challenges,
          specialRequests: typedOrder.special_requests,
        }
      )

      subject = `New Order: ${typedOrder.order_number} from ${typedCustomer.name}`
    }

    // Send email
    const emailResult = await sendEmail({
      to: recipientEmail,
      subject,
      html: htmlContent,
    })

    if (!emailResult.success) {
      await updateEmailLog(orderId, recipientEmail, 'failed', emailResult.error)

      return NextResponse.json(
        { error: 'Failed to send email', details: emailResult.error },
        { status: 500 }
      )
    }

    // Update email log with success
    await updateEmailLog(orderId, recipientEmail, 'sent')

    return NextResponse.json(
      {
        success: true,
        message: `${emailType} email sent successfully`,
        recipientEmail,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email resend error:', error)
    return NextResponse.json(
      {
        error: 'Failed to resend email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
