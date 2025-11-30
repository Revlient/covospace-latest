# CMS Architecture for Covospace

This document outlines the architecture for building a custom Content Management System (CMS) for the Covospace website using **Next.js**, **Drizzle ORM**, **Neon DB**, and **Cloudinary**.

## 1. Tech Stack Overview

*   **Framework**: Next.js (App Router) - Handles both the Admin UI and the API endpoints.
*   **Database**: Neon (Serverless PostgreSQL).
*   **ORM**: Drizzle ORM - For type-safe database interactions and schema management.
*   **Language**: TypeScript.
*   **Image Hosting**: Cloudinary - Optimized image delivery and transformation.
*   **Authentication**: (Recommended) NextAuth.js or Clerk for securing the Admin Dashboard.

---

## 2. Database Schema (Drizzle ORM)

We will define the schema in `src/db/schema.ts`. We utilize PostgreSQL's `jsonb` type for flexible data structures like pricing and features.

### A. Services Table
Stores data found in `src/data/quoteServices.ts`.

```typescript
import { pgTable, serial, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  slug: text('slug').unique().notNull(), // e.g., 'flexi-desk'
  name: text('name').notNull(),
  description: text('description').notNull(),
  // Store pricing as a JSON object: { daily: "INR 500", monthly: "INR 5,500", ... }
  pricing: jsonb('pricing').$type<{
    daily?: string;
    weekly?: string;
    monthly?: string;
    hourly?: string;
    annually?: string;
  }>().notNull(),
  // Store features as a string array
  features: jsonb('features').$type<string[]>().notNull(),
  isPopular: boolean('is_popular').default(false),
  bookingUrl: text('booking_url'),
  imageUrl: text('image_url'), // Cloudinary URL
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

### B. Blog Posts Table
For the blog section.

```typescript
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(), // Markdown or HTML
  coverImage: text('cover_image'), // Cloudinary URL
  author: text('author'),
  publishedAt: timestamp('published_at'),
  isPublished: boolean('is_published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

### C. Testimonials Table
For the client testimonials section.

```typescript
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  clientName: text('client_name').notNull(),
  role: text('role'),
  company: text('company'),
  quote: text('quote').notNull(),
  avatarUrl: text('avatar_url'), // Cloudinary URL
  isActive: boolean('is_active').default(true),
  order: serial('order'), // For custom sorting
});
```

### D. Gallery & Clients Table
For the image gallery and client logos.

```typescript
export const galleryImages = pgTable('gallery_images', {
  id: serial('id').primaryKey(),
  title: text('title'),
  imageUrl: text('image_url').notNull(), // Cloudinary URL
  publicId: text('public_id'), // Cloudinary Public ID for management
  category: text('category').default('general'), // e.g., 'office', 'events'
  createdAt: timestamp('created_at').defaultNow(),
});

export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  logoUrl: text('logo_url').notNull(), // Cloudinary URL
  websiteUrl: text('website_url'),
  isActive: boolean('is_active').default(true),
});
```

### E. Global Settings & Page Content
For "About Us", "Contact Info", and "Hero" sections.

```typescript
export const globalSettings = pgTable('global_settings', {
  id: serial('id').primaryKey(),
  key: text('key').unique().notNull(), // e.g., 'contact_info', 'hero_section'
  value: jsonb('value').notNull(), // Flexible JSON structure based on the key
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

---

## 3. TypeScript Interfaces (API Responses)

These interfaces define the shape of data returned by your Next.js API endpoints (`/api/services`, `/api/posts`, etc.) to the frontend.

### Service Data
```typescript
export interface Service {
  id: number;
  slug: string;
  name: string;
  description: string;
  pricing: {
    daily?: string;
    weekly?: string;
    monthly?: string;
    hourly?: string;
    annually?: string;
  };
  features: string[];
  isPopular: boolean;
  bookingUrl: string | null;
  imageUrl: string | null;
}

export interface ServicesResponse {
  data: Service[];
}
```

### Blog Post Data
```typescript
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  author: string | null;
  publishedAt: string | null; // ISO Date string
}
```

### Global Settings (Hero & Contact)
```typescript
// Stored in global_settings table with key = 'hero_content'
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImageUrl: string;
}

// Stored in global_settings table with key = 'contact_info'
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}
```

---

## 4. Cloudinary Integration Strategy

### Upload Workflow
1.  **Admin UI**: User selects an image in the CMS form.
2.  **Client-Side**: The Next.js Admin component uploads the file directly to Cloudinary using a signed upload preset or via a Next.js API route proxy.
3.  **Response**: Cloudinary returns a secure URL (`secure_url`) and a Public ID (`public_id`).
4.  **Database Save**: The CMS saves the `secure_url` into the Neon database (e.g., into `services.imageUrl`).

### Image Optimization
When displaying images on the frontend, use the Cloudinary URL to apply transformations on the fly:
*   **Format**: `f_auto` (Serve WebP/AVIF automatically).
*   **Quality**: `q_auto` (Optimize file size).
*   **Resize**: `w_800,c_limit` (Resize to fit container).

**Example URL stored in DB:**
`https://res.cloudinary.com/demo/image/upload/v1234567890/covospace/hero-bg.jpg`

**Example Usage in React:**
```tsx
<img 
  src={service.imageUrl.replace('/upload/', '/upload/f_auto,q_auto,w_500/')} 
  alt={service.name} 
/>
```

---

## 5. Implementation Steps

1.  **Setup**: Initialize Next.js project and install dependencies (`drizzle-orm`, `drizzle-kit`, `@neondatabase/serverless`, `pg`).
2.  **Schema**: Create `src/db/schema.ts` with the definitions above.
3.  **Migration**: Run `drizzle-kit generate` and `drizzle-kit migrate` to push schema to Neon.
4.  **API Routes**: Create Next.js Route Handlers (`app/api/services/route.ts`) to GET and POST data.
5.  **Admin UI**: Build a simple dashboard (`app/admin/services/page.tsx`) with forms to edit this data.
6.  **Frontend Integration**: Replace hardcoded arrays in `covospace-latest` with `fetch()` calls to this new CMS API.
