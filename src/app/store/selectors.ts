import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotosState } from './reducer';

export const photosState = createFeatureSelector<PhotosState>('photos');

export const selectActivePhotoTypeState = createSelector(
  photosState,
  (state) => state[state.selectedPhotoType]
);

export const selectAllPhotos = createSelector(
  selectActivePhotoTypeState,
  (state) => state.photos
);
