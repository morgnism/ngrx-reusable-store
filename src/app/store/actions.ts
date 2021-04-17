import { createAction, props } from '@ngrx/store';
import { Photo } from '../models/photo';

export const loadPhoto = createAction('[FEATURE] Load Photo');

export const loadPhotoSuccess = createAction(
  '[FEATURE] Load Photo Success',
  props<{ photos: Photo[] }>()
);

export const loadPhotoFailed = createAction(
  '[FEATURE] Load Photo Failed',
  props<{ error: any }>()
);
