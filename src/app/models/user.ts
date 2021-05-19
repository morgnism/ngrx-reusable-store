import { ImageUrls } from './image-urls';

export interface User {
  accepted_tos: boolean;
  bio: null;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: null;
  last_name: string;
  links: UserLinks;
  location: null;
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

export interface UserLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}
