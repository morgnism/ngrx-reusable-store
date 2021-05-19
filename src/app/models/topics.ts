import { ImageUrls } from './image-urls';
import { PhotoType } from './photo';
import { User, UserLinks } from './user';

export interface Topic {
  cover_photo: CoverPhoto;
  current_user_contributions: [];
  description: string;
  ends_at: null;
  featured: boolean;
  id: string;
  links: ImageUrls;
  owners: Owner[];
  preview_photos: PreviewPhoto[];
  published_at: string;
  slug: PhotoType;
  starts_at: string;
  status: string;
  title: string;
  total_current_user_submissions: null;
  total_photos: number;
  updated_at: string;
}

interface CoverPhoto {
  alt_description: string;
  blur_hash: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: UserLinks;
  promoted_at: string;
  sponsorship: null;
  updated_at: string;
  urls: ImageUrls;
  user: User;
  width: number;
}

interface Owner {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: null;
  links: UserLinks;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: ImageUrls;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
}

interface PreviewPhoto {
  blur_hash: string;
  created_at: string;
  id: string;
  updated_at: string;
  urls: ImageUrls;
}
