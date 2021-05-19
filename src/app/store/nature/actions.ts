import { createAction, props } from '@ngrx/store';
import { Nature } from '../../models/photo';

export const loadNaturePhotos = createAction('[PEOPLE] Load Nature Photos');

export const loadNaturePhotosSuccess = createAction(
  '[FEATURE] Load Nature Photos Success',
  props<{ nature: Nature[] }>()
);

export const loadNaturePhotosFailed = createAction(
  '[FEATURE] Load Nature Photos Failed',
  props<{ error: any }>()
);
