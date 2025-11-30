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
  bookingUrl: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  isActive: boolean;
  order: number;
}

export interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

export interface Client {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  isActive: boolean;
}

export interface GlobalSettings {
  [key: string]: any;
}

export interface ApiResponse<T> {
  data: T;
}
