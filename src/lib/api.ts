import { 
  Service, 
  BlogPost, 
  Testimonial, 
  GalleryImage, 
  Client, 
  GlobalSettings,
  ApiResponse 
} from '../types/cms';

const API_BASE_URL = '/api';

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
//   console.log(response.json());
  return response.json();
}

export const cmsApi = {
  getServices: async () => {
    const response = await fetchAPI<ApiResponse<Service[]>>('/services');
    return response.data;
  },
  getPosts: async () => {
    const response = await fetchAPI<ApiResponse<BlogPost[]>>('/posts');
    return response.data;
  },
  getTestimonials: async () => {
    const response = await fetchAPI<ApiResponse<Testimonial[]>>('/testimonials');
    return response.data;
  },
  getGallery: async () => {
    const response = await fetchAPI<ApiResponse<GalleryImage[]>>('/gallery');
    return response.data;
  },
  getClients: async () => {
    const response = await fetchAPI<ApiResponse<Client[]>>('/clients');
    return response.data;
  },
  getSettings: async () => {
    const response = await fetchAPI<ApiResponse<GlobalSettings>>('/settings');
    return response.data;
  },
};
