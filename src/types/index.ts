export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  client_logo_url?: string;
  industry: string;
  challenge: string;
  solution: string;
  outcomes: string;
  technologies: string[];
  testimonial?: string;
  featured_image_url?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featured_image_url?: string;
  tags: string[];
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Partner {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  description: string;
  partner_level?: string;
  certifications: string[];
  website_url?: string;
  category: string;
  display_order: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  form_type: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  metadata?: Record<string, unknown>;
}
