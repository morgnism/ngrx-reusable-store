import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FashionState, selectAllFashionPhotosArray } from './reducer';

export const fashionState = createFeatureSelector<FashionState>('fashion');

export const selectAllFashionPhotos = createSelector(
  fashionState,
  selectAllFashionPhotosArray
);

export const selectFashionPhotosLoadedStatus = createSelector(
  fashionState,
  (state) => state.isLoaded
);
