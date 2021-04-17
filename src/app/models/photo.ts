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
  PROMOS = 'Promos',
  WALLPAPERS = 'Wallpapers',
  PEOPLE = 'People',
  NATURE = 'Nature',
  ARCHITECTURE = 'Architecture',
  MISC = 'Misc',
}
