import { User } from './user';

export interface Photo {
  id: string | number;
  name: string;
  scr: string;
  created_at: string;
  updated_at: string;
  likes: number;
  user: User;
}

export enum PhotoType {
  Promos = 'Promos',
  Wallpapers = 'Wallpapers',
  People = 'People',
  Nature = 'Nature',
  Architecture = 'Architecture',
  Misc = 'Misc',
}
