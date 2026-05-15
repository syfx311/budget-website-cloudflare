-- Add missing columns to contact_queries table
ALTER TABLE contact_queries 
ADD COLUMN IF NOT EXISTS phone_number VARCHAR(20),
ADD COLUMN IF NOT EXISTS facebook_account VARCHAR(255),
ADD COLUMN IF NOT EXISTS tiktok_account VARCHAR(255);
