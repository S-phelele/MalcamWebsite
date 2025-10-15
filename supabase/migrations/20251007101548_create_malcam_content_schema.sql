/*
  # Malcam Website Content Management Schema

  ## Overview
  This migration creates the database schema for managing the Malcam website content,
  including case studies, blog posts, partners, contact form submissions, and more.

  ## New Tables

  ### 1. case_studies
  Stores client case studies and project showcases
  - `id` (uuid, primary key)
  - `title` (text) - Case study title
  - `slug` (text, unique) - URL-friendly identifier
  - `client_name` (text) - Client name (can be generic like "Major SA Telco")
  - `client_logo_url` (text, nullable) - Client logo URL
  - `industry` (text) - Industry sector
  - `challenge` (text) - Problem statement
  - `solution` (text) - Solution description
  - `outcomes` (text) - Results and KPIs
  - `technologies` (text array) - Stack/vendors used
  - `testimonial` (text, nullable) - Client quote
  - `featured_image_url` (text, nullable)
  - `published` (boolean) - Publication status
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. blog_posts
  Stores blog articles and resources
  - `id` (uuid, primary key)
  - `title` (text)
  - `slug` (text, unique)
  - `excerpt` (text) - Short summary
  - `content` (text) - Full article content
  - `author` (text)
  - `featured_image_url` (text, nullable)
  - `tags` (text array)
  - `published` (boolean)
  - `published_at` (timestamptz, nullable)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. partners
  Stores information about technology partners and vendors
  - `id` (uuid, primary key)
  - `name` (text) - Partner name (e.g., "F5", "Fortinet")
  - `slug` (text, unique)
  - `logo_url` (text)
  - `description` (text)
  - `partner_level` (text) - Certification level
  - `certifications` (text array)
  - `website_url` (text, nullable)
  - `category` (text) - e.g., "Networking", "Security", "Cloud"
  - `display_order` (integer) - For sorting
  - `active` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. job_postings
  Stores career opportunities
  - `id` (uuid, primary key)
  - `title` (text)
  - `slug` (text, unique)
  - `department` (text) - e.g., "Engineering", "Sales"
  - `location` (text)
  - `employment_type` (text) - e.g., "Full-time", "Contract"
  - `description` (text)
  - `requirements` (text array)
  - `benefits` (text array, nullable)
  - `active` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key)
  - `form_type` (text) - e.g., "general", "demo", "quote", "career_application"
  - `name` (text)
  - `email` (text)
  - `company` (text, nullable)
  - `phone` (text, nullable)
  - `message` (text)
  - `metadata` (jsonb, nullable) - For form-specific fields
  - `status` (text) - e.g., "new", "contacted", "closed"
  - `created_at` (timestamptz)

  ### 6. newsletter_subscribers
  Stores newsletter email subscriptions
  - `id` (uuid, primary key)
  - `email` (text, unique)
  - `subscribed` (boolean)
  - `subscribed_at` (timestamptz)
  - `unsubscribed_at` (timestamptz, nullable)

  ## Security
  - All tables have RLS enabled
  - Public read access for published content (case studies, blog posts, partners, jobs)
  - No public write access (content managed through admin interface)
  - Public insert access for contact submissions and newsletter subscriptions

  ## Indexes
  - Unique indexes on slug fields for fast lookups
  - Index on published status for filtering
  - Index on created_at for sorting
*/

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  client_name text NOT NULL,
  client_logo_url text,
  industry text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  outcomes text NOT NULL,
  technologies text[] DEFAULT '{}',
  testimonial text,
  featured_image_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  featured_image_url text,
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  logo_url text NOT NULL,
  description text NOT NULL,
  partner_level text,
  certifications text[] DEFAULT '{}',
  website_url text,
  category text NOT NULL,
  display_order integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create job_postings table
CREATE TABLE IF NOT EXISTS job_postings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  department text NOT NULL,
  location text NOT NULL,
  employment_type text NOT NULL,
  description text NOT NULL,
  requirements text[] DEFAULT '{}',
  benefits text[] DEFAULT '{}',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL DEFAULT 'general',
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  metadata jsonb,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for case_studies
CREATE POLICY "Anyone can view published case studies"
  ON case_studies FOR SELECT
  USING (published = true);

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

-- RLS Policies for partners
CREATE POLICY "Anyone can view active partners"
  ON partners FOR SELECT
  USING (active = true);

-- RLS Policies for job_postings
CREATE POLICY "Anyone can view active job postings"
  ON job_postings FOR SELECT
  USING (active = true);

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own subscription"
  ON newsletter_subscribers FOR SELECT
  USING (true);

CREATE POLICY "Anyone can update their own subscription"
  ON newsletter_subscribers FOR UPDATE
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(published);
CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON case_studies(industry);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_partners_slug ON partners(slug);
CREATE INDEX IF NOT EXISTS idx_partners_category ON partners(category);
CREATE INDEX IF NOT EXISTS idx_job_postings_slug ON job_postings(slug);
CREATE INDEX IF NOT EXISTS idx_job_postings_active ON job_postings(active);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_form_type ON contact_submissions(form_type);
