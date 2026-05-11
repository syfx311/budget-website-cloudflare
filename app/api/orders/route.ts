import { supabase } from '@/lib/supabase'
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

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          package_name: packageName,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          binder_type: binderType,
          colors: colors,
          inserts: inserts,
          challenges: challenges,
          special_requests: specialRequests,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit order' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, order: data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
