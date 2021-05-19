import { createAction, props } from '@ngrx/store';
import { Wallpapers } from '../../models/photo';

export const loadWallpapersPhotos = createAction(
  '[PEOPLE] Load Wallpapers Photos'
);

export const loadWallpapersPhotosSuccess = createAction(
  '[FEATURE] Load Wallpapers Photos Success',
  props<{ wallpapers: Wallpapers[] }>()
);

export const loadWallpapersPhotosFailed = createAction(
  '[FEATURE] Load Wallpapers Photos Failed',
  props<{ error: any }>()
);
