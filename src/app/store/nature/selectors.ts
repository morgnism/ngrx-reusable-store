import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NatureState, selectAllNaturePhotosArray } from './reducer';

export const natureState = createFeatureSelector<NatureState>('nature');

export const selectAllNaturePhotos = createSelector(
  natureState,
  selectAllNaturePhotosArray
);

export const selectNaturePhotosLoadedStatus = createSelector(
  natureState,
  (state) => state.isLoaded
);
