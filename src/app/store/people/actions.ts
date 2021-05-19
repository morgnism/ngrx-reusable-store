import { createAction, props } from '@ngrx/store';
import { People } from '../../models/photo';

export const loadPeoplePhotos = createAction('[PEOPLE] Load People Photos');

export const loadPeoplePhotosSuccess = createAction(
  '[FEATURE] Load People Photos Success',
  props<{ people: People[] }>()
);

export const loadPeoplePhotosFailed = createAction(
  '[FEATURE] Load People Photos Failed',
  props<{ error: any }>()
);
