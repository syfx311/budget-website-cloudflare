import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

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

    // Store contact query in database
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      )
    }

    const { data: contact, error } = await supabase
      .from('contact_queries')
      .insert({
        name,
        email,
        message,
        status: 'new',
        created_at: new Date().toISOString(),
      })
      .select('id')
      .single()

    if (error || !contact) {
      console.error('Contact query creation error:', error)
      return NextResponse.json(
        { error: 'Failed to save contact query' },
        { status: 500 }
      )
    }

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
