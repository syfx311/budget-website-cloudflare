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

    // If Supabase is not available, return success but log the data
    if (!supabase) {
      console.warn('Supabase not configured, order data:', {
        packageName,
        customerName,
        customerEmail,
        customerPhone,
        binderType,
        colors,
        inserts,
        challenges,
        specialRequests
      })
      return NextResponse.json(
        { success: true, message: 'Order received (database pending configuration)' },
        { status: 201 }
      )
    }

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          package_name: packageName,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone || null,
          binder_type: binderType || null,
          colors: colors || null,
          inserts: Array.isArray(inserts) ? inserts : null,
          challenges: challenges || null,
          special_requests: specialRequests || null
        }
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error.message, error.details, error.hint)
      return NextResponse.json(
        { error: error.message || 'Failed to submit order', details: error.details },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, order: data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
