import { ImageUrls } from './image-urls';
import { User } from './user';

export type People = Photo;
export type Nature = Photo;
export type Architecture = Photo;
export type Fashion = Photo;
export type Wallpapers = Photo;
export interface Photo {
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
  links: ImageUrls;
  promoted_at: null;
  sponsorship: null;
  updated_at: string;
  urls: ImageUrls;
  user: User;
  width: number;
}

export enum PhotoType {
  People = 'people',
  Nature = 'nature',
  Architecture = 'architecture',
  Fashion = 'fashion',
  Wallpapers = 'wallpapers',
}
