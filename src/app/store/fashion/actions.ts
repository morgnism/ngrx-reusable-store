import { createAction, props } from '@ngrx/store';
import { Fashion } from '../../models/photo';

export const loadFashionPhotos = createAction('[PEOPLE] Load Fashion Photos');

export const loadFashionPhotosSuccess = createAction(
  '[FEATURE] Load Fashion Photos Success',
  props<{ fashion: Fashion[] }>()
);

export const loadFashionPhotosFailed = createAction(
  '[FEATURE] Load Fashion Photos Failed',
  props<{ error: any }>()
);
