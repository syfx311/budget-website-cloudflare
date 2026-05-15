-- Create inquiries table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20),
  facebook_account VARCHAR(255),
  tiktok_account VARCHAR(255),
  order_notes TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on created_at for faster queries
CREATE INDEX idx_inquiries_created_at ON public.inquiries(created_at);

-- Create index on customer_email for faster lookups
CREATE INDEX idx_inquiries_customer_email ON public.inquiries(customer_email);

-- Enable RLS (Row Level Security)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow select for authenticated users only
CREATE POLICY "Enable select for authenticated users" ON public.inquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy to allow insert for all (public insert)
CREATE POLICY "Enable insert for all" ON public.inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow update for authenticated users
CREATE POLICY "Enable update for authenticated users" ON public.inquiries
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create policy to allow delete for authenticated users
CREATE POLICY "Enable delete for authenticated users" ON public.inquiries
  FOR DELETE
  USING (auth.role() = 'authenticated');
