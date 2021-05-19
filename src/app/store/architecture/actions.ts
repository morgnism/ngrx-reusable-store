import { createAction, props } from '@ngrx/store';
import { Architecture } from '../../models/photo';

export const loadArchitecturePhotos = createAction(
  '[PEOPLE] Load Architecture Photos'
);

export const loadArchitecturePhotosSuccess = createAction(
  '[FEATURE] Load Architecture Photos Success',
  props<{ architecture: Architecture[] }>()
);

export const loadArchitecturePhotosFailed = createAction(
  '[FEATURE] Load Architecture Photos Failed',
  props<{ error: any }>()
);
