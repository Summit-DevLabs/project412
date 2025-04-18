export const EMAILJS_SERVICE_ID = "service_ghfjayq"
export const EMAILJS_TEMPLATE_ID = "template_440e4fe"
export const EMAILJS_USER_ID = "m7kzm3k_3CDMLeRgK"


export interface Photo {
  id: number;
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  credit?: string;
  date?: Date;
}

export interface PhotoContainerProps {
  photos: Photo[];
  layout: 'col' | 'row' | 'grid';
  size?: 'small' | 'medium' | 'large';
  filePath: 'media' | 'logos' | 'headshots';
  photoStyle: 'contain' | 'cover';
  hideAnimation?: boolean;
}

export interface Race {
  raceName: string;
  date: string;
  location: string;
  type: string;
}

export interface RosterCardProps {
  member?: any;
  sponsor?: any;
}

export interface Sponsor {
  id: number;
  name: string;
  img: string;
  alt: string;
  description: string;
  newSponsor?: boolean;
}
export interface NewsItem {
  id: string;
  title: string;
  category: string;
  description: string;    // Short preview description
  
  imagePath: string;      // Main/hero image
  additionalImages?: string[]; // Optional gallery
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  slug: string;          // URL-friendly version of title
  tags?: string[];       // For related articles
  readTime?: number;     // Estimated reading time in minutes
}
