import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotosState, selectAllActivePhotos } from './reducer';

export const photosState = createFeatureSelector<PhotosState>('photos');

export const selectActivePhotoType = createSelector(
  photosState,
  (state) => state.selectedPhotoType
);

export const selectActivePhotoTypeState = createSelector(
  photosState,
  selectActivePhotoType,
  (state, activePhotoType) => state[activePhotoType]
);

export const selectAllPhotos = createSelector(
  selectActivePhotoTypeState,
  selectAllActivePhotos
);

export const selectPhotosLoadedStatus = createSelector(
  selectActivePhotoTypeState,
  (state) => state.isLoaded
);
